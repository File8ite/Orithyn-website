export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  businessProblem: string;
  iconName: string;
  capabilities: string[];
  businessBenefit: string;
}

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortDescription:
      "Tailored business software engineered to match your operational workflows and scale with your organization.",
    description:
      "Off-the-shelf software rarely fits specialized business operations. We design and build proprietary systems that integrate with your existing tools, digitize manual tasks, and give you complete control over your technology.",
    businessProblem:
      "Rigid off-the-shelf tools that fail to match your business processes, forcing your team into inefficient manual workarounds.",
    iconName: "Code2",
    capabilities: [
      "Custom business workflow applications",
      "Legacy system modernization",
      "Database design & data migration",
      "Role-based access control and user management",
    ],
    businessBenefit:
      "Eliminates manual workarounds, cuts administrative overhead, and provides software built specifically for how your team operates.",
  },
  {
    id: "web-applications",
    title: "Web Application Development",
    shortDescription:
      "Fast, responsive web applications, customer portals, and internal business platforms built with modern web technologies.",
    description:
      "We develop reliable web applications that work across all modern devices and browsers. From customer-facing booking portals to internal staff dashboards, our web apps focus on usability, speed, and clean code.",
    businessProblem:
      "Disconnected desktop-bound tools or slow interfaces that prevent clients and staff from accessing vital services seamlessly online.",
    iconName: "Globe",
    capabilities: [
      "Client portals & administrative dashboards",
      "E-commerce and transaction portals",
      "Secure authentication & session management",
      "Third-party payment & software integrations",
    ],
    businessBenefit:
      "Enables customers and staff to access critical business tools anywhere, anytime, with minimal training required.",
  },
  {
    id: "mobile-development",
    title: "Mobile Application Development",
    shortDescription:
      "Cross-platform iOS and Android mobile applications developed with React Native for smooth performance and unified codebases.",
    description:
      "Reach your customers and mobile workforce on both iPhone and Android devices. By using React Native, we deliver native-speed performance, consistent UI, and faster release cycles while maintaining a single codebase.",
    businessProblem:
      "Inability to engage mobile-first customers on their smartphones or equip on-field team members with reliable mobile tools.",
    iconName: "Smartphone",
    capabilities: [
      "Cross-platform iOS & Android mobile apps",
      "Offline-first data sync & local caching",
      "Push notifications & user messaging",
      "Device feature integrations (Camera, GPS, Biometrics)",
    ],
    businessBenefit:
      "Expands customer reach and empowers field teams on mobile devices without doubling development costs.",
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    shortDescription:
      "Secure server backends, database architectures, and RESTful APIs connecting your digital systems.",
    description:
      "Reliable applications depend on solid backend architecture. We build structured server environments, robust relational databases, and documented REST APIs that securely process business data and connect your external services.",
    businessProblem:
      "Disjointed software tools that cannot exchange data reliably, leading to duplicate data entry and fragile manual file exports.",
    iconName: "Server",
    capabilities: [
      "RESTful API architecture & clear documentation",
      "Relational database design (PostgreSQL)",
      "Secure authentication & authorization flows",
      "Third-party service & payment webhook integrations",
    ],
    businessBenefit:
      "Protects business data integrity, prevents system crashes, and ensures smooth integration across all your digital channels.",
  },
  {
    id: "business-systems",
    title: "Business Management Systems",
    shortDescription:
      "Specialized operational software including school portals, hospital & clinic systems, hotel booking platforms, and inventory managers.",
    description:
      "We engineer dedicated operational platforms designed around specific organizational workflows. Whether you need to manage student academic records, clinical appointment queues, hotel reservations, or multi-location stock, our systems centralize daily operations.",
    businessProblem:
      "Paper-based records, fragmented spreadsheets, and coordination bottlenecks across schools, medical clinics, hotels, and retail stores.",
    iconName: "Building2",
    capabilities: [
      "School & student information portals",
      "Hospital, clinic & appointment systems",
      "Hotel reservation & front-desk platforms",
      "Inventory tracking & multi-branch management",
    ],
    businessBenefit:
      "Replaces chaotic paper records and disconnected spreadsheets with a single, reliable operational hub.",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Business Automation",
    shortDescription:
      "Practical artificial intelligence tools, document knowledge assistants, and automated workflow pipelines.",
    description:
      "We help businesses apply practical automation and AI where it delivers real return on investment. From intelligent document search and customer inquiry routing to automated report generation, we streamline repetitive tasks.",
    businessProblem:
      "Team members bogged down by repetitive manual searches across massive document archives, manual email sorting, and copy-paste reporting.",
    iconName: "Bot",
    capabilities: [
      "Internal document search & knowledge retrieval",
      "Automated email & lead classification",
      "Scheduled reporting & cross-tool data synchronization",
      "Event-driven workflow trigger pipelines",
    ],
    businessBenefit:
      "Saves staff hours on repetitive manual lookups, data entry, and status reporting.",
  },
  {
    id: "software-maintenance",
    title: "Software Maintenance & Technical Support",
    shortDescription:
      "Ongoing technical support, performance monitoring, security updates, and scheduled maintenance for existing software.",
    description:
      "Software requires ongoing care to remain secure and operational. We partner with organizations to handle dependency updates, bug fixes, database backups, security patches, and regular feature enhancements.",
    businessProblem:
      "Neglected software that degrades over time, develops security vulnerabilities, and lacks dedicated engineering support during critical issues.",
    iconName: "Wrench",
    capabilities: [
      "Proactive system health & error monitoring",
      "Security patching & dependency updates",
      "Database backup verification",
      "Dedicated developer support hours for fixes & improvements",
    ],
    businessBenefit:
      "Prevents costly downtime, fixes issues before users notice them, and protects your long-term software investment.",
  },
];