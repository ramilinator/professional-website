"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Layers3,
  MousePointer2,
  Rocket,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

import "./CinematicHero.css";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type SceneBackground = "cream" | "charcoal" | "sand" | "orange";

type SceneVisualType =
  | "idea"
  | "vision"
  | "code"
  | "interaction"
  | "details"
  | "technology"
  | "clarity"
  | "launch"
  | "final";

type Scene = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  tag: string;
  icon: typeof ArrowUpRight;
  background: SceneBackground;
  visual: SceneVisualType;
};

type Project = {
  title: string;
  description: string;
  stack: string;
  number: string;
};

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

const scenes: Scene[] = [
  {
    number: "01",
    eyebrow: "START WITH AN IDEA",
    title: "Every great thing starts with an idea.",
    description:
      "Every meaningful digital experience begins with a question, a problem, or an idea worth bringing to life.",
    tag: "IDEAS INTO EXPERIENCES",
    icon: Sparkles,
    background: "cream",
    visual: "idea",
  },
  {
    number: "02",
    eyebrow: "DESIGN WITH PURPOSE",
    title: "Give the idea a vision.",
    description:
      "A clear direction turns a rough concept into an experience that feels intentional, intuitive, and easy to understand.",
    tag: "PURPOSE BEFORE PIXELS",
    icon: MousePointer2,
    background: "charcoal",
    visual: "vision",
  },
  {
    number: "03",
    eyebrow: "BUILD THE FOUNDATION",
    title: "Then, we build.",
    description:
      "Thoughtful architecture and maintainable code create the foundation for digital products that can grow.",
    tag: "CLEAN CODE / SOLID FOUNDATIONS",
    icon: Code2,
    background: "sand",
    visual: "code",
  },
  {
    number: "04",
    eyebrow: "DESIGN IN MOTION",
    title: "Make every interaction count.",
    description:
      "From subtle transitions to meaningful feedback, every interaction should feel natural and help people move forward.",
    tag: "INTERACTION WITH INTENTION",
    icon: Zap,
    background: "cream",
    visual: "interaction",
  },
  {
    number: "05",
    eyebrow: "THE FINER DETAILS",
    title: "The details make the difference.",
    description:
      "Responsive layouts, accessible controls, thoughtful typography, and consistent spacing turn a good interface into a polished one.",
    tag: "DETAILS MATTER",
    icon: Layers3,
    background: "charcoal",
    visual: "details",
  },
  {
    number: "06",
    eyebrow: "THE RIGHT TECHNOLOGY",
    title: "Technology with a purpose.",
    description:
      "The best tools are the ones that solve real problems. I use modern web technologies to create practical, reliable experiences.",
    tag: "THE RIGHT TOOL FOR THE JOB",
    icon: Terminal,
    background: "sand",
    visual: "technology",
  },
  {
    number: "07",
    eyebrow: "SIMPLIFY THE COMPLEX",
    title: "Turn complexity into clarity.",
    description:
      "Good development is not just about making things work. It is about making them easier to use, understand, and maintain.",
    tag: "LESS FRICTION / MORE CLARITY",
    icon: Braces,
    background: "cream",
    visual: "clarity",
  },
  {
    number: "08",
    eyebrow: "READY FOR WHAT'S NEXT",
    title: "Ready for launch.",
    description:
      "With the details in place, an idea becomes a real experience — ready to reach people, solve problems, and make an impact.",
    tag: "FROM CONCEPT TO LAUNCH",
    icon: Rocket,
    background: "charcoal",
    visual: "launch",
  },
  {
    number: "09",
    eyebrow: "THE NEXT CHAPTER",
    title: "Let's build something meaningful.",
    description:
      "Have a website, product, or idea in mind? Let's turn your next challenge into a thoughtful digital experience.",
    tag: "YOUR IDEA → OUR NEXT PROJECT",
    icon: ArrowUpRight,
    background: "orange",
    visual: "final",
  },
];

const projects: Project[] = [
  {
    title: "Modern Blog",
    description: "A content-driven blog built with Next.js and Strapi.",
    stack: "NEXT.JS / STRAPI",
    number: "01",
  },
  {
    title: "Movie Discovery",
    description: "A movie discovery experience powered by an external API.",
    stack: "REACT / API",
    number: "02",
  },
  {
    title: "Digital Experience",
    description: "An interactive interface exploring motion and presentation.",
    stack: "REACT / GSAP",
    number: "03",
  },
];

/* -------------------------------------------------------------------------- */
/* Shared styles                                                              */
/* -------------------------------------------------------------------------- */

const buttonStyles = {
  primary:
    "inline-flex items-center justify-center gap-2 border-2 border-[#F15A36] bg-[#F15A36] px-6 py-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#C83C21] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#242321]",

  secondary:
    "inline-flex items-center justify-center gap-2 border-2 border-[#242321] bg-transparent px-6 py-4 text-sm font-bold text-[#242321] transition-colors duration-200 hover:bg-[#242321] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F15A36]",
};

const headingStyle = "font-black tracking-[-0.055em]";

const bodyStyle = "text-base leading-8 text-[#5F5A54] sm:text-lg";

function PortfolioHeader() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "My Story", href: "#scene-01" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#242321]/10 bg-[#F5F0E7]/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
      >
        <Link
          href="#home"
          aria-label="Ramil Aoanan — Home"
          className="shrink-0 text-xl font-black tracking-[-0.07em] text-[#242321]"
        >
          RA<span className="text-[#F15A36]">.</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-[#5F5A54] transition-colors duration-200 hover:text-[#F15A36] sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Brand                                                                      */
/* -------------------------------------------------------------------------- */

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="#home"
      aria-label="Ramil Aoanan — back to top"
      className={`text-xl font-black tracking-[-0.08em] ${
        light ? "text-[#F5F0E7]" : "text-[#242321]"
      }`}
    >
      RA<span className="text-[#F15A36]">.</span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Section label                                                              */
/* -------------------------------------------------------------------------- */

function SectionLabel({
  number,
  children,
  light = false,
}: {
  number: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`mb-6 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-white/80" : "text-[#77736D]"
      }`}
    >
      <span className="font-bold text-[#F15A36]">{number}</span>
      <span className="h-px w-8 bg-[#F15A36]" />
      <span>{children}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual: paper rocket                                                       */
/* -------------------------------------------------------------------------- */

function PaperRocket() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center">
      <div className="absolute h-[72%] w-[72%] rounded-full border border-[#242321]/15" />
      <div className="absolute h-[54%] w-[54%] rounded-full border border-[#242321]/20" />
      <div className="absolute h-[36%] w-[36%] rounded-full bg-[#242321]/5" />

      <div className="absolute left-[14%] top-[20%] h-2 w-2 rounded-full bg-[#242321]/60" />
      <div className="absolute right-[18%] top-[32%] h-1.5 w-1.5 rounded-full bg-white" />
      <div className="absolute bottom-[24%] left-[24%] h-1.5 w-1.5 rounded-full bg-[#242321]/50" />

      <div className="relative z-10 -rotate-[35deg]">
        <div className="relative h-36 w-24">
          <div className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-b-[52px] border-l-[42px] border-r-[42px] border-b-white border-l-transparent border-r-transparent drop-shadow-[0_5px_8px_rgba(36,35,33,0.15)]" />

          <div className="absolute left-1/2 top-[46px] h-[65px] w-[60px] -translate-x-1/2 rounded-t-[18px] bg-[#F5F0E7] shadow-lg">
            <div className="absolute left-1/2 top-3 h-5 w-5 -translate-x-1/2 rounded-full border-[4px] border-[#242321] bg-[#F15A36]" />
            <div className="absolute bottom-0 left-1/2 h-7 w-[2px] -translate-x-1/2 bg-[#242321]/20" />
          </div>

          <div className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-b-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-[#C83C21]" />

          <div className="absolute bottom-4 -left-2 h-9 w-5 -skew-y-[20deg] rounded-bl-lg bg-[#242321]" />
          <div className="absolute bottom-4 -right-2 h-9 w-5 skew-y-[20deg] rounded-br-lg bg-[#242321]" />
        </div>

        <div className="absolute -bottom-16 left-1/2 h-20 w-8 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#F15A36]/80 to-transparent blur-xl" />
      </div>

      <div className="absolute bottom-[14%] left-1/2 h-px w-[85%] -translate-x-1/2 bg-[#242321]/20" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual: code card                                                          */
/* -------------------------------------------------------------------------- */

function CodeCard() {
  return (
    <div className="w-full max-w-[440px] overflow-hidden border border-[#242321]/15 bg-[#242321] shadow-[0_24px_70px_rgba(36,35,33,0.16)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F15A36]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F5F0E7]/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F5F0E7]/25" />
        </div>

        <span className="font-mono text-[10px] tracking-wider text-white/50">
          experience.tsx
        </span>
      </div>

      <div className="space-y-4 px-6 py-7 font-mono text-xs leading-7 sm:text-sm">
        <p className="text-white/40">{"// Build something meaningful"}</p>

        <p>
          <span className="text-[#FF8A6D]">const</span>{" "}
          <span className="text-white">experience</span>{" "}
          <span className="text-white/60">=</span>{" "}
          <span className="text-[#FF8A6D]">{"{"}</span>
        </p>

        <p className="pl-5">
          <span className="text-[#FF8A6D]">purpose</span>
          <span className="text-white/60">:</span>{" "}
          <span className="text-[#F5F0E7]">"people first"</span>
          <span className="text-white/60">,</span>
        </p>

        <p className="pl-5">
          <span className="text-[#FF8A6D]">design</span>
          <span className="text-white/60">:</span>{" "}
          <span className="text-[#F5F0E7]">"thoughtful"</span>
          <span className="text-white/60">,</span>
        </p>

        <p className="pl-5">
          <span className="text-[#FF8A6D]">code</span>
          <span className="text-white/60">:</span>{" "}
          <span className="text-[#F5F0E7]">"maintainable"</span>
        </p>

        <p>
          <span className="text-[#FF8A6D]">{"}"}</span>
          <span className="text-white/60">;</span>
        </p>

        <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-[#FF8A6D]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F15A36]" />
          <span className="text-[10px] uppercase tracking-[0.18em]">
            Ready to create
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Story scene visual                                                         */
/* -------------------------------------------------------------------------- */

function SceneVisual({ scene }: { scene: Scene }) {
  const isDark = scene.background === "charcoal";
  const isFinal = scene.background === "orange";

  const captionColor = isDark || isFinal ? "text-white" : "text-[#5F5A54]";

  return (
    <div className="relative mx-auto flex w-full max-w-[520px] flex-col items-center">
      <div
        className={`absolute inset-8 rounded-full blur-3xl ${
          isDark ? "bg-[#F15A36]/10" : "bg-[#242321]/10"
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full">
        {scene.visual === "idea" && (
          <div className="relative mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center">
            <div className="absolute h-[75%] w-[75%] rounded-full border border-[#242321]/15" />
            <div className="absolute h-[55%] w-[55%] rounded-full border border-dashed border-[#242321]/25" />
            <div className="absolute h-[35%] w-[35%] rounded-full bg-[#F15A36]/10" />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[#F15A36] text-white shadow-xl shadow-[#F15A36]/20">
              <Sparkles size={48} strokeWidth={1.5} />
            </div>

            <span className="absolute left-[12%] top-[25%] h-3 w-3 rounded-full bg-[#242321]" />
            <span className="absolute right-[15%] top-[28%] h-2 w-2 rounded-full bg-[#F15A36]" />
            <span className="absolute bottom-[17%] left-[28%] h-2 w-2 rounded-full bg-[#242321]/50" />
          </div>
        )}

        {scene.visual === "vision" && (
          <div className="mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center">
            <div className="relative flex h-[72%] w-[72%] items-center justify-center border border-white/15">
              <div className="absolute inset-6 border border-white/15" />
              <div className="absolute inset-12 border border-dashed border-white/20" />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#F15A36]/70 bg-[#F15A36]/10 text-[#FF8A6D]">
                <MousePointer2 size={42} strokeWidth={1.5} />
              </div>

              <span className="absolute left-0 top-1/2 h-px w-full bg-white/15" />
              <span className="absolute left-1/2 top-0 h-full w-px bg-white/15" />
            </div>
          </div>
        )}

        {scene.visual === "code" && <CodeCard />}

        {scene.visual === "interaction" && (
          <div className="mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center">
            <div className="relative flex h-[72%] w-[72%] items-center justify-center rounded-full border border-[#242321]/15">
              <div className="absolute h-[72%] w-[72%] rounded-full border border-dashed border-[#242321]/20" />
              <div className="absolute h-[48%] w-[48%] rounded-full bg-[#F15A36]/10" />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-[#242321] text-[#F5F0E7] shadow-xl transition-transform duration-300 hover:scale-105">
                <MousePointer2 size={42} strokeWidth={1.5} />
              </div>

              <div className="absolute right-[8%] top-[17%] flex h-12 w-12 items-center justify-center rounded-full bg-[#F15A36] text-white">
                <Zap size={22} />
              </div>

              <div className="absolute bottom-[12%] left-[12%] h-3 w-3 rounded-full bg-[#F15A36]" />
            </div>
          </div>
        )}

        {scene.visual === "details" && (
          <div className="mx-auto w-full max-w-[390px] space-y-3 p-4">
            {[
              { label: "Responsive layout", width: "w-full" },
              { label: "Accessible interface", width: "w-[88%]" },
              { label: "Consistent spacing", width: "w-[76%]" },
              { label: "Polished details", width: "w-[92%]" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 border border-white/10 bg-white/5 p-4 ${item.width}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#F15A36] text-white">
                  <Layers3 size={16} />
                </span>

                <span className="text-sm text-white/80">{item.label}</span>

                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#FF8A6D]" />
              </div>
            ))}
          </div>
        )}

        {scene.visual === "technology" && (
          <div className="mx-auto grid aspect-square w-full max-w-[390px] grid-cols-2 gap-3 p-5">
            {[
              { label: "FRONTEND", icon: Code2 },
              { label: "SYSTEMS", icon: Terminal },
              { label: "COMPONENTS", icon: Layers3 },
              { label: "EXPERIENCE", icon: Sparkles },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-4 border border-[#242321]/15 bg-white/30 p-4"
                >
                  <Icon size={30} strokeWidth={1.4} />

                  <span className="text-center font-mono text-[9px] tracking-[0.15em] text-[#5F5A54]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {scene.visual === "clarity" && (
          <div className="mx-auto flex aspect-square w-full max-w-[390px] items-center justify-center">
            <div className="relative flex h-[75%] w-[75%] items-center justify-center">
              <div className="absolute left-0 top-[20%] h-[60%] w-[40%] border border-[#242321]/20 bg-[#242321]/5" />
              <div className="absolute right-0 top-[10%] h-[80%] w-[40%] border border-[#242321]/20 bg-[#F15A36]/10" />

              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#F15A36] text-white shadow-xl">
                <Braces size={38} strokeWidth={1.5} />
              </div>

              <ArrowRight
                className="absolute left-[36%] top-1/2 -translate-y-1/2 text-[#242321]"
                size={24}
              />
            </div>
          </div>
        )}

        {(scene.visual === "launch" || scene.visual === "final") && (
          <PaperRocket />
        )}
      </div>

      <span
        className={`relative z-10 mt-5 block text-center font-mono text-[9px] tracking-[0.2em] ${captionColor}`}
      >
        RAMIL AOANAN / DIGITAL EXPERIENCE
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Story scene                                                                */
/* -------------------------------------------------------------------------- */

function StoryScene({ scene, index }: { scene: Scene; index: number }) {
  const Icon = scene.icon;
  const isDark = scene.background === "charcoal";
  const isFinal = scene.background === "orange";
  const isEven = index % 2 === 0;

  const titleColor = isDark ? "text-[#F5F0E7]" : "text-[#242321]";

  const bodyColor = isDark
    ? "text-white/80"
    : isFinal
      ? "text-white"
      : "text-[#5F5A54]";

  const metaColor = isDark
    ? "text-white/70"
    : isFinal
      ? "text-[#242321]"
      : "text-[#5F5A54]";

  const backgroundClass: Record<SceneBackground, string> = {
    cream: "bg-[#F5F0E7] text-[#242321]",
    charcoal: "bg-[#242321] text-[#F5F0E7]",
    sand: "bg-[#E8DFD1] text-[#242321]",
    orange: "bg-[#F15A36] text-[#242321]",
  };

  const highlightedWords: Record<string, boolean> = {
    idea: true,
    vision: true,
    build: true,
    interaction: true,
    difference: true,
    purpose: true,
    clarity: true,
    launch: true,
    meaningful: true,
  };

  return (
    <section
      data-scene
      id={`scene-${scene.number}`}
      className={`relative isolate flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16 ${backgroundClass[scene.background]}`}
      aria-labelledby={`scene-title-${scene.number}`}
    >
      {/* Background grid */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 ${
          isDark ? "opacity-[0.12]" : "opacity-[0.08]"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5F0E7 1px, transparent 1px), linear-gradient(to bottom, #F5F0E7 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Oversized scene number */}
      <div
        className={`pointer-events-none absolute -right-10 -top-16 -z-10 select-none font-black leading-none tracking-tighter ${
          isDark ? "text-white/[0.04]" : "text-[#242321]/[0.05]"
        }`}
        style={{ fontSize: "clamp(12rem, 32vw, 32rem)" }}
        aria-hidden="true"
      >
        {scene.number}
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div
          data-scene-copy
          className={`relative z-10 ${isEven ? "lg:order-1" : "lg:order-2"}`}
        >
          <SectionLabel number={scene.number} light={isDark || isFinal}>
            {scene.eyebrow}
          </SectionLabel>

          <h2
            id={`scene-title-${scene.number}`}
            className={`max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.055em] sm:text-5xl md:text-6xl xl:text-7xl ${titleColor}`}
          >
            {scene.title.split(" ").map((word, wordIndex, words) => {
              const cleanWord = word.toLowerCase().replace(/[.,!?]/g, "");

              const highlight = highlightedWords[cleanWord];

              const highlightClass = highlight
                ? isDark
                  ? "text-[#FF8A6D]"
                  : isFinal
                    ? "text-white"
                    : "text-[#C83C21]"
                : "";

              return (
                <span
                  key={`${scene.number}-${wordIndex}`}
                  className={highlightClass}
                >
                  {word}
                  {wordIndex < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </h2>

          <p
            className={`mt-7 max-w-xl text-base leading-8 sm:text-lg ${bodyColor}`}
          >
            {scene.description}
          </p>

          <div
            className={`mt-8 inline-flex items-center gap-3 border px-4 py-3 font-mono text-[10px] font-semibold tracking-[0.14em] ${
              isDark
                ? "border-white/20 text-white/75"
                : isFinal
                  ? "border-[#242321]/30 text-[#242321]"
                  : "border-[#242321]/20 text-[#5F5A54]"
            }`}
          >
            <Icon size={15} />
            <span>{scene.tag}</span>
          </div>

          {isFinal ? (
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#242321] bg-[#242321] px-6 py-4 text-sm font-bold text-white transition-colors duration-200 hover:border-[#3A3835] hover:bg-[#3A3835] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore my work <ArrowUpRight size={17} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white bg-white px-6 py-4 text-sm font-bold text-[#242321] transition-colors duration-200 hover:bg-[#F5F0E7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Let&apos;s talk <ArrowRight size={17} />
              </Link>
            </div>
          ) : (
            <div className={`mt-10 flex items-center gap-3 ${metaColor}`}>
              <a
                href={`#scene-${String(Number(scene.number) + 1).padStart(2, "0")}`}
                aria-label="Scroll to the next scene"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition-colors hover:border-[#F15A36] hover:text-[#F15A36]"
              >
                <ArrowDown size={17} />
              </a>

              <span className="font-mono text-[10px] tracking-[0.16em]">
                SCROLL TO EXPLORE
              </span>
            </div>
          )}
        </div>

        {/* Visual */}
        <div
          data-scene-visual
          className={`relative z-10 ${isEven ? "lg:order-2" : "lg:order-1"}`}
        >
          <SceneVisual scene={scene} />
        </div>
      </div>

      {/* Scene footer */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-current/15 pt-4 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
        <span className="font-mono text-[9px] tracking-[0.2em] opacity-70">
          RA. / INDEPENDENT WEB DEVELOPER
        </span>

        <span className="font-mono text-[9px] tracking-[0.2em] opacity-70">
          {scene.number} / 09
        </span>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export default function CinematicHero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      const sceneElements = gsap.utils.toArray<HTMLElement>("[data-scene]");

      sceneElements.forEach((scene) => {
        const copy = scene.querySelector<HTMLElement>("[data-scene-copy]");

        const visual = scene.querySelector<HTMLElement>("[data-scene-visual]");

        if (!copy || !visual) return;

        gsap.fromTo(
          copy,
          {
            autoAlpha: 0,
            y: 36,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );

        gsap.fromTo(
          visual,
          {
            autoAlpha: 0,
            y: 24,
            scale: 0.97,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="cinematic-hero relative overflow-clip">
      <PortfolioHeader />
      {/* ------------------------------------------------------------------ */}
      {/* HERO / INTRODUCTION                                                */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="home"
        className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#F5F0E7] px-5 py-24 sm:px-8 lg:px-12"
        aria-labelledby="hero-title"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #242321 1px, transparent 1px), linear-gradient(to bottom, #242321 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1.05fr_.95fr] lg:gap-16">
          {/* Introduction */}
          <div className="order-2 md:order-1">
            <div className="mb-7 inline-flex items-center gap-2 border border-[#242321]/20 px-3 py-2 font-mono text-[10px] font-semibold tracking-[0.14em] text-[#5F5A54]">
              <span className="h-2 w-2 rounded-full bg-[#F15A36]" />
              INDEPENDENT WEB DEVELOPER
            </div>

            <h1
              id="hero-title"
              className={`max-w-3xl text-5xl leading-[0.95] sm:text-6xl lg:text-8xl ${headingStyle}`}
            >
              RAMIL
              <br />
              AOANAN<span className="text-[#F15A36]">.</span>
            </h1>

            <p className={`mt-7 max-w-xl ${bodyStyle}`}>
              I turn ideas into{" "}
              <span className="font-semibold text-[#242321]">
                thoughtful digital experiences
              </span>{" "}
              through design, code, and a little curiosity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#scene-01" className={buttonStyles.primary}>
                Explore my story <ArrowDown size={17} />
              </Link>

              <Link
                href="https://github.com/ramilinator"
                target="_blank"
                rel="noreferrer"
                className={buttonStyles.secondary}
              >
                GitHub <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Experience and skills */}
            <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[#242321]/20 pt-5">
              <div>
                <p className="text-xl font-black text-[#242321]">05+</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#5F5A54]">
                  Years in frontend
                </p>
              </div>

              <div>
                <p className="text-xl font-black text-[#242321]">React</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#5F5A54]">
                  Modern UI
                </p>
              </div>

              <div>
                <p className="text-xl font-black text-[#242321]">Next.js</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#5F5A54]">
                  Web systems
                </p>
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative order-1 mx-auto w-full max-w-md md:order-2">
            <div
              className="absolute inset-8 rounded-full bg-[#F15A36]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto aspect-[4/5] max-w-[390px] overflow-hidden border border-[#242321]/10 bg-[#EEE6DA]">
              <div className="absolute left-4 top-4 z-10 font-mono text-[10px] font-semibold tracking-widest text-[#5F5A54]">
                FIG. 001 / THE DEVELOPER
              </div>

              <Image
                src="/images/profile.png"
                alt="Ramil Aoanan"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 390px"
                className="object-contain object-bottom p-4 pt-12"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-[#242321] p-5 text-[#F5F0E7]">
                <p className="font-mono text-[10px] tracking-[0.18em] text-white/70">
                  CURRENT FOCUS
                </p>

                <p className="mt-2 text-lg font-bold">
                  Building for the web
                  <span className="text-[#F15A36]">.</span>
                </p>
              </div>
            </div>

            <div className="absolute -right-2 top-[28%] hidden border border-[#242321]/10 bg-white p-4 shadow-lg sm:block">
              <Braces size={25} className="text-[#F15A36]" />
            </div>

            <div className="absolute -left-3 bottom-[23%] hidden bg-[#F15A36] p-4 text-white shadow-lg sm:block">
              <Code2 size={23} />
            </div>
          </div>
        </div>

        {/* Hero footer */}
        <div className="absolute bottom-6 left-5 right-5 flex items-center justify-between border-t border-[#242321]/15 pt-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#5F5A54]">
            RA. / INDEPENDENT WEB DEVELOPER
          </span>

          <a
            href="#scene-01"
            className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-[#5F5A54] transition-colors hover:text-[#F15A36]"
          >
            SCROLL TO EXPLORE <ArrowDown size={13} />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* STORY SCENES 01–09                                                 */}
      {/* ------------------------------------------------------------------ */}

      {scenes.map((scene, index) => (
        <StoryScene key={scene.number} scene={scene} index={index} />
      ))}

      {/* ------------------------------------------------------------------ */}
      {/* PROJECTS                                                           */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="projects"
        className="scroll-mt-20 bg-[#EEE6DA] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
        aria-labelledby="projects-title"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel number="10">THE WORK</SectionLabel>

            <h2
              id="projects-title"
              className={`max-w-2xl text-4xl sm:text-6xl ${headingStyle}`}
            >
              Ideas made <span className="text-[#F15A36]">real.</span>
            </h2>

            <p className={`mt-5 max-w-xl ${bodyStyle}`}>
              Explore projects that bring together modern frontend development,
              useful functionality, and considered design.
            </p>
          </div>

          <Link
            href="https://github.com/ramilinator"
            target="_blank"
            rel="noreferrer"
            className={`${buttonStyles.secondary} w-fit`}
          >
            View GitHub projects <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border border-[#242321]/10 bg-[#F5F0E7] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#5F5A54]">
                  PROJECT / {project.number}
                </span>

                <ArrowUpRight
                  size={20}
                  className="text-[#F15A36] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <h3 className="text-2xl font-black tracking-tight text-[#242321]">
                {project.title}
              </h3>

              <p className="mt-3 min-h-14 leading-6 text-[#5F5A54]">
                {project.description}
              </p>

              <div className="mt-6 border-t border-[#242321]/15 pt-4 font-mono text-[10px] font-semibold tracking-widest text-[#C83C21]">
                {project.stack}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONTACT                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="contact"
        className="scroll-mt-20 bg-[#F15A36] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
        aria-labelledby="contact-title"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs font-bold tracking-[0.2em] text-[#242321]/80">
              HAVE SOMETHING IN MIND?
            </p>

            <h2
              id="contact-title"
              className={`max-w-3xl text-5xl leading-[0.98] sm:text-7xl ${headingStyle}`}
            >
              Let&apos;s make your next idea happen.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#242321]/85 sm:text-lg">
              Whether you&apos;re planning a website, improving an existing
              product, or exploring a new idea, I&apos;d love to hear about it.
            </p>
          </div>

          <Link
            href="mailto:hello@ramilaoanan.com"
            className={`${buttonStyles.secondary} w-fit`}
          >
            Get in touch <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}

      <footer className="bg-[#242321] px-5 py-6 text-[#F5F0E7] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <BrandMark light />

          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Ramil Aoanan. Built with intention.
          </p>

          <Link
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F0E7] transition-colors hover:text-[#FF8A6D]"
          >
            Back to top <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
