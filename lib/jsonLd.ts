export interface FAQItem {
  question: string;
  answer: string;
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Orithyn Inc.",
    "alternateName": "Orithyn",
    "url": "https://orithyn.com",
    "logo": "https://orithyn.com/favicon.ico",
    "description": "Professional software development company engineering custom business software, web applications, mobile apps, backend APIs, management platforms, and AI automation.",
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
      "https://github.com/Orithyn"
    ],
    "knowsAbout": [
      "Custom Software Development",
      "Web Application Development",
      "Mobile Application Development (React Native)",
      "Backend & REST API Development",
      "Business Management Systems",
      "AI Solutions & Workflow Automation",
      "Software Maintenance & Technical Support"
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
        "name": "Custom Software Development",
        "description": "Tailored software systems built to solve specific operational challenges, automate workflows, and replace rigid off-the-shelf software.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orithyn Inc."
        }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Web Application Development",
        "description": "Responsive, accessible, and fast web portals, client dashboards, and cloud platforms engineered with Next.js, React, and TypeScript.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orithyn Inc."
        }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Mobile Application Development",
        "description": "Cross-platform iOS and Android mobile applications engineered with React Native for unified business logic and native-grade mobile performance.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orithyn Inc."
        }
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Backend & API Development",
        "description": "Scalable REST APIs, relational and NoSQL database schemas, and robust backend microservices designed for data integrity and reliability.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orithyn Inc."
        }
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "Business Management Systems",
        "description": "Custom management software including school portals, hospital & clinic management, hotel reservations, and multi-location inventory platforms.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orithyn Inc."
        }
      },
      {
        "@type": "Service",
        "position": 6,
        "name": "AI Solutions & Business Automation",
        "description": "Practical AI implementations, retrieval-augmented document assistants, vector search pipelines, and multi-step process automation.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orithyn Inc."
        }
      },
      {
        "@type": "Service",
        "position": 7,
        "name": "Software Maintenance & Technical Support",
        "description": "Proactive system maintenance, security updates, dependency upgrades, database backups, bug resolution, and responsive technical support.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Orithyn Inc."
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
