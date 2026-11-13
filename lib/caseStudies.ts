export type ProjectCategory =
  | "Mobile Application Development"
  | "AI Solutions & Business Automation"
  | "Business Management Systems"
  | "Web Application Development";

export type ProjectBadge = "Internal Prototype" | "Proof-of-Concept" | "Live Corporate Website";

export interface ProjectMedia {
  mediaId: string;
  title: string;
  type: "architecture" | "screenshot" | "asset";
  src: string;
  caption: string;
}

export interface EngineeringDecision {
  title: string;
  rationale: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: ProjectCategory;
  badge: ProjectBadge;
  tagline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  challenge: string;
  solution: string;
  result: string;
  featured: boolean;
  // Stage C technical breakdown fields:
  media: ProjectMedia[];
  mediaNote?: string;
  architectureOverview: string;
  engineeringDecisions: EngineeringDecision[];
  implementedFeatures: string[];
  technicalConsiderations: string[];
  specs: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "jobhunter",
    title: "JobHunter — Mobile Career Search & Application Pipeline",
    clientCategory: "Mobile Application Development",
    badge: "Internal Prototype",
    tagline: "Cross-Platform Mobile Application for Job Discovery and Pipeline Management",
    summary:
      "An internal mobile prototype engineered with React Native and Expo to test cross-platform application workflows, remote job aggregation via cloud functions, and structured candidate application pipeline tracking on mobile devices.",
    metrics: [
      { label: "Platform", value: "React Native / Expo" },
      { label: "Backend", value: "Supabase & Edge Functions" },
      { label: "Navigation", value: "Typed Expo Router" },
    ],
    techStack: ["React Native", "Expo SDK 57", "Expo Router", "TypeScript 6", "Supabase", "Edge Functions", "AsyncStorage", "Groq AI"],
    challenge:
      "Tech candidates manage job searches across multiple fragmented boards, resulting in missed follow-ups, scattered notes, and friction when trying to save job listings while browsing on mobile devices.",
    solution:
      "Engineered a cross-platform mobile client with Expo Router featuring a unified remote job discovery feed, an application stage tracker (Saved, Applied, Interviewing, Offered), a native mobile share extension modal for saving job URLs directly from mobile browsers, and Supabase backend services for authentication and job ingestion.",
    result:
      "Validated mobile architecture patterns for cloud function data ingestion, local state management, and native device share intents, serving as an engineering reference for client mobile application development.",
    featured: true,
    mediaNote:
      "Mobile interface captures are temporarily pending local Android emulator / adb environment setup. Architecture and native assets are verified from the source repository.",
    media: [
      {
        mediaId: "jobhunter-arch",
        title: "Architecture & Data Ingestion Flow",
        type: "architecture",
        src: "/images/projects/jobhunter/architecture-diagram.svg",
        caption:
          "Decoupled cloud function aggregation pipeline connecting Remotive, Arbeitnow, and RemoteOK feeds into Supabase with a 6-hour local feed cache.",
      },
      {
        mediaId: "jobhunter-icon",
        title: "Production Launcher Icon",
        type: "asset",
        src: "/images/projects/jobhunter/app-icon.png",
        caption:
          "High-resolution native mobile application launcher asset engineered for Android and iOS targets.",
      },
      {
        mediaId: "jobhunter-splash",
        title: "Cold Boot Splash Screen",
        type: "asset",
        src: "/images/projects/jobhunter/splash-icon.png",
        caption:
          "Splash screen brand asset presented during Expo framework initialization and local cache hydration.",
      },
      {
        mediaId: "jobhunter-foreground",
        title: "Android Adaptive Foreground",
        type: "asset",
        src: "/images/projects/jobhunter/android-foreground.png",
        caption:
          "Layered Android adaptive icon foreground asset configured for modern material device themes.",
      },
    ],
    architectureOverview:
      "JobHunter decouples mobile client interaction from data ingestion using serverless Supabase Edge Functions. Rather than burdening the mobile client with parallel third-party HTTP requests, edge functions syndicate listings from Remotive, Arbeitnow, and RemoteOK startup feeds into normalized schemas. The mobile client queries these feeds and stores them in a local 6-hour TTL cache via AsyncStorage (@jobhunter_feed_cache_v2). The client uses Expo Router for file-based typed routing and integrates native Android share intents to ingest job URLs directly from external browsers.",
    engineeringDecisions: [
      {
        title: "Edge Function Ingestion vs. Direct Client Scraping",
        rationale:
          "Offloaded multi-provider API polling and JSON payload normalization to Supabase Edge Functions (Deno runtime). This eliminates mobile battery and cellular data overhead, hides upstream API secrets, and centralizes feed error handling.",
      },
      {
        title: "Six-Hour Local Feed Cache (AsyncStorage)",
        rationale:
          "Implemented a 6-hour TTL local feed cache (@jobhunter_feed_cache_v2) to prevent redundant upstream API requests on app wake, respecting provider rate limits while enabling fast offline browsing of cached listings.",
      },
      {
        title: "Native Mobile Share Intent Integration",
        rationale:
          "Engineered deep OS share integration via documentExtractor and Android intent filters, allowing job seekers to share listing links directly from mobile Chrome or LinkedIn into their JobHunter triage queue without manual copy-paste.",
      },
      {
        title: "Typed File-Based Navigation (Expo Router)",
        rationale:
          "Adopted Expo Router for strict compile-time TypeScript type safety across tab stacks, detail screens, and modal routes, preventing runtime navigation crashes.",
      },
    ],
    implementedFeatures: [
      "Multi-provider remote job syndication (Remotive, Arbeitnow, RemoteOK startup feeds)",
      "Six-hour client-side feed caching with automatic stale-while-revalidate handling",
      "Kanban application stage tracker (Saved, Applied, Interviewing, Offered, Archived)",
      "Native mobile share intent listener for direct URL capture from external browsers",
      "Client-side CV document text extraction pipeline (documentExtractor.ts)",
      "Groq LLM profile parsing integration (qwen/qwen3.8-27b) via Supabase Edge Functions",
    ],
    technicalConsiderations: [
      "Internal Prototype: Native APK/AAB distribution is compiled locally and not yet published to public app stores.",
      "Distributed Rate Limiting: The 6-hour client cache protects individual devices; scaling to high user volumes requires a shared server-side Redis cache layer for upstream API providers.",
      "UI Screenshot Capture: Mobile UI captures are pending Android SDK / adb PATH configuration; architectural diagrams and native assets are verified from source.",
    ],
    specs: [
      { label: "Mobile Framework", value: "React Native 0.86.3 / Expo SDK 57" },
      { label: "Routing & Navigation", value: "Expo Router 57.0 (Typed)" },
      { label: "Backend & Auth", value: "Supabase & Edge Functions (Deno)" },
      { label: "Local Persistence", value: "AsyncStorage 2.2 (@jobhunter_feed_cache_v2)" },
      { label: "AI Integration", value: "Groq LLM API via Edge Function" },
      { label: "Maturity Level", value: "Internal Prototype (Verified)" },
    ],
  },
  {
    id: "docubrain-ai",
    title: "DocuBrain AI — Private Document Query & Knowledge Assistant",
    clientCategory: "AI Solutions & Business Automation",
    badge: "Proof-of-Concept",
    tagline: "Retrieval-Augmented Generation (RAG) Architecture for Unstructured Documents",
    summary:
      "A technical proof-of-concept engineered to evaluate retrieval-augmented generation (RAG) workflows for unstructured business documents, enabling grounded natural-language answers and real-time streaming without exposing proprietary data to public LLM training.",
    metrics: [
      { label: "Backend", value: "Python FastAPI" },
      { label: "Vector Index", value: "pgvector HNSW" },
      { label: "Delivery", value: "SSE Token Streaming" },
    ],
    techStack: ["Python / FastAPI", "PostgreSQL", "pgvector", "Groq LLM", "Server-Sent Events", "Shadow DOM", "Next.js"],
    challenge:
      "Locating operational answers across long PDF manuals and technical guidelines is slow and prone to errors with standard keyword search, while uploading sensitive company documents to external public AI tools introduces severe data-privacy risks.",
    solution:
      "Developed a Python FastAPI backend that parses PDF documents into chunks, generates vector embeddings stored in PostgreSQL via the pgvector extension with HNSW indexing, and streams context-grounded responses over Server-Sent Events (SSE) to an embeddable client widget built with Shadow DOM isolation.",
    result:
      "Demonstrated private, contextual document retrieval and streaming response generation in an isolated environment, establishing a reusable architectural pattern for enterprise knowledge assistants and document processing systems.",
    featured: true,
    media: [
      {
        mediaId: "docubrain-arch",
        title: "RAG Pipeline & Retrieval Architecture",
        type: "architecture",
        src: "/images/projects/docubrain-ai/architecture-diagram.svg",
        caption:
          "End-to-end ingestion and inference architecture: PDF parsing, 500-word chunking, 1536-d vectors in PostgreSQL pgvector, and FastAPI SSE token streaming.",
      },
      {
        mediaId: "docubrain-landing",
        title: "Knowledge Query Portal",
        type: "screenshot",
        src: "/images/projects/docubrain-ai/01-landing-page.png",
        caption:
          "Interactive user interface demonstrating grounded conversational queries against indexed enterprise documentation.",
      },
      {
        mediaId: "docubrain-admin",
        title: "Document Ingestion Dashboard",
        type: "screenshot",
        src: "/images/projects/docubrain-ai/02-admin-dashboard.png",
        caption:
          "Administrative console for managing uploaded PDF files, monitoring vectorization status, and inspecting document chunks.",
      },
      {
        mediaId: "docubrain-widget-demo",
        title: "Embeddable Widget Demonstration",
        type: "screenshot",
        src: "/images/projects/docubrain-ai/03-widget-demo.png",
        caption:
          "Host web application view showing the lightweight floating launcher button prior to widget expansion.",
      },
      {
        mediaId: "docubrain-widget-open",
        title: "Shadow DOM Chat Session",
        type: "screenshot",
        src: "/images/projects/docubrain-ai/04-widget-open.png",
        caption:
          "Active chat panel receiving real-time token streams over Server-Sent Events with complete CSS style isolation.",
      },
    ],
    architectureOverview:
      "DocuBrain AI processes documents through a multi-stage RAG pipeline. Uploaded PDF manuals are ingested by a Python FastAPI service, parsed using PyPDF, and split into 500-word chunks with 50-word (10%) overlap. Chunks are converted into 1536-dimensional embeddings (text-embedding-3-small) and stored in PostgreSQL using the pgvector extension with an HNSW cosine similarity index. When a user submits an inquiry, the query is vectorized, the top-k most relevant text chunks are retrieved, and a context-grounded prompt is assembled for Llama 3.1 8B (hosted via Groq). Response tokens stream via Server-Sent Events (SSE) directly to an embeddable JavaScript widget isolated via native browser Shadow DOM.",
    engineeringDecisions: [
      {
        title: "PostgreSQL pgvector over Standalone Vector Databases",
        rationale:
          "Selected pgvector within PostgreSQL instead of introducing a separate specialized vector database (such as Pinecone or Milvus). This unified relational metadata, document tracking, user authentication, and vector indices in a single ACID-compliant database engine.",
      },
      {
        title: "Server-Sent Events (SSE) over WebSockets",
        rationale:
          "Employed HTTP Server-Sent Events for streaming LLM response tokens. SSE is unidirectional, lightweight, operates over standard HTTP/2, traverses enterprise proxies seamlessly, and eliminates WebSocket connection state management.",
      },
      {
        title: "Native Shadow DOM Widget Encapsulation",
        rationale:
          "Engineered widget.js with container.attachShadow({ mode: 'open' }) to isolate the chat assistant interface. This prevents any stylesheet collisions between the client host website and the embedded assistant.",
      },
      {
        title: "10% Overlapping Word Chunking Strategy",
        rationale:
          "Configured 500-word chunks with 50-word overlap (split on word boundaries in pdf_service.py) to maintain semantic continuity across sentence and paragraph boundaries, eliminating retrieval blind spots at chunk borders.",
      },
    ],
    implementedFeatures: [
      "Asynchronous PDF file ingestion and PyPDF text extraction",
      "Overlapping word chunk generation (500 words / 50 overlap)",
      "1536-dimensional vector embedding generation (text-embedding-3-small)",
      "PostgreSQL pgvector storage with HNSW index for cosine distance similarity (<=>)",
      "Dynamic prompt augmentation with contextual document snippets",
      "Real-time token streaming over Server-Sent Events (SSE)",
      "Embeddable vanilla JavaScript chat widget with native Shadow DOM styling isolation",
      "Administrative dashboard for document upload and indexing monitoring",
    ],
    technicalConsiderations: [
      "Proof-of-Concept: System is validated in local and staging environments with sample enterprise manuals.",
      "External LLM Dependency: Ingestion and inference rely on external API keys (OpenAI for embeddings, Groq for Llama 3.1 inference).",
      "Document Types: Ingestion currently parses text-based PDFs; scanned images require pre-processing with OCR.",
    ],
    specs: [
      { label: "Backend Service", value: "Python 3.11 / FastAPI (Uvicorn)" },
      { label: "Vector Database", value: "PostgreSQL with pgvector (HNSW Index)" },
      { label: "Embedding Model", value: "text-embedding-3-small (1536-d)" },
      { label: "LLM Inference", value: "Llama 3.1 8B via Groq API" },
      { label: "Streaming Protocol", value: "Server-Sent Events (SSE)" },
      { label: "Client Encapsulation", value: "Native Shadow DOM (widget.js)" },
    ],
  },
  {
    id: "chata-ai",
    title: "CHATA Mobility — Group Travel Reservation & Fleet Bidding System",
    clientCategory: "Business Management Systems",
    badge: "Internal Prototype",
    tagline: "Relational Booking Architecture with Concurrency-Safe Seat Allocation",
    summary:
      "An internal prototype developed to evaluate full-stack booking operations, multi-party bidding between group organizers and commercial bus fleet operators, and transactional database integrity in high-demand reservation scenarios.",
    metrics: [
      { label: "Architecture", value: "3-Layer Express API" },
      { label: "Data Integrity", value: "Row-Level Locking" },
      { label: "Relational Schema", value: "9 PostgreSQL Tables" },
    ],
    techStack: ["React 19", "Node.js", "Express", "PostgreSQL 15", "Vite", "JWT Authentication"],
    challenge:
      "Coordinating group passenger reservations and fleet bidding involves complex state transitions and risks of seat overbooking or conflicting operator quotes when multiple requests occur concurrently.",
    solution:
      "Implemented a normalized 9-table PostgreSQL database schema, an Express API with a modular three-layer architecture (routes, controllers, services), atomic database transactions for quote acceptance, and row-level locking (SELECT ... FOR UPDATE) during seat reservation workflows to prevent concurrent double-booking.",
    result:
      "Validated transactional integrity and concurrency control for complex scheduling workflows, serving as a tested reference model for commercial booking, dispatch, and business management systems.",
    featured: true,
    media: [
      {
        mediaId: "chata-arch",
        title: "Transactional Concurrency Architecture",
        type: "architecture",
        src: "/images/projects/chata-mobility/architecture-diagram.svg",
        caption:
          "Three-tier architecture illustrating Express routes, controllers, services, and atomic PostgreSQL transactions with SELECT FOR UPDATE row-level locking.",
      },
      {
        mediaId: "chata-landing",
        title: "Mobility Portal Landing",
        type: "screenshot",
        src: "/images/projects/chata-mobility/01-homepage.png",
        caption:
          "Group charter platform portal detailing scheduled bus trips, destination routes, and dispatch services.",
      },
      {
        mediaId: "chata-browse",
        title: "Group Trips Marketplace",
        type: "screenshot",
        src: "/images/projects/chata-mobility/02-browse-trips.png",
        caption:
          "Trip discovery catalog displaying departure schedules, available seat counts, pricing, and reservation actions.",
      },
      {
        mediaId: "chata-create",
        title: "Trip Dispatch & Organizer Flow",
        type: "screenshot",
        src: "/images/projects/chata-mobility/03-create-trip.png",
        caption:
          "Charter trip creation workflow with authentication gating for verified trip organizers.",
      },
    ],
    architectureOverview:
      "CHATA Mobility implements a full-stack booking architecture designed to coordinate multi-party group transportation. Built on a React 19 frontend and a Node.js/Express API structured in three strict layers (routes, controllers, services), the system interacts with a normalized PostgreSQL database containing 9 verified relational tables (users, group_trips, trip_members, trip_invitations, waitlist, chat_rooms, chat_messages, bids, bookings). To ensure transactional integrity during high-volume reservation windows, booking operations are executed inside atomic transactions utilizing SELECT * FROM group_trips WHERE id = $1 FOR UPDATE. This row-level lock serializes competing seat reservation requests, recalculates seat capacity under isolation, and rolls back if limits are exceeded.",
    engineeringDecisions: [
      {
        title: "Pessimistic Row-Level Locking (SELECT ... FOR UPDATE)",
        rationale:
          "In reservation spikes where multiple users attempt to book the final remaining seats simultaneously, optimistic locking produces high transaction abort rates. Row-level pessimistic locking serializes seat claims at the database level, ensuring strict inventory counts.",
      },
      {
        title: "Three-Layer Architecture (Routes, Controllers, Services)",
        rationale:
          "Strictly isolated HTTP routing, parameter validation, and core business/database logic. This architectural separation allows the booking and bidding services to be unit-tested without HTTP mock dependencies.",
      },
      {
        title: "Multi-Party Normalized Relational Schema",
        rationale:
          "Designed 9 dedicated tables with clear foreign key constraints and cascade rules to cleanly separate passenger membership, commercial bus operator bidding, waitlists, and group coordination messaging.",
      },
      {
        title: "Local Docker Compose Orchestration",
        rationale:
          "Configured Docker Compose (postgres:15-alpine) for local development to automate PostgreSQL schema initialization, environment consistency, and reproducible local developer onboarding.",
      },
    ],
    implementedFeatures: [
      "9-table normalized PostgreSQL database schema with foreign key integrity",
      "Three-layer Express backend (routes, controllers, services)",
      "Atomic seat reservation workflow with row-level locking (SELECT ... FOR UPDATE)",
      "Multi-operator commercial bidding workflow on organizer group trips",
      "Trip discovery marketplace with origin, destination, and date filtering",
      "JWT authentication and role-based route gating (organizers, operators, passengers)",
      "Group trip discussion forum and chat room data structures",
    ],
    technicalConsiderations: [
      "Internal Prototype: Developed for architectural and concurrency validation; commercial payment processor integration (Stripe/Paystack) is modeled in the schema roadmap.",
      "Single-Node Locking Scope: Row-level locking protects seat inventory within a single PostgreSQL instance; horizontal multi-master database configurations would require distributed locks (e.g. Redis Redlock).",
      "Deployment Scope: Docker Compose is configured for local testing and developer orchestration, not production cloud cluster deployment.",
    ],
    specs: [
      { label: "Frontend Stack", value: "React 19 / Vite / Tailwind CSS" },
      { label: "Backend API", value: "Node.js / Express (3-Layer Architecture)" },
      { label: "Database", value: "PostgreSQL 15 (postgres:15-alpine)" },
      { label: "Concurrency Control", value: "Atomic Transactions + SELECT FOR UPDATE" },
      { label: "Authentication", value: "JWT with Role-Based Access Control" },
      { label: "Local Environment", value: "Docker Compose (Development)" },
    ],
  },
  {
    id: "orithyn-engine",
    title: "Orithyn Corporate Website — Static Web Platform",
    clientCategory: "Web Application Development",
    badge: "Live Corporate Website",
    tagline: "Component-Driven Web Architecture with Client-Side Scope Estimation",
    summary:
      "The official corporate website of Orithyn Inc., engineered as a lightweight, accessible web platform utilizing Next.js static pre-rendering, interactive project estimation tooling, and client-side contact delivery without server-side database dependencies.",
    metrics: [
      { label: "Rendering", value: "Static Export" },
      { label: "Static Output", value: "15 Pre-Rendered Routes" },
      { label: "Lead Intake", value: "Client-Side API" },
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Web3Forms API", "Schema.org JSON-LD"],
    challenge:
      "Corporate service websites frequently rely on heavy server CMS platforms that introduce maintenance overhead and hosting complexity, while presenting generic service descriptions that fail to give prospective clients practical scope or budget clarity.",
    solution:
      "Engineered a component-driven static application using Next.js App Router and Tailwind CSS 4, featuring an interactive 4-step project scope and budget estimator, structured Schema.org JSON-LD metadata for search engines, and client-side form processing with honeypot spam protection and direct email/WhatsApp fallbacks.",
    result:
      "Delivered a responsive, fast-loading, and easily maintainable web presence with pre-rendered static delivery, practical lead estimation, and transparent communication channels for prospective clients.",
    featured: true,
    media: [
      {
        mediaId: "orithyn-arch",
        title: "Static Pre-Rendering & Client Data Flow",
        type: "architecture",
        src: "/images/projects/orithyn-website/architecture-diagram.svg",
        caption:
          "15 statically pre-rendered routes suitable for static hosting or CDN infrastructure, featuring client-side interactive estimators and Web3Forms lead delivery.",
      },
      {
        mediaId: "orithyn-home",
        title: "Corporate Home & Value Proposition",
        type: "screenshot",
        src: "/images/projects/orithyn-website/01-homepage.png",
        caption:
          "Pre-rendered landing experience showcasing technical services, core competencies, and engineering project showcases.",
      },
      {
        mediaId: "orithyn-services",
        title: "Engineering Services Architecture",
        type: "screenshot",
        src: "/images/projects/orithyn-website/02-services.png",
        caption:
          "Service catalog detailing specialized engineering practices across mobile, AI automation, management systems, and web architecture.",
      },
      {
        mediaId: "orithyn-estimator",
        title: "Interactive Project Estimator",
        type: "screenshot",
        src: "/images/projects/orithyn-website/03-estimator-summary.png",
        caption:
          "4-step interactive scope and budget calculator generating transparent timeline and cost projections.",
      },
      {
        mediaId: "orithyn-contact",
        title: "Prefilled Scope Contact Intake",
        type: "screenshot",
        src: "/images/projects/orithyn-website/04-contact-scope.png",
        caption:
          "Lead intake form automatically pre-populated with scope, service category, and budget estimates from the estimator tool.",
      },
    ],
    architectureOverview:
      "The Orithyn corporate website is engineered using Next.js 16 App Router and React 19, configured for static compilation (output: 'export'). The build compiles 15 static HTML, CSS, and JS routes with zero runtime server requirements, making the deployment fully compatible with high-performance static hosting and global CDNs. Client interactivity is achieved through modular React client components. The ProjectEstimator component provides a 4-step scoping workflow that calculates estimated development timelines and budgets in real time. Upon completion, calculated values are serialized into URL search parameters that prefill the ContactForm component, which submits directly to the Web3Forms API with botcheck honeypots and resilient mailto and WhatsApp fallbacks.",
    engineeringDecisions: [
      {
        title: "Static Site Generation (output: 'export')",
        rationale:
          "Eschewed dynamic server-side runtimes and traditional headless CMS platforms in favor of static compilation. This ensures maximum TTFB performance, zero server patching or cold starts, and eliminates server-side database vulnerabilities.",
      },
      {
        title: "URL-Based State Passing Between Tools",
        rationale:
          "Connected the ProjectEstimator to the ContactForm using standard URL query strings (/contact?service=...&scope=...). This enables users to bookmark or share their estimate directly without requiring server session storage or heavy client state libraries.",
      },
      {
        title: "Multi-Tier Client-Side Submission Fallbacks",
        rationale:
          "Engineered ContactForm with automatic graceful degradation: if an ad-blocker or network error disrupts the Web3Forms API endpoint, the UI presents one-click mailto and WhatsApp options pre-filled with the inquiry details.",
      },
      {
        title: "Structured Schema.org JSON-LD Integration",
        rationale:
          "Integrated structured JSON-LD data for Organization, Services, and Breadcrumb navigation across all 15 routes to enhance technical search engine indexation and rich snippet presentation.",
      },
    ],
    implementedFeatures: [
      "15 statically pre-rendered routes generated via Next.js 16 App Router",
      "Interactive 4-step project scope, timeline, and cost calculator (ProjectEstimator)",
      "Deep URL synchronization between project estimator and inquiry form",
      "Client-side lead dispatch via Web3Forms with botcheck honeypot spam protection",
      "One-click mailto: and WhatsApp enquiry fallbacks with pre-composed query summaries",
      "Custom dark theme design system built with Tailwind CSS 4 and Lucide icons",
      "Comprehensive Schema.org JSON-LD structured data for technical SEO",
    ],
    technicalConsiderations: [
      "Live Corporate Website: Production static build running locally and ready for CDN deployment.",
      "Dynamic Functionality Scope: Because the site uses static export, dynamic user accounts or dynamic server-side comments require external microservices or client APIs.",
    ],
    specs: [
      { label: "Framework & UI", value: "Next.js 16 (App Router) / React 19" },
      { label: "Compilation Mode", value: "Static Export (output: 'export')" },
      { label: "Styling & System", value: "Tailwind CSS 4 (Custom Theme)" },
      { label: "Static Generation", value: "15 Pre-Rendered Routes" },
      { label: "Lead Delivery API", value: "Web3Forms API + Direct Fallbacks" },
      { label: "Structured Data", value: "Schema.org JSON-LD (Org, Services, Breadcrumbs)" },
    ],
  },
];
