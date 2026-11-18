export const WHATSAPP_BUSINESS_URL = "https://wa.me/message/XG6VGKBPYH3YH1";
export const CONTACT_EMAIL = "contact@orithyn.com";

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  preferredContact: "Email" | "WhatsApp" | "Phone";
  message: string;
  botcheck: string; // Honeypot
}

export interface EstimatorAttachedData {
  projectType?: string;
  scopeTier?: string;
  features?: string;
  budgetRange?: string;
  timeline?: string;
  summaryText?: string;
}

export const servicesList: string[] = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "Backend & API Development",
  "Business Management Systems",
  "AI Solutions & Business Automation",
  "Software Maintenance & Technical Support",
];

export const budgetRanges: string[] = [
  "Flexible / To be determined",
  "Under $3,000",
  "$3,000 - $6,000",
  "$6,000 - $12,000",
  "$12,000 - $25,000",
  "$25,000+",
];

export const preferredContactMethods: ("Email" | "WhatsApp" | "Phone")[] = [
  "Email",
  "WhatsApp",
  "Phone",
];

/**
 * Maps an Estimator projectType ID to the most relevant primary service
 */
export function mapProjectTypeToService(projectTypeId: string): string {
  switch (projectTypeId) {
    case "web-saas":
      return "Web Application Development";
    case "ai-assistant":
      return "AI Solutions & Business Automation";
    case "automation":
      return "Business Management Systems";
    case "enterprise":
      return "Custom Software Development";
    default:
      return "Custom Software Development";
  }
}

/**
 * Maps calculated numeric cost bounds to the appropriate budget bracket.
 * If the estimated range crosses multiple brackets or is ambiguous,
 * it returns "Flexible / To be determined" to avoid misrepresenting the cost.
 */
export function mapBudgetRange(minCost: number, maxCost: number): string {
  if (!minCost || !maxCost || minCost <= 0 || maxCost <= 0) {
    return "Flexible / To be determined";
  }

  // Bracket 1: Under $3,000
  if (minCost < 3000 && maxCost <= 3000) {
    return "Under $3,000";
  }

  // Bracket 2: $3,000 - $6,000
  if (minCost >= 3000 && maxCost <= 6000) {
    return "$3,000 - $6,000";
  }

  // Bracket 3: $6,000 - $12,000
  if (minCost >= 6000 && maxCost <= 12000) {
    return "$6,000 - $12,000";
  }

  // Bracket 4: $12,000 - $25,000
  if (minCost >= 12000 && maxCost <= 25000) {
    return "$12,000 - $25,000";
  }

  // Bracket 5: $25,000+
  if (minCost >= 25000) {
    return "$25,000+";
  }

  // Ambiguous or multi-bracket spanning range (e.g. $2,800 - $5,200 or $4,600 - $8,700)
  return "Flexible / To be determined";
}

/**
 * Standard email format regex check
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates the contact form inputs
 */
export function validateContactForm(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name (minimum 2 characters).";
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = "Please provide a valid business or personal email address.";
  }

  if (!data.service || !servicesList.includes(data.service)) {
    errors.service = "Please select a service from the list.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please describe your project or requirements (minimum 10 characters).";
  }

  // Honeypot check
  if (data.botcheck && data.botcheck.trim().length > 0) {
    errors.botcheck = "Automated submission detected.";
  }

  return errors;
}

/**
 * Generates an offline mailto fallback link with all fields pre-filled
 */
export function generateMailtoFallback(data: ContactFormData, destinationEmail: string = "contact@orithyn.com"): string {
  const subject = encodeURIComponent(`[Website Enquiry] ${data.service} — ${data.name}`);
  const body = encodeURIComponent(
    `Full Name: ${data.name}\n` +
    `Company: ${data.company || "N/A"}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone || "N/A"}\n` +
    `Service Required: ${data.service}\n` +
    `Approximate Budget: ${data.budget || "Flexible"}\n` +
    `Preferred Contact Method: ${data.preferredContact}\n\n` +
    `Project Details / Scope:\n${data.message}\n`
  );

  return `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
}

/**
 * Returns the official Orithyn WhatsApp Business short link for direct chat fallback.
 */
export function generateWhatsAppFallback(): string {
  return WHATSAPP_BUSINESS_URL;
}
