"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import { caseStudies, CaseStudy, ProjectCategory, ProjectMedia } from "@/lib/caseStudies";
import {
  Smartphone,
  Bot,
  Workflow,
  Globe,
  Layers,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Cpu,
  AlertCircle,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Info,
  Calculator,
  ShieldCheck,
} from "lucide-react";

type FilterType = "All" | ProjectCategory;

const filterCategories = [
  { id: "All" as const, label: "All Projects", icon: Layers },
  { id: "Mobile Application Development" as const, label: "Mobile Apps", icon: Smartphone },
  { id: "AI Solutions & Business Automation" as const, label: "AI & Automation", icon: Bot },
  { id: "Business Management Systems" as const, label: "Management Systems", icon: Workflow },
  { id: "Web Application Development" as const, label: "Web Applications", icon: Globe },
];

export default function CaseStudiesGallery() {
  const [filter, setFilter] = useState<FilterType>("All");
  const [expandedId, setExpandedId] = useState<string | null>("jobhunter");
  const [activeMediaMap, setActiveMediaMap] = useState<Record<string, number>>({});
  const [modalMedia, setModalMedia] = useState<{ projectId: string; mediaIndex: number } | null>(null);

  // Accessibility refs for lightbox modal
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalDialogRef = useRef<HTMLDivElement | null>(null);

  const filteredStudies = filter === "All"
    ? caseStudies
    : caseStudies.filter((s) => s.clientCategory === filter);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getActiveMediaIndex = (projectId: string) => {
    return activeMediaMap[projectId] ?? 0;
  };

  const setActiveMedia = (projectId: string, index: number) => {
    setActiveMediaMap((prev) => ({ ...prev, [projectId]: index }));
  };

  // Keyboard navigation for tablist (WAI-ARIA roving tabindex & arrow navigation)
  const handleTabKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    projectId: string,
    currentIndex: number,
    totalCount: number
  ) => {
    let nextIndex: number | null = null;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % totalCount;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + totalCount) % totalCount;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = totalCount - 1;
    }

    if (nextIndex !== null) {
      setActiveMedia(projectId, nextIndex);
      const targetTab = document.getElementById(`tab-${projectId}-${nextIndex}`);
      targetTab?.focus();
    }
  };

  // Lightbox Modal Controls
  const openModal = (projectId: string, mediaIndex: number) => {
    lastActiveElementRef.current = document.activeElement as HTMLElement;
    setModalMedia({ projectId, mediaIndex });
  };

  const closeModal = useCallback(() => {
    setModalMedia(null);
    if (lastActiveElementRef.current) {
      lastActiveElementRef.current.focus();
    }
  }, []);

  const nextModalMedia = useCallback(() => {
    if (!modalMedia) return;
    const study = caseStudies.find((s) => s.id === modalMedia.projectId);
    if (!study) return;
    const nextIdx = (modalMedia.mediaIndex + 1) % study.media.length;
    setModalMedia({ projectId: modalMedia.projectId, mediaIndex: nextIdx });
  }, [modalMedia]);

  const prevModalMedia = useCallback(() => {
    if (!modalMedia) return;
    const study = caseStudies.find((s) => s.id === modalMedia.projectId);
    if (!study) return;
    const prevIdx = (modalMedia.mediaIndex - 1 + study.media.length) % study.media.length;
    setModalMedia({ projectId: modalMedia.projectId, mediaIndex: prevIdx });
  }, [modalMedia]);

  // Trap focus, isolate background with inert, and prevent background scrolling while modal is open
  useEffect(() => {
    if (!modalMedia) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Isolate background content using the inert attribute
    const backgroundElements = Array.from(
      document.querySelectorAll("header, nav, footer, #portfolio-hero, [data-inert-background]")
    ) as HTMLElement[];

    backgroundElements.forEach((el) => {
      el.setAttribute("inert", "");
    });

    // Auto-focus the close button on open
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextModalMedia();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevModalMedia();
      } else if (e.key === "Tab") {
        if (!modalDialogRef.current) return;
        const focusableElements = modalDialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      backgroundElements.forEach((el) => {
        el.removeAttribute("inert");
      });
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalMedia, closeModal, nextModalMedia, prevModalMedia]);

  // Active study in modal (if open)
  const modalStudy = modalMedia ? caseStudies.find((s) => s.id === modalMedia.projectId) : null;
  const currentModalMedia = modalStudy && modalMedia ? modalStudy.media[modalMedia.mediaIndex] : null;

  return (
    <Section id="portfolio" className="py-16 md:py-24 border-y border-zinc-800/80 bg-zinc-950/80">
      <div data-inert-background className="max-w-6xl mx-auto space-y-12 px-4">
        {/* Gallery Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-300">
            <Layers className="h-3.5 w-3.5 text-amber-400" />
            <span className="uppercase tracking-widest">Internal Projects &amp; Reference Architectures</span>
          </div>

          <Heading level={2} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Projects &amp; Technical Demonstrations
          </Heading>

          <Text className="text-base sm:text-lg text-zinc-300">
            Explore our internal software applications, functional prototypes, and data engineering architectures mapped to our core engineering services.
          </Text>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4" role="toolbar" aria-label="Project category filters">
            {filterCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.id;
              const count = cat.id === "All" ? caseStudies.length : caseStudies.filter((s) => s.clientCategory === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilter(cat.id)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-200 inline-flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isActive
                      ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20 ring-1 ring-amber-400"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                      isActive ? "bg-black/20 text-black" : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Showcase */}
        <div className="space-y-12">
          {filteredStudies.map((study) => {
            const isExpanded = expandedId === study.id;
            const activeIndex = getActiveMediaIndex(study.id);
            const activeMedia = study.media[activeIndex] || study.media[0];
            const contactUrl = `/contact?service=${encodeURIComponent(study.clientCategory)}&scope=${encodeURIComponent(`Inquiry regarding project similar to: ${study.title}`)}`;
            const estimatorUrl = `/estimator`;

            // Badge color styling
            let badgeClasses = "text-amber-400 bg-amber-500/10 border-amber-500/30";
            if (study.badge === "Proof-of-Concept") {
              badgeClasses = "text-sky-400 bg-sky-500/10 border-sky-500/30";
            } else if (study.badge === "Live Corporate Website") {
              badgeClasses = "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
            }

            return (
              <article
                key={study.id}
                id={study.id}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl hover:border-amber-500/40 transition duration-300 space-y-8"
              >
                {/* 1. Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-zinc-800/80 pb-6">
                  <div className="space-y-2.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-xs font-mono font-bold border px-3 py-0.5 rounded-full ${badgeClasses}`}>
                        {study.badge}
                      </span>
                      <span className="text-xs font-semibold text-zinc-300 bg-zinc-950 border border-zinc-800 px-3 py-0.5 rounded-full">
                        Core Service: {study.clientCategory}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-amber-400">
                      {study.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Link href={contactUrl} className="w-full sm:w-auto">
                      <Button
                        variant="primary"
                        className="w-full sm:w-auto h-11 px-5 text-xs font-bold inline-flex items-center justify-center gap-2 shadow-md shadow-amber-500/15"
                      >
                        Discuss Similar Project <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* 2. Interactive Media Showcase & Specification Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Media Showcase (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    {/* Main Media Preview Frame (Accessible Tabpanel) */}
                    <div
                      role="tabpanel"
                      id={`tabpanel-${study.id}`}
                      aria-labelledby={`tab-${study.id}-${activeIndex}`}
                      tabIndex={0}
                      className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-zinc-950 rounded-2xl border border-zinc-800/90 overflow-hidden group shadow-inner focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    >
                      <Image
                        src={activeMedia.src}
                        alt={`${activeMedia.title} — ${activeMedia.caption}`}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 650px"
                        className="object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                      />

                      {/* Media Type Pill */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-zinc-900/90 text-zinc-200 border border-zinc-700/80 backdrop-blur-md shadow-sm">
                          {activeMedia.type === "architecture" && <Cpu className="h-3 w-3 text-amber-400" />}
                          {activeMedia.type === "screenshot" && <ImageIcon className="h-3 w-3 text-sky-400" />}
                          {activeMedia.type === "asset" && <Layers className="h-3 w-3 text-emerald-400" />}
                          <span className="capitalize">
                            {activeMedia.type === "architecture"
                              ? "Architecture Diagram"
                              : activeMedia.type === "screenshot"
                              ? "Application UI"
                              : "System Asset"}
                          </span>
                        </span>
                      </div>

                      {/* Enlarge / Fullscreen Button */}
                      <button
                        type="button"
                        onClick={() => openModal(study.id, activeIndex)}
                        aria-label={`Enlarge ${activeMedia.title}`}
                        className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700/80 backdrop-blur-md transition cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                        title="Click to inspect in high resolution"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </button>

                      {/* Clickable Backdrop Hint */}
                      <div
                        onClick={() => openModal(study.id, activeIndex)}
                        className="absolute inset-0 cursor-zoom-in"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Active Media Caption */}
                    <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800/80 flex items-start gap-3 text-xs">
                      <Info className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <p className="font-bold text-white">{activeMedia.title}</p>
                        <p className="text-zinc-400 leading-relaxed">{activeMedia.caption}</p>
                      </div>
                    </div>

                    {/* Pending UI Screenshots Notice (if applicable) */}
                    {study.mediaNote && (
                      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs">
                        <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <p className="font-bold text-amber-300">Technical Visual Status</p>
                          <p className="text-amber-200/90 leading-relaxed">{study.mediaNote}</p>
                        </div>
                      </div>
                    )}

                    {/* Thumbnail Navigation Strip (Accessible Tablist) */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                        Available Visual Evidence &amp; Diagrams ({study.media.length})
                      </span>
                      <div
                        role="tablist"
                        aria-label={`${study.title} visual media`}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                      >
                        {study.media.map((med, idx) => {
                          const isCurrent = activeIndex === idx;
                          return (
                            <button
                              key={med.mediaId}
                              role="tab"
                              type="button"
                              id={`tab-${study.id}-${idx}`}
                              aria-selected={isCurrent}
                              aria-controls={`tabpanel-${study.id}`}
                              tabIndex={isCurrent ? 0 : -1}
                              onClick={() => setActiveMedia(study.id, idx)}
                              onKeyDown={(e) => handleTabKeyDown(e, study.id, idx, study.media.length)}
                              className={`p-2 rounded-xl text-left border transition duration-200 cursor-pointer flex flex-col gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                                isCurrent
                                  ? "bg-zinc-800/90 border-amber-500 ring-2 ring-amber-400/30"
                                  : "bg-zinc-950/70 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 opacity-75 hover:opacity-100"
                              }`}
                            >
                              <div className="relative w-full h-12 bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800/80">
                                <Image
                                  src={med.src}
                                  alt={med.title}
                                  fill
                                  unoptimized
                                  sizes="120px"
                                  className="object-contain p-1"
                                />
                              </div>
                              <span className="text-[11px] font-medium text-zinc-300 truncate w-full">
                                {med.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Specification Sheet & Highlights (5 cols) */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Summary */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-400/90">
                        Executive Overview
                      </span>
                      <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                        {study.summary}
                      </p>
                    </div>

                    {/* Architectural Highlights / Metrics Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-zinc-950 p-3 rounded-2xl border border-zinc-800 text-center">
                      {study.metrics.map((m) => (
                        <div key={m.label} className="space-y-0.5 py-1.5 sm:py-1 border-b sm:border-b-0 sm:border-r last:border-none border-zinc-800/80">
                          <p className="text-sm sm:text-base font-black text-white">{m.value}</p>
                          <p className="text-[10px] text-zinc-400 font-mono truncate">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technical Specification Sheet */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        System Specifications
                      </span>
                      <div className="bg-zinc-950 rounded-2xl border border-zinc-800/90 divide-y divide-zinc-800/60 overflow-hidden text-xs">
                        {study.specs.map((spec) => (
                          <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center justify-between px-3.5 py-2.5 gap-0.5 sm:gap-2">
                            <span className="text-zinc-400 font-medium">{spec.label}</span>
                            <span className="text-zinc-200 font-mono font-semibold sm:text-right break-words">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack Tags */}
                    <div className="space-y-2">
                      <span className="text-xs text-zinc-400 font-bold flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5 text-amber-400" /> Technology Stack:
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-mono px-2.5 py-1 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Scoping CTA Pill */}
                    <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between gap-3">
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold text-white">Need a similar architecture?</p>
                        <p className="text-[11px] text-zinc-400">Calculate budget or consult our engineering team.</p>
                      </div>
                      <Link href={estimatorUrl}>
                        <Button
                          variant="secondary"
                          className="h-9 px-3.5 text-[11px] font-bold inline-flex items-center gap-1.5 shrink-0"
                        >
                          <Calculator className="h-3.5 w-3.5 text-amber-400" /> Scope Tool
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 3. Expandable Deep Technical Breakdown */}
                <div className="border-t border-zinc-800/80 pt-5">
                  <button
                    type="button"
                    onClick={() => toggleExpand(study.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`tech-breakdown-${study.id}`}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg cursor-pointer py-1"
                  >
                    {isExpanded ? (
                      <>
                        <span>Hide Technical Architecture &amp; Decision Breakdown</span>
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span>Inspect Architecture, Engineering Decisions &amp; Implementation Details</span>
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {isExpanded && (
                    <div
                      id={`tech-breakdown-${study.id}`}
                      className="mt-6 pt-6 border-t border-zinc-800/60 space-y-6 text-xs animate-in fade-in duration-200"
                    >
                      {/* Architecture Overview narrative */}
                      <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2.5">
                        <span className="font-bold text-sm text-white flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-amber-400" /> System Architecture &amp; Data Flow
                        </span>
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                          {study.architectureOverview}
                        </p>
                      </div>

                      {/* 2-Column Grid: Engineering Decisions + Implemented Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Key Engineering Decisions */}
                        <div className="p-5 rounded-2xl bg-zinc-950 border border-amber-500/30 space-y-4">
                          <span className="font-bold text-sm text-amber-400 flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-amber-400" /> Key Engineering Decisions &amp; Rationale
                          </span>
                          <div className="space-y-3.5 divide-y divide-zinc-800/80">
                            {study.engineeringDecisions.map((dec, i) => (
                              <div key={dec.title} className={i > 0 ? "pt-3 space-y-1" : "space-y-1"}>
                                <p className="font-bold text-white text-xs">{dec.title}</p>
                                <p className="text-zinc-400 text-xs leading-relaxed">{dec.rationale}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Implemented & Verifiable Features */}
                        <div className="p-5 rounded-2xl bg-zinc-950 border border-emerald-500/30 space-y-4">
                          <span className="font-bold text-sm text-emerald-400 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Implemented &amp; Verifiable Features
                          </span>
                          <ul className="space-y-2.5">
                            {study.implementedFeatures.map((feat) => (
                              <li key={feat} className="flex items-start gap-2.5 text-zinc-300">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* 2-Column Grid: Problem/Challenge + Technical Considerations */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Business Problem Solved */}
                        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
                          <span className="font-bold text-sm text-amber-300 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-amber-400" /> Business Problem Addressed
                          </span>
                          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Technical Considerations & Trade-offs */}
                        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                          <span className="font-bold text-sm text-zinc-300 flex items-center gap-2">
                            <Info className="h-4 w-4 text-amber-400" /> Technical Considerations &amp; Current Scope
                          </span>
                          <ul className="space-y-2">
                            {study.technicalConsiderations.map((note) => (
                              <li key={note} className="flex items-start gap-2 text-zinc-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                                <span className="leading-relaxed">{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* 4. Fullscreen High-Resolution Inspection Modal */}
      {modalStudy && currentModalMedia && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-caption"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            ref={modalDialogRef}
            className="relative w-full max-w-5xl max-h-[95vh] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between gap-4 bg-zinc-950/80">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                  {modalStudy.title}
                </span>
                <h4 id="modal-title" className="text-sm sm:text-base font-bold text-white">
                  {currentModalMedia.title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 mr-2">
                  {modalMedia!.mediaIndex + 1} / {modalStudy.media.length}
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeModal}
                  aria-label="Close media preview"
                  className="p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewer with Left/Right Controls */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] max-h-[70vh] bg-zinc-950 flex items-center justify-center p-4 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={currentModalMedia.src}
                  alt={`${currentModalMedia.title} — ${currentModalMedia.caption}`}
                  fill
                  unoptimized
                  sizes="(max-width: 1200px) 90vw, 1100px"
                  className="object-contain"
                />
              </div>

              {/* Prev Button */}
              {modalStudy.media.length > 1 && (
                <button
                  type="button"
                  onClick={prevModalMedia}
                  aria-label="Previous media asset"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-900/90 text-white hover:bg-amber-500 hover:text-black border border-zinc-700 transition cursor-pointer shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {/* Next Button */}
              {modalStudy.media.length > 1 && (
                <button
                  type="button"
                  onClick={nextModalMedia}
                  aria-label="Next media asset"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-900/90 text-white hover:bg-amber-500 hover:text-black border border-zinc-700 transition cursor-pointer shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Modal Caption Footer */}
            <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-950/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <p id="modal-caption" className="text-zinc-300 max-w-2xl leading-relaxed">
                {currentModalMedia.caption}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={`/contact?service=${encodeURIComponent(modalStudy.clientCategory)}&scope=${encodeURIComponent(`Inquiry regarding ${modalStudy.title}`)}`}
                >
                  <Button variant="primary" className="h-9 px-4 text-xs font-bold inline-flex items-center gap-1.5">
                    Discuss Project <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
