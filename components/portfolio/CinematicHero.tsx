"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Layers3,
  MousePointer2,
  Rocket,
} from "lucide-react";

import "./CinematicHero.css";

gsap.registerPlugin(ScrollTrigger);

function PaperRocket() {
  return (
    <svg
      viewBox="0 0 220 340"
      className="paper-rocket"
      role="img"
      aria-label="Illustrated paper rocket launching upward"
    >
      <defs>
        <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dedbd6" />
        </linearGradient>
        <linearGradient id="rocketFlame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffdb69" />
          <stop offset="50%" stopColor="#ff7438" />
          <stop offset="100%" stopColor="#ef3529" />
        </linearGradient>
      </defs>

      {/* Layered paper exhaust */}
      <path d="M78 230 L105 326 L123 269 L146 320 L148 228Z" fill="#d52c24" />
      <path d="M87 229 L108 304 L119 253 L135 290 L139 225Z" fill="#ff793d" />
      <path d="M102 228 L111 278 L124 239 L126 228Z" fill="url(#rocketFlame)" />

      {/* Left fin */}
      <path d="M91 174 L45 230 L96 214Z" fill="#c72e27" />
      <path d="M91 174 L60 215 L97 205Z" fill="#f15b43" />

      {/* Right fin */}
      <path d="M128 174 L176 230 L126 214Z" fill="#d43b2e" />
      <path d="M128 174 L162 215 L125 205Z" fill="#ff7952" />

      {/* Main paper fuselage */}
      <path
        d="M110 18
           C79 48 70 95 75 154
           L88 211
           L110 231
           L132 211
           L145 154
           C150 95 141 48 110 18Z"
        fill="url(#rocketBody)"
        stroke="#282322"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Folded paper plane */}
      <path
        d="M110 18 L110 231 L88 211 L75 154
           C70 95 79 48 110 18Z"
        fill="#f7f4ef"
      />
      <path
        d="M110 18 L110 231 L132 211 L145 154
           C150 95 141 48 110 18Z"
        fill="#d2cfcb"
      />
      <path
        d="M110 24 L110 225"
        stroke="#aaa5a0"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />

      {/* Window */}
      <circle cx="110" cy="112" r="22" fill="#292626" />
      <circle cx="110" cy="112" r="16" fill="#ff7048" />
      <path
        d="M101 103 Q109 96 118 104"
        fill="none"
        stroke="#fff0d8"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Small graphic detail */}
      <path
        d="M92 166 L105 179 L92 192"
        fill="none"
        stroke="#ee5338"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M120 180 H132"
        stroke="#ee5338"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-card-header">
        <span />
        <span />
        <span />
        <small>portfolio.tsx</small>
      </div>
      <div className="code-lines">
        <p>
          <i>01</i> <b>const</b> developer = {"{"}
        </p>
        <p>
          <i>02</i> &nbsp; name: <em>"Ramil"</em>,
        </p>
        <p>
          <i>03</i> &nbsp; stack: [
        </p>
        <p>
          <i>04</i> &nbsp;&nbsp; <em>"React"</em>,
        </p>
        <p>
          <i>05</i> &nbsp;&nbsp; <em>"Next.js"</em>
        </p>
        <p>
          <i>06</i> &nbsp; ],
        </p>
        <p>
          <i>07</i> &nbsp; build: <strong>true</strong>
        </p>
        <p>
          <i>08</i> {"};"}
        </p>
      </div>
    </div>
  );
}

export default function CinematicHero() {
  const rootRef = useRef<HTMLElement>(null);
  const sceneOneRef = useRef<HTMLDivElement>(null);
  const sceneTwoRef = useRef<HTMLDivElement>(null);
  const sceneThreeRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const sceneOne = sceneOneRef.current;
    const sceneTwo = sceneTwoRef.current;
    const sceneThree = sceneThreeRef.current;
    const name = nameRef.current;
    const portrait = portraitRef.current;
    const rocket = rocketRef.current;

    if (
      !root ||
      !sceneOne ||
      !sceneTwo ||
      !sceneThree ||
      !name ||
      !portrait ||
      !rocket
    ) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const conditions = context.conditions as {
          desktop: boolean;
          mobile: boolean;
          reduceMotion: boolean;
        };

        const reducedMotion = conditions.reduceMotion;

        gsap.set(sceneOne, { autoAlpha: 1 });
        gsap.set(sceneTwo, { autoAlpha: 0 });
        gsap.set(sceneThree, { autoAlpha: 0 });

        gsap.set(name, {
          scale: 1,
          transformOrigin: "50% 50%",
        });

        gsap.set(portrait, {
          y: reducedMotion ? 0 : 70,
          autoAlpha: reducedMotion ? 1 : 0,
          rotate: reducedMotion ? 0 : -3,
        });

        gsap.set(".profile-copy > *", {
          y: reducedMotion ? 0 : 30,
          autoAlpha: reducedMotion ? 1 : 0,
        });

        gsap.set(".launch-copy > *", {
          y: reducedMotion ? 0 : 25,
          autoAlpha: reducedMotion ? 1 : 0,
        });

        gsap.set(rocket, {
          y: reducedMotion ? 0 : 470,
          rotate: reducedMotion ? 0 : -8,
          transformOrigin: "50% 50%",
        });

        gsap.set(".orbit-card", {
          autoAlpha: 0,
          y: reducedMotion ? 0 : 25,
        });

        if (reducedMotion) {
          gsap.set([sceneOne, sceneTwo, sceneThree], {
            clearProps: "visibility",
          });

          return;
        }

        const timeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => `+=${window.innerHeight * 3}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // SCENE 01 — Oversized name zooms toward the viewer.
        timeline
          .to(
            name,
            {
              scale: conditions.mobile ? 11 : 14,
              duration: 1.2,
              ease: "power2.in",
            },
            0,
          )
          .to(".intro-meta", { autoAlpha: 0, y: -25, duration: 0.35 }, 0)
          .to(sceneOne, { autoAlpha: 0, duration: 0.25 }, 0.9)

          // SCENE 02 — Red-orange profile reveal.
          .set(sceneTwo, { autoAlpha: 1 }, 1)
          .fromTo(
            ".profile-backdrop-shape",
            { scale: 0.75, rotate: -12 },
            {
              scale: 1,
              rotate: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            1,
          )
          .to(
            portrait,
            {
              y: 0,
              autoAlpha: 1,
              rotate: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            1.05,
          )
          .to(
            ".profile-copy > *",
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.12,
              duration: 0.55,
              ease: "power3.out",
            },
            1.2,
          )
          .to(
            ".orbit-card",
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.45,
            },
            1.45,
          )
          .to(
            sceneTwo,
            {
              autoAlpha: 0,
              duration: 0.3,
            },
            2,
          )

          // SCENE 03 — Paper rocket rises from the bottom.
          .set(sceneThree, { autoAlpha: 1 }, 2.05)
          .to(
            ".launch-copy > *",
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.1,
              duration: 0.45,
              ease: "power3.out",
            },
            2.15,
          )
          .to(
            rocket,
            {
              y: conditions.mobile ? -480 : -620,
              rotate: 4,
              duration: 0.85,
              ease: "power2.in",
            },
            2.12,
          )
          .to(
            ".rocket-trail",
            { scaleY: 1.5, autoAlpha: 1, duration: 0.5 },
            2.15,
          )
          .to(
            ".launch-orbit",
            {
              y: -35,
              rotate: 10,
              duration: 0.85,
            },
            2.15,
          );

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      },
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="cinematic-hero"
      aria-label="Ramil Aoanan portfolio introduction"
    >
      <div className="cinematic-stage">
        {/* =================================================
            SCENE 01 — NAME IMPACT
        ================================================= */}
        <div ref={sceneOneRef} className="hero-scene scene-intro">
          <div className="intro-grid" aria-hidden="true" />

          <div className="intro-top">
            <Link href="/" className="brand-mark">
              RA<span>.</span>
            </Link>
            <span className="top-label">INDEPENDENT WEB DEVELOPER</span>
            <span className="scene-number">01 / 03</span>
          </div>

          <div className="intro-center">
            <p className="intro-eyebrow">
              DIGITAL CRAFT · FRONTEND ENGINEERING
            </p>

            <h1 ref={nameRef} className="intro-name">
              RAMIL
              <br />
              AOANAN<span className="name-period">.</span>
            </h1>

            <div className="intro-meta">
              <span>DESIGN MINDED.</span>
              <span>CODE DRIVEN.</span>
              <span>BUILT FOR THE WEB.</span>
            </div>
          </div>

          <div className="intro-bottom">
            <div className="intro-bottom-left">
              <Code2 size={16} />
              <span>REACT / NEXT.JS / TYPESCRIPT</span>
            </div>
            <div className="scroll-cue">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={15} />
            </div>
          </div>

          <div className="intro-cross intro-cross-one" aria-hidden="true">
            +
          </div>
          <div className="intro-cross intro-cross-two" aria-hidden="true">
            +
          </div>
        </div>

        {/* =================================================
            SCENE 02 — PROFILE REVEAL
        ================================================= */}
        <div ref={sceneTwoRef} className="hero-scene scene-profile">
          <div className="profile-texture" aria-hidden="true" />

          <div className="profile-top">
            <Link href="/" className="brand-mark brand-mark-light">
              RA<span>.</span>
            </Link>
            <span className="top-label">A LITTLE ABOUT ME</span>
            <span className="scene-number">02 / 03</span>
          </div>

          <div className="profile-layout">
            <div className="profile-copy">
              <p className="profile-eyebrow">
                <span className="status-dot" />
                AVAILABLE FOR OPPORTUNITIES
              </p>

              <h2>
                I TURN
                <br />
                IDEAS INTO
                <br />
                <span>DIGITAL</span>
                <br />
                EXPERIENCES.
              </h2>

              <p className="profile-description">
                I'm Ramil, a web developer who builds thoughtful, responsive,
                and user-friendly experiences for the web. I bring design and
                code together to make useful things.
              </p>

              <div className="skill-list">
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>WordPress</span>
                <span>Strapi</span>
              </div>

              <div className="profile-actions">
                <Link href="#projects" className="hero-button">
                  EXPLORE MY WORK <ArrowUpRight size={17} />
                </Link>
                <span className="experience-note">
                  05+ YEARS
                  <small>WEB DEVELOPMENT</small>
                </span>
              </div>
            </div>

            <div className="profile-visual">
              <div className="profile-backdrop-shape" />

              <div className="profile-index">
                <span>PROFILE_001</span>
                <span>PH / WEB</span>
              </div>

              <div ref={portraitRef} className="portrait-frame">
                <Image
                  src="/images/profile.png"
                  alt="Ramil Aoanan, web developer"
                  width={640}
                  height={800}
                  priority
                  className="portrait-image"
                  sizes="(max-width: 767px) 75vw, 38vw"
                />
                <div className="portrait-caption">
                  <span>RAMIL AOANAN</span>
                  <span>WEB DEVELOPER ↗</span>
                </div>
              </div>

              <div className="orbit-card orbit-card-code">
                <Braces size={19} />
                <div>
                  <strong>Clean code</strong>
                  <small>Made to scale</small>
                </div>
              </div>

              <div className="orbit-card orbit-card-stack">
                <Layers3 size={19} />
                <div>
                  <strong>Modern stack</strong>
                  <small>Design to deployment</small>
                </div>
              </div>

              <CodeCard />
            </div>
          </div>

          <div className="profile-bottom">
            <span>THOUGHTFUL DESIGN. SOLID ENGINEERING.</span>
            <span>SCROLL TO LAUNCH ↓</span>
          </div>
        </div>

        {/* =================================================
            SCENE 03 — ROCKET LAUNCH
        ================================================= */}
        <div ref={sceneThreeRef} className="hero-scene scene-launch">
          <div className="launch-grid" aria-hidden="true" />

          <div className="launch-top">
            <Link href="/" className="brand-mark">
              RA<span>.</span>
            </Link>
            <span className="top-label">THE NEXT CHAPTER</span>
            <span className="scene-number">03 / 03</span>
          </div>

          <div className="launch-copy">
            <p className="launch-eyebrow">
              <Rocket size={16} />
              IDEAS IN MOTION
            </p>

            <h2>
              LET'S
              <br />
              BUILD
              <br />
              <span>WHAT'S NEXT.</span>
            </h2>

            <p className="launch-description">
              Every great digital experience starts with an idea. Let's turn
              yours into something real.
            </p>

            <div className="launch-actions">
              <Link href="#contact" className="launch-button">
                START A PROJECT <ArrowUpRight size={18} />
              </Link>

              <a
                href="https://github.com/ramilinator"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <Code2 size={17} />
                GITHUB
              </a>
            </div>
          </div>

          <div className="launch-illustration" aria-hidden="true">
            <div className="launch-orbit launch-orbit-one" />
            <div className="launch-orbit launch-orbit-two" />

            <div className="rocket-trail" />

            <div ref={rocketRef} className="rocket-wrap">
              <PaperRocket />
            </div>

            <div className="launch-sticker launch-sticker-one">
              <MousePointer2 size={18} />
              <span>CREATE</span>
            </div>

            <div className="launch-sticker launch-sticker-two">
              <Code2 size={18} />
              <span>DEPLOY</span>
            </div>

            <div className="launch-star launch-star-one">✳</div>
            <div className="launch-star launch-star-two">✳</div>
            <div className="launch-star launch-star-three">+</div>
          </div>

          <div className="launch-bottom">
            <span>RAMIL AOANAN © 2026</span>
            <span>DESIGNED TO MOVE FORWARD ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
