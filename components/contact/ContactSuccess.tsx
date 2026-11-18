"use client";

import { ContactFormData, WHATSAPP_BUSINESS_URL } from "@/lib/contactConfig";
import { CheckCircle2, MessageSquare, RotateCcw, Clock } from "lucide-react";

interface ContactSuccessProps {
  data: ContactFormData;
  onReset: () => void;
}

export default function ContactSuccess({ data, onReset }: ContactSuccessProps) {

  return (
    <div className="bg-zinc-900/90 p-6 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl backdrop-blur-xl animate-in fade-in duration-300">
      {/* Success Banner */}
      <div className="text-center space-y-4 pb-8 border-b border-zinc-800">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 border border-emerald-500/30 text-emerald-400 shadow-xl shadow-emerald-500/10">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Enquiry Received
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Thank You, {data.name}!
          </h2>
          <p className="text-sm text-zinc-300 max-w-lg mx-auto leading-relaxed">
            Your project details have been safely delivered to our engineering desk at <strong className="text-white font-medium">contact@orithyn.com</strong>.
          </p>
        </div>
      </div>

      {/* Submission Recap */}
      <div className="py-6 border-b border-zinc-800 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          Enquiry Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-0.5">
            <span className="text-zinc-400">Service:</span>
            <p className="font-semibold text-white">{data.service}</p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-0.5">
            <span className="text-zinc-400">Response Contact:</span>
            <p className="font-semibold text-white truncate">{data.email}</p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-0.5">
            <span className="text-zinc-400">Preferred Channel:</span>
            <p className="font-semibold text-amber-400">{data.preferredContact}</p>
          </div>
          <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 space-y-0.5">
            <span className="text-zinc-400">Approximate Budget:</span>
            <p className="font-semibold text-white">{data.budget || "Flexible"}</p>
          </div>
        </div>
      </div>

      {/* What Happens Next */}
      <div className="py-6 border-b border-zinc-800 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-amber-400" /> What Happens Next?
        </h3>
        <ol className="space-y-3 text-xs text-zinc-300">
          <li className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 font-bold font-mono shrink-0">1</span>
            <span><strong className="text-white">Technical Review:</strong> An engineer reviews your requirements, functional scope, and architectural feasibility.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 font-bold font-mono shrink-0">2</span>
            <span><strong className="text-white">Direct Follow-Up:</strong> We reply via your preferred contact channel (<strong className="text-amber-400">{data.preferredContact}</strong>) within 1 business day.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-amber-400 font-bold font-mono shrink-0">3</span>
            <span><strong className="text-white">Consultation &amp; Roadmap:</strong> We schedule a discovery call to align on milestones, deliverables, and exact timelines.</span>
          </li>
        </ol>
      </div>

      {/* Immediate Escalation & Reset Actions */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href={WHATSAPP_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp (opens in a new tab)"
          className="w-full sm:w-auto h-11 px-5 rounded-xl text-xs font-medium inline-flex items-center justify-center gap-2 border border-amber-500/40 bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <MessageSquare className="h-4 w-4" aria-hidden="true" /> Have Urgent Questions? Chat with us on WhatsApp
        </a>

        <button
          type="button"
          onClick={onReset}
          className="text-xs text-zinc-400 hover:text-white transition inline-flex items-center gap-1.5 py-2 px-3"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Submit Another Enquiry
        </button>
      </div>
    </div>
  );
}
