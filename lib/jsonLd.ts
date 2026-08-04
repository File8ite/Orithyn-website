export interface FAQItem {
  question: string;
  answer: string;
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Orythyn Inc.",
    "alternateName": "Orythyn",
    "url": "https://orithyn.com",
    "logo": "https://orithyn.com/favicon.ico",
    "description": "Full-stack software engineering and AI product studio designing, building, and scaling custom web applications, AI knowledge assistants, and business workflow automation.",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global Remote / Worldwide"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2348148526658",
      "contactType": "customer service",
      "email": "contact@orithyn.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://github.com/File8ite/Orithyn-website",
      "https://github.com/Orithyn"
    ],
    "knowsAbout": [
      "Custom Software Development",
      "Web Application Development",
      "Artificial Intelligence & LLM RAG Systems",
      "Business Process Automation",
      "SLA Maintenance & Cloud Scaling",
      "Next.js & React Engineering",
      "TypeScript & High-Throughput Architectures"
    ]
  };
}

export function getServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Custom Web Applications & SaaS Development",
        "description": "Modern, responsive, and secure web applications, admin control panels, and client portals built with Next.js and React.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orythyn Inc."
        }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "AI Knowledge Assistants & RAG Systems",
        "description": "Private enterprise LLM integration, vector database search engines, and real-time conversational agents.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orythyn Inc."
        }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Business Process & Workflow Automation",
        "description": "Event-driven automation pipelines connecting CRMs, databases, notifications, and inventory systems.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orythyn Inc."
        }
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Dedicated Maintenance & SLA Support",
        "description": "Ongoing technical maintenance, 99.99% uptime monitoring, cloud scaling, and dedicated senior engineering support.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orythyn Inc."
        }
      }
    ]
  };
}

export function getFaqJsonLd(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
