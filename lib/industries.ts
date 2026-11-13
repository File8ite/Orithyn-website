export interface Industry {
  id: string;
  title: string;
  description: string;
  businessProblem: string;
  solution: string;
  benefit: string;
  iconName: string;
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    description: "Hospitals, medical practices, diagnostic centers, and healthcare providers requiring dependable digital management.",
    businessProblem: "Manual paper records, disorganized patient appointment queues, billing reconciliation delays, and fragmented doctor-patient record access.",
    solution: "Secure patient record management systems, online appointment scheduling portals, clinical billing trackers, and multi-department administrative dashboards.",
    benefit: "Reduces patient waiting times, minimizes double-booking, and keeps medical histories structured and readily accessible.",
    iconName: "HeartPulse",
  },
  {
    id: "education",
    title: "Education & Schools",
    description: "Primary and secondary schools, colleges, training academies, and educational institutions.",
    businessProblem: "Paper-based gradebooks, manual student attendance recording, complex tuition fee reconciliation, and disjointed parent communication.",
    solution: "Unified school management portals, digital student records, automated fee payment tracking, and self-service parent communication dashboards.",
    benefit: "Streamlines school administration, eliminates tuition tracking errors, and gives parents clear visibility into student academic records.",
    iconName: "GraduationCap",
  },
  {
    id: "hospitality",
    title: "Hotels & Hospitality",
    description: "Hotels, resorts, serviced apartments, and guest lodging operators seeking direct booking control.",
    businessProblem: "Heavy reliance on third-party online travel agencies with high commission fees, room double-booking errors, and slow manual check-in processes.",
    solution: "Direct online reservation engines, live room availability calendars, digital check-in tools, and front-desk housekeeping dashboards.",
    benefit: "Increases direct, commission-free reservations, speeds up guest reception, and keeps room inventory synchronized in real time.",
    iconName: "Hotel",
  },
  {
    id: "real-estate",
    title: "Real Estate & Property",
    description: "Property developers, real estate agencies, facility managers, and commercial leasing operators.",
    businessProblem: "Disorganized property listings across multiple channels, manual tenant rent tracking, maintenance requests handled via informal messaging, and slow sales lead follow-up.",
    solution: "Centralized property listing portals, tenant lease and rent payment tracking systems, automated maintenance dispatch, and lead management pipelines.",
    benefit: "Accelerates buyer and tenant inquiries, automates rent payment reminders, and organizes maintenance requests in a single database.",
    iconName: "Building",
  },
  {
    id: "retail",
    title: "Retail & Commerce",
    description: "Independent retail stores, multi-branch merchants, and commercial wholesalers selling physical goods.",
    businessProblem: "Inventory discrepancies across store branches, manual stocktaking overhead, unorganized sales records, and lack of customer purchasing history.",
    solution: "Multi-branch inventory management software, web-based point-of-sale (POS) portals, and customer purchase tracking systems.",
    benefit: "Prevents stockouts, tracks fast-moving inventory across locations in real time, and reduces cash-desk transaction errors.",
    iconName: "ShoppingBag",
  },
  {
    id: "smes",
    title: "SMEs & Growing Organisations",
    description: "Established businesses seeking to replace fragmented spreadsheets and manual operations with custom digital software.",
    businessProblem: "Operational bottlenecks caused by disconnected spreadsheets, duplicate data entry across departments, and lack of consolidated operational oversight.",
    solution: "Custom internal operations platforms, approval workflow automation, customer relationship management (CRM) tools, and unified executive dashboards.",
    benefit: "Eliminates redundant paperwork, speeds up operational handoffs, and gives leadership clear visibility into daily business operations.",
    iconName: "Building2",
  },
  {
    id: "startups",
    title: "Startups & Tech Founders",
    description: "Early-stage ventures and entrepreneurs needing to validate new product concepts with dependable software.",
    businessProblem: "The need to build and launch an initial working product rapidly without compromising code quality, security, or future architecture.",
    solution: "Agile MVP development, responsive web and mobile application prototypes, and clean backend API foundations.",
    benefit: "Enables founders to test market demand with production-grade code that can scale as the user base expands.",
    iconName: "Rocket",
  },
  {
    id: "transportation",
    title: "Transportation & Logistics",
    description: "Fleet operators, transport services, courier dispatchers, and delivery coordinators.",
    businessProblem: "Manual trip scheduling, unorganized driver assignments, missing booking records, and lack of passenger or client status notifications.",
    solution: "Booking and dispatch portals, driver assignment workflows, trip management databases, and automated customer SMS/email notifications.",
    benefit: "Improves fleet scheduling accuracy, keeps dispatch records organized, and provides passengers and clients with clear booking confirmations.",
    iconName: "Truck",
  },
];
