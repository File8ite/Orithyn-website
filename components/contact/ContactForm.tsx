"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import ContactSuccess from "@/components/contact/ContactSuccess";
import {
  ContactFormData,
  servicesList,
  budgetRanges,
  preferredContactMethods,
  validateContactForm,
  generateMailtoFallback,
  generateWhatsAppFallback,
} from "@/lib/contactConfig";
import {
  Send,
  Sparkles,
  AlertCircle,
  X,
  Mail,
  MessageSquare,
  Loader2,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";

export default function ContactForm() {
  const searchParams = useSearchParams();

  // URL parameters from Project Estimator or direct links
  const scopeParam = searchParams.get("scope");
  const serviceParam = searchParams.get("service");
  const budgetParam = searchParams.get("budget");
  const tierParam = searchParams.get("tier");
  const typeParam = searchParams.get("type");

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: servicesList[0],
    budget: budgetRanges[0],
    preferredContact: "Email",
    message: "",
    botcheck: "",
  });

  const [hasEstimatorScope, setHasEstimatorScope] = useState(false);
  const [scopeDetails, setScopeDetails] = useState<{ type?: string; tier?: string } | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [lastSubmittedTime, setLastSubmittedTime] = useState<number>(0);

  const formLoadTime = useRef<number>(Date.now());

  // Initialize and populate from query parameters
  useEffect(() => {
    let initialService = servicesList[0];
    let initialBudget = budgetRanges[0];
    let initialMessage = "";

    if (serviceParam && servicesList.includes(serviceParam)) {
      initialService = serviceParam;
    }

    if (budgetParam && budgetRanges.includes(budgetParam)) {
      initialBudget = budgetParam;
    }

    if (scopeParam) {
      initialMessage = scopeParam;
      setHasEstimatorScope(true);
      setScopeDetails({
        type: typeParam || undefined,
        tier: tierParam || undefined,
      });
    }

    setFormData((prev) => ({
      ...prev,
      service: initialService,
      budget: initialBudget,
      message: initialMessage || prev.message,
    }));
  }, [scopeParam, serviceParam, budgetParam, tierParam, typeParam]);

  const clearAttachedScope = () => {
    setHasEstimatorScope(false);
    setScopeDetails(null);
    setFormData((prev) => ({
      ...prev,
      message: "",
    }));
  };

  const handleInputChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear validation error for this field as user types
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 1. Client-side field validation
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setErrorMessage("Please correct the highlighted fields before submitting.");
      return;
    }

    // 2. Anti-bot time check (forms submitted in under 2 seconds are almost always bot-scraped)
    const elapsedTime = (Date.now() - formLoadTime.current) / 1000;
    if (elapsedTime < 2) {
      setStatus("error");
      setErrorMessage("Submission rejected due to automated activity. Please wait a moment and try again.");
      return;
    }

    // 3. Prevent rapid repeated submissions (30-second cooldown)
    const now = Date.now();
    if (now - lastSubmittedTime < 30000 && lastSubmittedTime !== 0) {
      setStatus("error");
      setErrorMessage("You have submitted an enquiry recently. Please wait a moment before sending another.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    // If access key is missing in environment, report transparently and activate fallbacks
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form delivery endpoint is awaiting configuration (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY). Please use our direct Email or WhatsApp fallback below to send your enquiry immediately."
      );
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `[New Project Enquiry] ${formData.service} — ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not specified",
          phone: formData.phone || "Not specified",
          service: formData.service,
          budget: formData.budget,
          preferred_contact: formData.preferredContact,
          message: formData.message,
          botcheck: formData.botcheck, // Web3Forms native honeypot check
        }),
      });

      let result: any = null;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        try {
          result = JSON.parse(text);
        } catch {
          result = { success: false, message: "Provider returned an unexpected response format." };
        }
      }

      if (response.ok && result && result.success) {
        setStatus("success");
        setLastSubmittedTime(Date.now());
      } else {
        setStatus("error");
        setErrorMessage(
          (result && result.message) ||
          "Failed to process enquiry. Please try again or use direct email / WhatsApp below."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network connection error prevented form delivery. Please retry, or use the direct Email or WhatsApp links below."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: servicesList[0],
      budget: budgetRanges[0],
      preferredContact: "Email",
      message: "",
      botcheck: "",
    });
    setErrors({});
    setStatus("idle");
    setErrorMessage("");
    setHasEstimatorScope(false);
    setScopeDetails(null);
    formLoadTime.current = Date.now();
  };

  if (status === "success") {
    return <ContactSuccess data={formData} onReset={handleReset} />;
  }

  const mailtoFallback = generateMailtoFallback(formData);
  const whatsappFallback = generateWhatsAppFallback(formData);

  return (
    <div className="bg-zinc-900/90 p-6 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl backdrop-blur-xl">
      {/* Header & Attached Scope Banner */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Send a Project Enquiry
          </h2>
          <span className="text-xs text-zinc-400 font-mono">* Required fields</span>
        </div>

        {hasEstimatorScope && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3 text-xs text-amber-300 animate-in fade-in">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
              <span>
                <strong>Project Estimator Scope Attached:</strong>{" "}
                {scopeDetails?.type ? `${scopeDetails.type} (${scopeDetails.tier || "Standard"})` : "Calculated Scope"}
              </span>
            </div>
            <button
              type="button"
              onClick={clearAttachedScope}
              className="text-zinc-400 hover:text-white transition p-1"
              title="Clear attached estimate"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Global Error Banner with Immediate Fallbacks */}
      {status === "error" && errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 space-y-3 animate-in fade-in text-xs text-red-200">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{errorMessage}</p>
          </div>

          <div className="pt-2 border-t border-red-500/20 flex flex-wrap items-center gap-3">
            <span className="text-zinc-300 font-semibold">Immediate alternative channels:</span>
            <a
              href={mailtoFallback}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-amber-400 border border-zinc-700 transition"
            >
              <Mail className="h-3.5 w-3.5" /> Send via Email Client
            </a>
            <a
              href={whatsappFallback}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-emerald-400 border border-zinc-700 transition"
            >
              <MessageSquare className="h-3.5 w-3.5" /> Send via WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot field (hidden from legitimate users) */}
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          value={formData.botcheck}
          onChange={(e) => handleInputChange("botcheck", e.target.value)}
          className="hidden"
          aria-hidden="true"
          style={{ display: "none" }}
        />

        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="e.g. Sarah Jenkins"
              disabled={status === "submitting"}
              className={`w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition ${
                errors.name
                  ? "border-red-500 bg-red-950/20 focus:border-red-400"
                  : "border-zinc-800 bg-zinc-950 focus:border-amber-400"
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              Company / Organisation <span className="text-zinc-500 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="e.g. Acme Health or Startup"
              disabled={status === "submitting"}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="sarah@company.com"
              disabled={status === "submitting"}
              className={`w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition ${
                errors.email
                  ? "border-red-500 bg-red-950/20 focus:border-red-400"
                  : "border-zinc-800 bg-zinc-950 focus:border-amber-400"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              Phone Number <span className="text-zinc-500 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="e.g. +1 555 123 4567"
              disabled={status === "submitting"}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Row 3: Service Required & Budget Range */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              Service Required *
            </label>
            <select
              value={formData.service}
              onChange={(e) => handleInputChange("service", e.target.value)}
              disabled={status === "submitting"}
              className={`w-full rounded-xl border px-4 py-3 text-sm text-white focus:outline-none transition ${
                errors.service
                  ? "border-red-500 bg-red-950/20"
                  : "border-zinc-800 bg-zinc-950 focus:border-amber-400"
              }`}
            >
              {servicesList.map((svc) => (
                <option key={svc} value={svc} className="bg-zinc-950 text-white">
                  {svc}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> {errors.service}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
              Approximate Budget <span className="text-zinc-500 font-normal lowercase">(optional)</span>
            </label>
            <select
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              disabled={status === "submitting"}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-amber-400 focus:outline-none transition"
            >
              {budgetRanges.map((b) => (
                <option key={b} value={b} className="bg-zinc-950 text-white">
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
            Preferred Response Method
          </label>
          <div className="grid grid-cols-3 gap-3">
            {preferredContactMethods.map((method) => {
              const selected = formData.preferredContact === method;
              return (
                <button
                  key={method}
                  type="button"
                  onClick={() => handleInputChange("preferredContact", method)}
                  disabled={status === "submitting"}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition flex items-center justify-center gap-2 cursor-pointer ${
                    selected
                      ? "border-amber-500 bg-amber-500/15 text-amber-300 font-bold shadow-sm"
                      : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {selected && <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />}
                  <span>{method}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Description / Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
            Project Description / Requirements *
          </label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            disabled={status === "submitting"}
            placeholder="Tell us what you are trying to build, your operational goals, or desired timeline..."
            className={`w-full rounded-xl border px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition font-sans leading-relaxed ${
              errors.message
                ? "border-red-500 bg-red-950/20 focus:border-red-400"
                : "border-zinc-800 bg-zinc-950 focus:border-amber-400"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button & Anti-Spam Notice */}
        <div className="pt-2 space-y-3">
          <Button
            type="submit"
            variant="primary"
            disabled={status === "submitting"}
            className="h-12 w-full justify-center inline-flex items-center gap-2 text-sm font-bold shadow-xl shadow-amber-500/20 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-black" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Project Enquiry</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-[11px] text-zinc-400 text-center flex items-center justify-center gap-1.5">
            <ShieldAlert className="h-3 w-3 text-amber-400" />
            <span>Spam-protected submission. No credentials or secrets exposed. Direct response within 1 business day.</span>
          </p>
        </div>
      </form>
    </div>
  );
}
