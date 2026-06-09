import React, { useState, useEffect } from "react";
import NavbarArch from "components/Navbar-arch/navbar-arch";
import DarkTheme from "layouts/Dark";
import HeaderMain from "components/Case-studies-components/GoodLeap/header-main";
import IntroMain from "components/Case-studies-components/GoodLeap/intro-main";
import { withAuth } from "../../utils/withAuth";


/* ------------------------------------------------------------------
   CSS Tokens injected once via a style element
-------------------------------------------------------------------*/
const CSS_TOKENS = `
  :root {
    --fc-primary: #3BC0B9;
    --fc-primary-hover: #5BD1CA;
    --fc-on-primary: #06201F;
    --fc-navy-950: #0B1322;
    --fc-navy-900: #111C30;
    --fc-navy-800: #16233C;
    --fc-navy-700: #1D2D4A;
    --fc-navy-600: #2A3B5C;
    --fc-navy-500: #475776;
    --fc-navy-400: #6E7B96;
    --fc-navy-300: #96A1B6;
    --fc-fg: #EEF2F9;
    --fc-fg-strong: #FFFFFF;
    --fc-fg-muted: #A9B4C8;
    --fc-fg-subtle: #6E7B96;
    --fc-border: rgba(255,255,255,0.08);
    --fc-shadow-glow: 0 0 40px rgba(78,185,232,0.25);
  }
  @keyframes fcFade {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .gl-nav-btn:hover { background: rgba(255,255,255,0.06) !important; }
  .gl-tab-btn:hover { opacity: 0.85; }

  /* Key Features section — mobile (<=768px) */
  @media (max-width: 768px) {
    /* Tabs: keep them on a single line as a horizontally-scrollable strip
       so the pill background stays continuous and tabs don't wrap into a stack */
    .gl-features-tabs {
      flex-wrap: nowrap !important;
      width: 100% !important;
      max-width: 100% !important;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x proximity;
      scrollbar-width: none;
    }
    .gl-features-tabs::-webkit-scrollbar { display: none; }
    .gl-features-tabs .gl-tab-btn {
      flex-shrink: 0;
      scroll-snap-align: start;
    }
    /* Collapse the 2-col content area to single column */
    .gl-feature-row {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }
    /* Tighter padding inside the copy card */
    .gl-feature-copy {
      padding: 24px !important;
    }
    /* Release the fixed 480px height so the image controls its own height */
    .gl-feature-visual {
      min-height: 0 !important;
    }
    .gl-feature-visual img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
`;

/* ------------------------------------------------------------------
   Primitives
-------------------------------------------------------------------*/

function Eyebrow({ children, color }) {
  return (
    <h6>
      {children}
    </h6>
  );
}

function SectionTitle({ kicker, title, lead, follow,align = "left", maxWidth }) {
  return (
    <header style={{
      maxWidth: maxWidth || (align === "center" ? 760 : 820),
      margin: align === "center" ? "0 auto" : 0,
      textAlign: align,
    }}>
      {kicker && <div style={{ marginBottom: 16 }}><Eyebrow>{kicker}</Eyebrow></div>}
      <h2 className="mb-30">{title}</h2>
      {lead && (
        <p>{lead}</p>
      )}
      {follow && <div style={{ marginTop:20}}>
        <p>{follow}</p>
        </div>
      }
    </header>
  );
}

function Container({ children, style, maxWidth = 1180, narrow }) {
  return (
    <div style={{
      maxWidth: narrow ? 820 : maxWidth,
      margin: "0 auto",
      padding: "0 clamp(20px, 4vw, 40px)",
      ...style,
    }}>
      {children}
    </div>
  );
}

function Section({ children, style, bg, id }) {
  return (
    <section
      id={id}
      style={{
        padding: "clamp(72px, 10vw, 140px) 0",
        background: bg || "linear-gradient(180deg, #16181E 0%, #171a21 54.7%, #16181E 100%)",
        position: "relative",
        ...style,
      }}>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------
   FLOATING NAV (case-study internal)
   Positioned below site NavbarArch
-------------------------------------------------------------------*/

function CaseStudyNav() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { id: "problem",  label: "Problem"  },
    { id: "approach", label: "Approach" },
    { id: "research", label: "Research" },
    { id: "features", label: "Features" },
    { id: "impact",   label: "Impact"   },
  ];

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: "smooth" });
  };

  return (
    <nav
      aria-hidden={!visible}
      style={{
        position: "fixed",
        top: 72,
        left: 0,
        right: 0,
        zIndex: 40,
        display: "flex",
        justifyContent: "center",
        pointerEvents: visible ? "none" : "none",
        padding: "0 16px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-12px)",
        transition: "opacity 320ms ease, transform 320ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}>
      <div style={{
        pointerEvents: visible ? "auto" : "none",
        background: "rgba(17,28,48,0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 999,
        padding: "6px 6px 6px 18px",
        display: "flex",
        alignItems: "center",
        gap: 4,
        boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
        maxWidth: "100%",
      }}>
        <div style={{
          fontSize: 16,
          color: "#fff",
          paddingRight: 14,
          borderRight: "1px solid rgba(255,255,255,0.1)",
          marginRight: 4,
          whiteSpace: "nowrap",
        }}>
          <span style={{ color: "var(--fc-primary)" }}>◆</span>&nbsp; GoodLeap Pros
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {items.map(it => (
            <button
              key={it.id}
              className="gl-nav-btn"
              onClick={() => go(it.id)}
              style={{
                padding: "9px 14px",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                color: "#EEF2F9",
                background: "transparent",
                transition: "background 150ms ease",
              }}>
              {it.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------
   HERO
-------------------------------------------------------------------*/


function RoofDiagram() {
  return (
    <div style={{
      position: "relative",
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.06)",
      background: "linear-gradient(135deg, #1D2D4A 0%, #16233C 100%)",
      minHeight: 280,
      padding: 16,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          color: "#A9B4C8",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
        }}>GPS Roof Measurement</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#7ED9A7",
          padding: "3px 8px",
          background: "rgba(126,217,167,0.12)",
          borderRadius: 999,
        }}>● Captured</div>
      </div>
      <svg viewBox="0 0 400 220" style={{ width: "100%", height: "auto", display: "block" }}>
        <defs>
          <linearGradient id="glRoofA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2A3B5C" />
            <stop offset="100%" stopColor="#1D2D4A" />
          </linearGradient>
          <linearGradient id="glRoofB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#324566" />
            <stop offset="100%" stopColor="#253757" />
          </linearGradient>
        </defs>
        <polygon points="80,150 200,70 320,150 280,180 200,120 120,180" fill="url(#glRoofA)" stroke="rgba(95,177,255,0.6)" strokeWidth="1.2" />
        <polygon points="200,70 320,150 280,180 200,120" fill="url(#glRoofB)" stroke="rgba(95,177,255,0.6)" strokeWidth="1.2" />
        <line x1="80" y1="150" x2="200" y2="70" stroke="#5FB1FF" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="200" y1="70" x2="320" y2="150" stroke="#7ED9A7" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="80" y1="150" x2="120" y2="180" stroke="#F27D9C" strokeWidth="1.5" strokeDasharray="3 3" />
        <g fontFamily="'JetBrains Mono', monospace" fontSize="9">
          <rect x="110" y="96" width="56" height="18" rx="4" fill="#0B1322" stroke="#5FB1FF" strokeOpacity="0.4" />
          <text x="138" y="108" fill="#5FB1FF" textAnchor="middle">42.3 ft</text>
          <rect x="242" y="96" width="56" height="18" rx="4" fill="#0B1322" stroke="#7ED9A7" strokeOpacity="0.4" />
          <text x="270" y="108" fill="#7ED9A7" textAnchor="middle">44.8 ft</text>
          <rect x="78" y="166" width="48" height="16" rx="4" fill="#0B1322" stroke="#F27D9C" strokeOpacity="0.4" />
          <text x="102" y="177" fill="#F27D9C" textAnchor="middle">12.1 ft</text>
        </g>
        <g>
          <rect x="155" y="135" width="90" height="28" rx="6" fill="rgba(11,19,34,0.85)" stroke="rgba(255,255,255,0.1)" />
          <text x="200" y="148" fontFamily="'Inter', sans-serif" fontSize="8" fill="#A9B4C8" textAnchor="middle" letterSpacing="1.5">TOTAL AREA</text>
          <text x="200" y="159" fontWeight="700" fontSize="11" fill="#fff" textAnchor="middle">2,240 sq ft</text>
        </g>
      </svg>
      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        {[["Pitches", "3"], ["Eaves", "112 ft"], ["Ridges", "48 ft"], ["Valleys", "2"]].map(([k, v], i) => (
          <div key={i} style={{
            flex: 1,
            padding: "8px 10px",
            borderRadius: 8,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 9, color: "#6E7B96", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>{k}</div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginTop: 3 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   THE PROBLEM
-------------------------------------------------------------------*/

function ProblemSection() {
  return (
    <Section id="problem">
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 64 }}>
          <SectionTitle
            kicker="The Problem"
            title="A hard pivot with a harder deadline"
            lead="In early 2025, external factors forced GoodLeap to make a sudden strategic pivot from clean energy financing into roofing and HVAC. I had already invested 4 months into my original project, a proposal tool for solar installers, when the shift happened. This pivot forced me to start the project from scratch while retaining the same deadline."
            follow="As the sole designer, I owned everything: research, information architecture, design system, high-fidelity mockups, prototypes, and developer handoff."
          />


          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { title: "Limited time",    body: "Six months to complete all design work. No room for delays or rework.", c: "#F27D9C" },
              { title: "Research gaps",   body: "No time for new research. Every assumption needed to be explicit and testible", c: "#F2B155" },
              { title: "Fluid scope",     body: "Requirements shifted weekly as leadership learned the roofing industry alongside us.", c: "#B299FF" },
              { title: "No design system", body: "The hard pivot came with a company-wide rebrand with no centralized design system.", c: "#5FB1FF" },
            ].map(c => (
              <div key={c.title} style={{
                padding: 24,
                borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: `${c.c}22`,
                  border: `1px solid ${c.c}55`,
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 16,
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: c.c }} />
                </div>
                <h5>{c.title}</h5>
                <p style={{ fontSize: 16, marginTop: 8, lineHeight: 1.55 }}>{c.body}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, padding: "40px 0 0" }}>
            <div>
              <Eyebrow>Business Goals</Eyebrow>
              <ul style={{ marginTop: 16, padding: 0, listStyle: "none" }}>
                {[
                  "Enter a mature, competitive SaaS category as a credible player",
                  "Open a new revenue stream from existing contractor relationships",
                  "Launch at parity with competitors, then differentiate on financing + AI",
                  "Post-launch NPS score above 30 within the first quarter of release",
                ].map((g, i) => (
                  <li key={i} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15,
                    color: "#EEF2F9",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: "var(--fc-primary)", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, marginTop: 4 }}>0{i + 1}</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>My Responsibilities</Eyebrow>
              <ul style={{ marginTop: 16, padding: 0, listStyle: "none" }}>
                {[
                  "End-to-end product design for seven core workflows",
                  "Design system creation, governance, and handoff",
                  "Stakeholder alignment and live scope negotiation",
                  "Developer collaboration, implementation support, and QA",
                ].map((g, i) => (
                  <li key={i} style={{
                    fontSize: 15,
                    color: "#EEF2F9",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: "#B299FF", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, marginTop: 4 }}>0{i + 1}</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------
   APPROACH
-------------------------------------------------------------------*/

function ApproachSection() {
  const pillars = [
    { n: "01", title: "Assumption-driven research", body: "Treated generative AI output as hypothesis, not truth. Every Lean UX artifact shipped with a test plan attached.", c: "#5FB1FF" },
    { n: "02", title: "Parallel design tracks", body: "Wireframes, hi-fi, and DS work moved in parallel across features.", c: "#7ED9A7" },
    { n: "03", title: "Template-first handoff", body: "Built a reusable Figma template system, with the same patterns, specs, and components across every flow.", c: "#B299FF" },
    { n: "04", title: "Negotiated quality", body: "Made scope tradeoffs visible and tangible to leadership and drew hard lines to maintain momentum", c: "#F27D9C" },
  ];

  return (
    <Section id="approach" bg="#262B36">
      <Container>
        <SectionTitle
          kicker="My Approach"
          title="A framework to balance speed and quality under pressure"
          lead="I needed to work fast, but couldn't afford to be sloppy. I built a four-pillar operating model inspired by lean UX and agile methodologies to find a point of convergence between quality and speed."
        />
        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {pillars.map(p => (
            <div key={p.n} style={{
              padding: 28,
              borderRadius: 20,
              background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 120,
                height: 120,
                borderRadius: 999,
                background: `radial-gradient(circle, ${p.c}22 0%, transparent 70%)`,
              }} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: p.c, fontWeight: 500, letterSpacing: "0.08em", marginBottom: 20 }}>{p.n}</div>
              <h4>{p.title}</h4>
              <p style={{ fontSize: 14, color: "#A9B4C8", marginTop: 12, lineHeight: 1.55 }}>{p.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 96 }}>
          <Eyebrow>Process Timeline · 6 months</Eyebrow>
          <Timeline />
        </div>
      </Container>
    </Section>
  );
}

function Timeline() {
  const phases = [
    { w: "W 1–3",   label: "Discovery & North Star",                  pct: 12, offset: 0,  c: "#5FB1FF" },
    { w: "W 2–9",   label: "Leads & Proposals",               pct: 32, offset: 0.5,  c: "#7ED9A7" },
    { w: "W 7–14",  label: "Loans & DeDe AI",  pct: 32, offset: 2.5,  c: "#B299FF" },
    { w: "W 12–19", label: "Invoices & Contracts",             pct: 32, offset: 4,  c: "#F27D9C" },
    { w: "W 17–24", label: "Pricebook & finalization",           pct: 33, offset: 5.5,  c: "#3BC0B9" },
  ];
  return (
    <div style={{
      marginTop: 24,
      padding: 32,
      borderRadius: 20,
      background: "rgba(11,19,34,0.5)",
      border: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: "#6E7B96",
        marginBottom: 20,
      }}>
        <span>Kickoff</span><span>Month 2</span><span>Month 4</span><span>Launch</span>
      </div>
      {phases.map((p, i) => (
        <div key={i} style={{
          display: "grid",
          gridTemplateColumns: "130px 1fr 180px",
          alignItems: "center",
          gap: 16,
          padding: "10px 0",
        }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: p.c, fontWeight: 500 }}>{p.w}</div>
          <div style={{ height: 10, borderRadius: 999, background: "rgba(255,255,255,0.04)", position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute",
              left: `${p.offset * 12}%`,
              width: `${p.pct}%`,
              top: 0,
              bottom: 0,
              borderRadius: 999,
              background: `linear-gradient(90deg, ${p.c}33, ${p.c})`,
              boxShadow: `0 0 16px ${p.c}55`,
            }} />
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#EEF2F9", fontWeight: 500 }}>{p.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------
   RESEARCH
-------------------------------------------------------------------*/

function ResearchSection() {
  return (
    <Section id="research">
      <Container>
        <SectionTitle
          kicker="Research"
          title="Turning AI-generated assumptions into testable hypotheses"
          lead="With no time for upfront field research, I inverted the usual order. I used generative AI to build a first-pass research artifact set, then treated every output as an assumption that had to be confirmed or refuted against real data, on a rolling basis."
        />

        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          <div>
            <Eyebrow color="#5FB1FF">What I did</Eyebrow>
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Generative persona pass", "Used AI to generate proto-personas, journey maps, and pain-point clusters from public roofer-industry data."],
                ["Competitor sweep", "Catalogued 11 competitors across 40+ features. Mapped feature gaps, not feature parity."],
                ["Cross-reference pass", "Compared AI phrasing against solar interview transcripts to surface overlapping language and likely truths."],
                ["Live validation plan", "Assisted 2-week interview cycles during build. Every hypothesis got a confirmation or rejection by MVP."],
              ].map(([t, b], i) => (
                <div key={i} style={{
                  padding: "18px 20px",
                  borderRadius: 12,
                  background: "rgba(95,177,255,0.04)",
                  border: "1px solid rgba(95,177,255,0.12)",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}>
                  <div style={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: 999,
                    background: "rgba(95,177,255,0.15)",
                    border: "1px solid rgba(95,177,255,0.3)",
                    color: "#5FB1FF",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    display: "grid",
                    placeItems: "center",
                  }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>{t}</div>
                    <div style={{ fontSize: 13, color: "#A9B4C8", marginTop: 4, lineHeight: 1.5 }}>{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow color="#B299FF">What I learned</Eyebrow>
            <div style={{ marginTop: 20 }}>
              {[
                { tag: "Insight #1",       c: "#7ED9A7", text: "Roofing sales reps live in their truck, meaning mobile and tablet use accounted for 70% of proposal creation.", struck: false },
                { tag: "Insight #2",       c: "#F27D9C", text: "Contractors fear loan rejection in front of the homeowner. Our financing flow had to show results fast to minimize ambiguity.", struck: false },
                { tag: "Insight #3",       c: "#B299FF", text: "Measurement accuracy is the top admin burden. Roofers re-measure because they don't trust their tools or existing software.", struck: false },
                { tag: "Assumption killed", c: "#F2B155", text: "I assumed users wanted a single universal template. Interviews said the opposite. Every franchise wanted their own branded flow.", struck: false },
              ].map(({ tag, c, text, struck }) => (
                <div key={tag} style={{
                  padding: "20px 22px",
                  borderRadius: 12,
                  marginBottom: 12,
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${c}33`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: 999, background: c }} />
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: c, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>{tag}</div>
                  </div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "#EEF2F9",
                    margin: 0,
                    textDecoration: struck ? "line-through" : "none",
                    opacity: struck ? 0.75 : 1,
                  }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------
   NORTH STAR
-------------------------------------------------------------------*/

function wireframePlaceholder(label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" preserveAspectRatio="xMidYMid meet">
    <rect width="1200" height="750" fill="#0E1726"/>
    <rect x="60" y="60" width="1080" height="42" fill="#1A2438" rx="6"/>
    <circle cx="88" cy="81" r="6" fill="#2A3B5C"/>
    <circle cx="110" cy="81" r="6" fill="#2A3B5C"/>
    <circle cx="132" cy="81" r="6" fill="#2A3B5C"/>
    <rect x="60" y="120" width="220" height="570" fill="#152035" rx="6"/>
    <rect x="84" y="148" width="172" height="14" fill="#2A3B5C" rx="3"/>
    <rect x="84" y="180" width="120" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="84" y="206" width="172" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="84" y="232" width="140" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="84" y="258" width="172" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="300" y="120" width="840" height="80" fill="#152035" rx="6"/>
    <rect x="324" y="146" width="280" height="18" fill="#2A3B5C" rx="3"/>
    <rect x="324" y="172" width="200" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="300" y="220" width="404" height="220" fill="#152035" rx="6"/>
    <rect x="324" y="244" width="180" height="14" fill="#2A3B5C" rx="3"/>
    <rect x="324" y="278" width="356" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="324" y="298" width="320" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="324" y="318" width="340" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="724" y="220" width="416" height="220" fill="#152035" rx="6"/>
    <rect x="748" y="244" width="180" height="14" fill="#2A3B5C" rx="3"/>
    <rect x="748" y="278" width="368" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="748" y="298" width="320" height="10" fill="#1F2E4A" rx="2"/>
    <rect x="300" y="460" width="840" height="230" fill="#152035" rx="6"/>
    <rect x="324" y="484" width="220" height="14" fill="#2A3B5C" rx="3"/>
    <text x="600" y="380" font-family="Inter, sans-serif" font-size="44" fill="#3BC0B9" text-anchor="middle" font-weight="700" opacity="0.9">${label}</text>
    <text x="600" y="420" font-family="Inter, sans-serif" font-size="13" fill="#6E7B96" text-anchor="middle" letter-spacing="0.2em">WIREFRAME · PLACEHOLDER</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const WIREFRAMES = [
  { name: "DeDe AI",   description: "Conversational and agentic patterns for in-product AI.",        image: "/img/case-studies/dedeai-wireframe.png" },
  { name: "Leads",     description: "Address-first pipeline and lead detail layout.",                image: "/img/case-studies/leads-wireframes.png" },
  { name: "Proposals", description: "Auto-generated proposal flow with embedded financing.",         image: "/img/case-studies/proposals-wireframes.png" },
  { name: "Pricebook", description: "Catalog management with measurement-linked items.",             image: "/img/case-studies/pricebook-wireframes.png" },
  { name: "Loans",     description: "Real-time qualification and counter-offer handling.",           image: "/img/case-studies/loans-wireframes.png" },
  { name: "Contracts", description: "Template-driven contracts that flow from proposal acceptance.", image: "/img/case-studies/contracts-wireframes.png" },
  { name: "Invoices",  description: "Lightweight invoicing with status visible across the pipeline.", image: "/img/case-studies/invoices-wireframes.png" },
];

function Carousel({ slides, index, onChange, onSlideClick }) {
  const current = slides[index];
  const prev = () => onChange((index - 1 + slides.length) % slides.length);
  const next = () => onChange((index + 1) % slides.length);

  const arrowBtn = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 44,
    height: 44,
    borderRadius: 999,
    background: "rgba(11,19,34,0.65)",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    color: "#fff",
    fontSize: 24,
    lineHeight: 1,
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    zIndex: 2,
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <div>
      <div style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        background: "#1a1d27",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
        aspectRatio: "16 / 10",
      }}>
        <img
          key={index}
          src={current.src}
          alt={current.name}
          onClick={() => onSlideClick && onSlideClick(index)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            cursor: "zoom-in",
            display: "block",
            animation: "fcFade 360ms ease",
          }}
        />
        <button onClick={prev} aria-label="Previous wireframe" style={{ ...arrowBtn, left: 16 }}>‹</button>
        <button onClick={next} aria-label="Next wireframe" style={{ ...arrowBtn, right: 16 }}>›</button>
      </div>

      <div key={`caption-${index}`} style={{
        marginTop: 28,
        textAlign: "center",
        maxWidth: 640,
        marginLeft: "auto",
        marginRight: "auto",
        animation: "fcFade 360ms ease",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: "#3BC0B9",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}>
          {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
        <div style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.01em",
        }}>{current.name}</div>
        <div style={{
          fontSize: 15,
          color: "#A9B4C8",
          marginTop: 10,
          lineHeight: 1.6,
        }}>{current.description}</div>
      </div>

      <div style={{
        marginTop: 24,
        display: "flex",
        gap: 8,
        justifyContent: "center",
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            style={{
              width: i === index ? 28 : 8,
              height: 8,
              borderRadius: 999,
              background: i === index ? "#3BC0B9" : "rgba(255,255,255,0.15)",
              border: "none",
              cursor: "pointer",
              transition: "all 220ms cubic-bezier(0.22, 1, 0.36, 1)",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function NorthStarSection() {
  const [slide, setSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const slides = WIREFRAMES.map(w => ({
    ...w,
    src: w.image || wireframePlaceholder(w.name),
  }));

  return (
    <Section id="north-star" style={{background:"#262B36"}}>
      <Container>
        <SectionTitle
          kicker="North Star"
          title="Setting the long-term vision with early iterations"
          lead="Before pixel-perfect work began, I built a North Star file consisting of low-fidelity wireframes covering every key feature. It let me align stakeholders on shape and intent without burning time on visual debates, and it became the reference the team returned to throughout the project."
        />

        <div style={{ marginTop: 56 }}>
          <Carousel
            slides={slides}
            index={slide}
            onChange={setSlide}
            onSlideClick={i => setLightboxIndex(i)}
          />
        </div>
      </Container>

      <Lightbox
        images={slides.map(s => ({ src: s.src, caption: `${s.name} · Wireframes` }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </Section>
  );
}

/* ------------------------------------------------------------------
   DESIGN SYSTEM
-------------------------------------------------------------------*/

function DesignSystemSection() {
  return (
    <Section>
      <Container>
        <SectionTitle
          kicker="Design System"
          title="Merlin - a system built in two weeks"
          lead="GoodLeap had new branding, and expected a new system with GoodLeap Pros. I needed to move fast, so I took my own pre-built Figma template, Axil, and pulled GoodLeap brand tokens directly from their website. I refined the tokens for accessibility and updated my templated components to match. The system later became the seed for the company-wide DS."
        />

        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {/* Palette */}
          <div style={{ padding: 24, borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <Eyebrow>Palette</Eyebrow>
            <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
              {[
                ["#fff", "Text"], ["#9791f8", "Actions"],
                ["#2DCED4", "Accent 1"],     ["#ED90FF", "Accent 2"],
                ["#2DD45F", "Success"],  ["#518AF5", "Info"],
                ["#FF646B", "Error"],    ["#F4BF5C", "Warning"],
              ].map(([c, l]) => (
                <div key={c}>
                  <div style={{ fontFamily:"Inter, roboto", height: 48, borderRadius: 8, background: c, border: "1px solid rgba(255,255,255,0.06)" }} />
                  <div style={{ fontFamily: "'Inter, roboto", fontSize: 10, color: "#A9B4C8", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Type */}
          <div style={{ padding: 24, borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <Eyebrow>Type</Eyebrow>
            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 40, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>Display / Inter</div>
              <div style={{ fontSize: 15, color: "#A9B4C8", marginTop: 4 }}>700 / Bold</div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.06)", margin: "18px 0" }} />
              <div style={{ fontSize: 16, color: "#EEF2F9", lineHeight: 1.6 }}>Body / Inter — optimized for Usability and dense data.</div>
            </div>
          </div>

          {/* Components */}
          <div style={{ padding: 24, borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(238,237,254,0.1)" }}>
            <Eyebrow>Components</Eyebrow>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <button style={{ padding: "12px 18px", borderRadius: 8, border: "1px solid #ffffff", background: "rgba(255,255,255,0.14)", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer" }}>Primary</button>
                <button style={{ padding: "12px 18px", borderRadius: 8, border: "1px solid #ffffff", background: "transparent", color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer" }}>Secondary</button>
                <button style={{ padding: "12px 8px", borderRadius: 8, border: "none", background: "transparent", color: "#aba7ff", fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 500, cursor: "pointer" }}>Link</button>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {[["Draft", "#aba7ff"], ["Sent", "#2DCED4"], ["Signed", "#ED90FF"], ["Paid", "#2DD45F"]].map(([l, c]) => (
                  <span key={l} style={{
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: `${c}22`,
                    border: `1px solid ${c}100`,
                    color: c,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                  }}>{l}</span>
                ))}
              </div>
              <input
                value="Item name"
                readOnly
                style={{
                  padding: "12px 12px",
                  borderRadius: 8,
                  border: "1px solid #A7A7B9",
                  background: "rgba(255,255,255,0.03)",
                  color: "#E6E3EB",
                  fontFamily: "'inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  outline: "none",
                }}
              />
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 48,
          padding: 28,
          borderRadius: 16,
          background: "linear-gradient(90deg, rgba(59,192,185,0.08), rgba(139,107,240,0.08))",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 28,
        }}>
          {[
            ["50",    "Components shipped"],
            ["22",    "Documented patterns"],
            ["2 weeks", "Foundation to first handoff"],
            ["1",     "System, reused across the org"],
          ].map(([v, l], i) => (
            <div key={i}>
              <div style={{ fontSize: 40, fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1 }}>{v}</div>
              <div style={{ fontSize: 13, color: "#A9B4C8", marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------
   KEY FEATURES — interactive tabs
-------------------------------------------------------------------*/

const FEATURES = [
  
 {
    id: "dede",
    name: "DeDe AI",
    tag: "Assistant",
    headline: "A personal assistant for all roofing needs.",
    body: "I led discovery and initial concepts for DeDe, our in-product AI. In a market oversaturated with chatbots, DeDe needed to stand out as a true AI assistant. I designed DeDe with a combination of agentic AI and reliable automation, creating an agent that can reliably help with all roofing needs.",
    bullets: [
      "Fast proposal generaiton with minimal instruction",
      "Agentic performance statistics and visuals",
      "Smart automation built across workflows with simple English",
      "Voice memos with real-time transcription and integrated actions",
    ],
    accent: "#3BC0B9",
    image: "/img/case-studies/dede-ai-overview.png",
  },

  {
    id: "Leads",
    name: "Leads",
    tag: "Pipeline",
    headline: "One dashboard for all workflows management",
    body: "Leads are the foundation for each project. They contain all information for a single site including measurements, contacts, proposals, contracts, and invoices. To create a lead, a user simply has to enter an address. Dede AI handles the rest. ",
    bullets: [
      "Address-to-lead auto-generation utilizing Google Maps API",
      "Roofing measurements automatically pulled via in-house GPS and visualization tool",
      "Single source of truth for all projects related to a site",
      "Easy view of proposal statuses and assignees",
    ],
    accent: "#B299FF",
    image: "/img/case-studies/leads-overview.png",
  },


  {
    id: "proposals",
    name: "Proposals",
    tag: "Estimates + financing",
    headline: "Instant proposal with auto-calculated quote",
    body: "At the touch of a button, a proposal is generated with snapshots of the site, pre-filled customer information, loan options, and an auto-calculated quote based on roof measurements.",
    bullets: [
      "One-click auto-generation with all relevent information",
      "Pricebook linked items with auto-calculated quotes based on measurements",
      "Estimate tool that recalculates live as materials change",
      "Automated loan linking for a seamless financing experience",
    ],
    accent: "#5FB1FF",
    image: "/img/case-studies/proposals-overview.png",
  },
  {
    id: "pricebook",
    name: "Pricebook",
    tag: "Admin + pricing",
    headline: "Dynamic pricebook made easy for everyone",
    body: "Pricebook is a dynamic catalog feature that allows users to easily create items, packages, and discounts. From measurements to varying hourly wages, Pricebook allows variable linking with specific measurements and custom rounding, allowing a truly automated experience in proposal creation. Covering all possible variants for this feature was both challenging and rewarding",
    bullets: [
      "Dynamic measurement linkage across materials",
      "Granular org permissions: add, edit, archive, restore",
      "Discount engine and pre-built packages",
      "Bulk operations for franchise-level rollouts",
    ],
    accent: "#e3ce72",
    image: "/img/case-studies/pricebook-overview.png",
  },
  {
    id: "loans",
    name: "Loans",
    tag: "Financing",
    headline: "Financing options with instant qualifications",
    body: "Our existing loan experience was built primarily for solar and existed accross multiple applications. I designed Pros to combine all of these experiences into one seamless flow, optimized for roofing.",
    bullets: [
      "In-proposal attachment of up to 3 financing options",
      "Real-time approval, counter-offer, or rejection",
      "Homeowner + sales rep dashboards for officialization",
      "Change-order logic with mid-loan amendments",
    ],
    accent: "#7ed98a",
    image: "/img/case-studies/loans-overview.png",
  },

  {
    id: "contracts",
    name: "Contracts",
    tag: "Closing",
    headline: "Contract templates that never need editing.",
    body: "A lightweight contract tool that pairs with proposals. Users build templates once, automation handles per-customer variables, and when a homeowner accepts the proposal they flow straight into signing. No last-minute red-lining before sendoff.",
    bullets: [
      "Simple template system with custom fields",
      "Proposal and contract bundled into one simple flow",
      "E-sign with audit trail",
      "Easy change orders and amendments",
    ],
    accent: "#F27D9C",
    image: "/img/case-studies/contracts-overview.png",
  },
  {
    id: "invoices",
    name: "Invoices",
    tag: "Payments",
    headline: "Payments that close the loop, quietly.",
    body: "A deliberately simple invoicing and payment feature. Rather than compete with QuickBooks, I focused on in-product visibility, accessibility, and ease of use.",
    bullets: [
      "One-click invoice from proposal and leads page",
      "Payment status surfaced in pipeline",
      "Automated reminder emails and updates",
      "In-person payments adopted from other company software",
    ],
    accent: "#F2B155",
    image: "/img/case-studies/invoices-overview.png",
  },
];

function FeaturesSection() {
  const [active, setActive] = useState(FEATURES[0].id);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const f = FEATURES.find(x => x.id === active);
  const activeIdx = FEATURES.findIndex(x => x.id === active);

  return (
    <Section id="features"  style={{background:"#262B36"}}>
      <Container>
        <SectionTitle
          kicker="Key Features"
          title="Seven key features, built fast to last"
          lead="I rapidly built each of these features while moving quickly and constantly negotiating scope with leadership and engineering."
          follow="Each feature represents a phase in the roofing journey and is built to optimize the user experience within the context of that phase."
        />

        <div className="gl-features-tabs" style={{
          marginTop: 56,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          padding: 6,
          borderRadius: 999,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          width: "fit-content",
          maxWidth: "100%",
        }}>
          {FEATURES.map(feat => (
            <button
              key={feat.id}
              className="gl-tab-btn"
              onClick={() => setActive(feat.id)}
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                background: active === feat.id ? feat.accent : "transparent",
                color: active === feat.id ? "#06201F" : "#EEF2F9",
                transition: "all 220ms cubic-bezier(0.22, 1, 0.36, 1)",
                whiteSpace: "nowrap",
              }}>
              {feat.name}
            </button>
          ))}
        </div>

        <div className="gl-feature-row" style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)",
          gap: 40,
          alignItems: "stretch",
          animation: "fcFade 400ms cubic-bezier(0.22,1,0.36,1)",
        }}>
          {/* Left: copy */}
          <div className="gl-feature-copy" style={{
            padding: 36,
            borderRadius: 20,
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${f.accent}33`,
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              alignSelf: "flex-start",
              padding: "5px 12px",
              borderRadius: 999,
              background: `${f.accent}22`,
              border: `1px solid ${f.accent}44`,
              color: f.accent,
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: f.accent }} />
              {f.tag}
            </div>
            <h3 style={{marginTop:"20px"}}>{f.headline}</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.6, color: "#A9B4C8", marginTop: 16 }}>{f.body}</p>
            <ul style={{ padding: 0, margin: "24px 0 0", listStyle: "none" }}>
              {f.bullets.map((b, i) => (
                <li key={i} style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "10px 0",
                  borderBottom: i < f.bullets.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#EEF2F9",
                  lineHeight: 1.5,
                }}>
                  <span style={{ color: f.accent, marginTop: 6, fontSize: 10 }}>●</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: dynamic feature visual */}
          <div
            onClick={() => setLightboxIndex(activeIdx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightboxIndex(activeIdx);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`View ${f.name} at full resolution`}
            className="gl-feature-visual"
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
              minHeight: 480,
              position: "relative",
              cursor: "zoom-in",
            }}>
            <FeatureVisual id={f.id} accent={f.accent} />
          </div>
        </div>
      </Container>

      <Lightbox
        images={FEATURES.map(x => ({ src: x.image, caption: x.name }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </Section>
  );
}

/* ------------------------------------------------------------------
   LIGHTBOX
-------------------------------------------------------------------*/

function Lightbox({ images, index, onClose, onIndexChange }) {
  const isOpen = index !== null && index >= 0;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
      else if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, index, images.length, onClose, onIndexChange]);

  if (!isOpen) return null;
  const current = images[index];
  const prev = () => onIndexChange((index - 1 + images.length) % images.length);
  const next = () => onIndexChange((index + 1) % images.length);

  const iconBtn = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "#fff",
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    transition: "background 150ms ease",
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.caption}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(6, 10, 20, 0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(60px, 7vw, 100px) clamp(60px, 8vw, 120px)",
        animation: "fcFade 220ms ease",
      }}>
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        style={{
          ...iconBtn,
          position: "absolute",
          top: 20,
          right: 20,
          width: 44,
          height: 44,
          borderRadius: 999,
          fontSize: 24,
          lineHeight: 1,
        }}>×</button>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
        style={{
          ...iconBtn,
          position: "absolute",
          left: "clamp(12px, 2vw, 32px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: 48,
          height: 48,
          borderRadius: 999,
          fontSize: 26,
          lineHeight: 1,
        }}>‹</button>

      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
        style={{
          ...iconBtn,
          position: "absolute",
          right: "clamp(12px, 2vw, 32px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: 48,
          height: 48,
          borderRadius: 999,
          fontSize: 26,
          lineHeight: 1,
        }}>›</button>

      <img
        src={current.src}
        alt={current.caption}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "78vh",
          objectFit: "contain",
          borderRadius: 10,
          boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
          display: "block",
        }}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          marginTop: 22,
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          color: "#EEF2F9",
          letterSpacing: "0.02em",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}>
        <span style={{ fontWeight: 600 }}>{current.caption}</span>
        <span style={{
          color: "#A9B4C8",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
        }}>{index + 1} / {images.length}</span>
      </div>
    </div>
  );
}

function FeatureVisual({ id, accent }) {
  if (id === "Leads") return <LeadsVisual accent={accent} />;
  if (id === "proposals") return <ProposalVisual accent={accent} />;
  if (id === "pricebook") return <PricebookVisual accent={accent} />;
  if (id === "loans")     return <LoansVisual accent={accent} />;
  if (id === "dede")      return <DedeVisual accent={accent} />;
  if (id === "contracts") return <ContractsVisual accent={accent} />;
  if (id === "invoices")  return <InvoicesVisual accent={accent} />;
  return null;
}

function VisualHeader({ title, right, accent }) {
  return (
    <div style={{
      padding: "16px 20px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(11,19,34,0.5)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 8, height: 8, borderRadius: 2, background: accent }} />
        <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>{title}</div>
      </div>
      {right}
    </div>
  );
}

function ProposalVisual() {
  return (
    <div>
     <img src="/img/case-studies/proposals-overview.png" />
    </div>
  );
}

function LeadsVisual() {

  return (
    <div>
       <img src="/img/case-studies/leads-overview.png" />
    </div>
  );
}

function PricebookVisual() {
  
  return (
    <div>
      <img src="/img/case-studies/pricebook-overview.png" />
    </div>
  );
}

function LoansVisual() {
  return (
    <div>
      <img src="/img/case-studies/loans-overview.png" />
    </div>
  );
}

function DedeVisual() {
  return (
    <div>
      <img src="/img/case-studies/dede-ai-overview.png" />
    </div>
  );
}

function ContractsVisual() {
  return (
    <div>
      <img src="/img/case-studies/contracts-overview.png" />
    </div>
  );
}

function InvoicesVisual({ accent }) {

  return (
    <div>
      <img src="/img/case-studies/invoices-overview.png" />
    </div>
  );
}

/* ------------------------------------------------------------------
   STAKEHOLDER TENSIONS
-------------------------------------------------------------------*/

function TensionsSection() {
  return (
    <Section>
      <Container>
        <SectionTitle
          kicker="Managing tension"
          title="Two leaders, two priorities, and how I navigated both"
          lead="My project manager needed me to move as fast as possible and my design manager needed me to slow down and iterate on existing patterns. Both were important and lead to frequent tension between the two. I needed to find a sustainable middle-ground"
        />
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            {
              side: "Project Manager", want: "Speed", color: "#F2B155",
              points: ["Ship the MVP before Q1 at any cost", "Parity with competitors, polish later", "Quick review cycles",],
              emphasized: false,
            },
            {
              side: "Head of Design", want: "Quality", color: "#B299FF",
              points: ["Raise the DS bar for the whole company", "Iterate and improve existing features", "Innovation that surpasses competitors"],
              emphasized: false,
            },
            {
              side: "My response", want: "Compromise", color: "#3BC0B9",
              points: ["Staggered design cycles to create more time for review", "Template system to reduce repetition", "Set hard limits for new scope", "Use a parking lot system to make sure innovative ideas weren't lost"],
              emphasized: true,
            },
          ].map(({ side, want, color, points, emphasized }) => (
            <div key={side} style={{
              padding: 28,
              borderRadius: 20,
              background: emphasized ? `linear-gradient(180deg, ${color}15, transparent)` : "rgba(255,255,255,0.03)",
              border: `1px solid ${emphasized ? color + "66" : "rgba(255,255,255,0.06)"}`,
            }}>
              <Eyebrow color={color}>{side}</Eyebrow>
              <div style={{ fontWeight: 800, fontSize: 30, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1, marginTop: 12 }}>{want}</div>
              <ul style={{ padding: 0, margin: "20px 0 0", listStyle: "none" }}>
                {points.map((p, i) => (
                  <li key={i} style={{
                    display: "flex", gap: 10, alignItems: "flex-start",
                    padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.05)",
                    fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#EEF2F9", lineHeight: 1.5,
                  }}>
                    <span style={{ color, fontSize: 8, marginTop: 8 }}>●</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------
   DATA STAGE
-------------------------------------------------------------------*/

function MiniChart() {
  const pts = [20, 35, 28, 45, 52, 48, 62, 58, 70, 68, 82, 78];
  const max = 100, w = 320, h = 120;
  const step = w / (pts.length - 1);
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${i * step},${h - (p / max) * h}`).join(" ");
  const area = path + ` L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <linearGradient id="glMiniArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3BC0B9" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3BC0B9" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 30, 60, 90].map(y => (
        <line key={y} x1="0" y1={h - (y / max) * h} x2={w} y2={h - (y / max) * h} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      <path d={area} fill="url(#glMiniArea)" />
      <path d={path} fill="none" stroke="#3BC0B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={i * step} cy={h - (p / max) * h} r="2.5" fill="#3BC0B9" />
      ))}
    </svg>
  );
}

function DataStageSection() {
  return (
    <Section  style={{background:"#262B36"}}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <Eyebrow>Setting the stage for optimization</Eyebrow>
            <h2>
              Launching without metrics was a risk I refused to take
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: 1.65, color: "#A9B4C8" }}>
              Before a single screen shipped, I advocated for analytics instrumentation and scoped a systematic customer feedback program. The goal: walk into the first post-launch review with evidence, not anecdotes.
            </p>
            <ul style={{ padding: 0, margin: "28px 0 0", listStyle: "none" }}>
              {[
                "Early Fullstory integration and adoption",
                "In-app feedback mechanism planned for day-one launch",
                "AI query logging for future DeDe model iteration",
                "Plans for monthly contextual inquiries post-launch",
              ].map((t, i) => (
                <li key={i} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)",
                  fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#EEF2F9",
                }}>
                  <span style={{ color: "var(--fc-primary)", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, marginTop: 3 }}>→</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: 24, borderRadius: 20, background: "#212328", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>Post-launch dashboard</div>
                <div style={{ fontSize: 11, color: "#6E7B96", marginTop: 2 }}>Scoped during design · shipped day one</div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--fc-primary)" }}>● Live scope</div>
            </div>
            <MiniChart />
            <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {[["Funnel", "Address → Sent"], ["Drop-off", "Per-step"], ["AI usage", "Per surface"]].map(([l, s], i) => (
                <div key={i} style={{ padding: 12, borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: 10, color: "#6E7B96", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{l}</div>
                  <div style={{ fontSize: 12, color: "#EEF2F9", marginTop: 4 }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


/* ------------------------------------------------------------------
   IMPACT
-------------------------------------------------------------------*/

function ImpactSection() {
  return (
    <Section id="impact">
      <Container>
        <SectionTitle
          kicker="Impact"
          title="Pre-launch results"
          lead="At the time of publishing, this applicaiton hadn't gone live yet, so I don't have post-launch conversion metrics inluded. What I can speak to are the organizational and delivery outcomes that set launch up for success."
        />

        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            { v: "Q1",  l: "Design work completed ahead of a deadline team lead called \"almost impossible\"", c: "#3BC0B9" },
            { v: "7",   l: "Core features designed, spec'd, and handed off solo", c: "#5FB1FF" },
            { v: "50",  l: "Reusable components that became the backbone for the company DS", c: "#B299FF" },
            { v: "1st", l: "Project to define DeDe AI - a core feature to GoodLeap as a whole", c: "#F27D9C" },
          ].map((s, i) => (
            <div key={i} style={{
              padding: 28,
              borderRadius: 20,
              background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              border: `1px solid ${s.c}30`,
              borderLeft: `3px solid ${s.c}`,
            }}>
              <div style={{ fontWeight: 800, fontSize: 56, color: s.c, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontSize: 14, color: "#EEF2F9", marginTop: 16, lineHeight: 1.5 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, padding: 36, borderRadius: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <Eyebrow>Qualitative Impact</Eyebrow>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 26 }}>
            {[
              ["Executive visibility",    "GoodLeap Pros became the flagship example of our department's ability to execute under pressure."],
              ["Team efficiency",         "The Figma template system cut handoff-revision cycles in half on later features."],
              ["Design system foundation","My design system was adopted (with adjustments) by three additional product teams."],
              ["DeDe precedent",          "Set the vision and use patterns for every AI feature that came after."],
              ["Vision alignment",         "Defined the long-term vision of roofing technology at GoodLeap"],
              ["Innovation Definer",         "My designwork was the face of GoodLeap's 2026 Innovation Summit"],
            ].map(([t, b], i) => (
              <div key={i}>
                <h5 style={{marginBottom: "12px"}}>{t}</h5>
                <p>{b}</p>
              </div>
            ))}
          </div>
          
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------
   REFLECTIONS
-------------------------------------------------------------------*/

function ReflectionsSection() {
  const items = [
    {
      t: "What worked",
      c: "#7ED9A7",
      pts: [
        "Parallel design tracks paid off in hitting my deadline.",
        "Shared the DS early and made developers partners, not recipientsl",
        "Early user testing overwhelmingly positive and surfaced no major issues.",
      ],
    },
    {
      t: "What I'd change",
      c: "#F2B155",
      pts: [
        "Earlier implimentation of AI in my design process.",
        "Negotiate explicit \"flagship vs. MVP\" bar with leadership sooner.",
        "Harder advocacy for more staff to cover the major scope increase.",
      ],
    },
    {
      t: "What's next",
      c: "#B299FF",
      pts: [
        "Data-based iteration using post-laumch analytics and user feedback.",
        "Run contextual inquiries to close the remaining research gaps.",
        "Revisit parking lot features and prioritize based on user needs and impact.",
      ],
    },
  ];

  return (
    <Section style={{background: "#262B36"}}>
      <Container>
        <SectionTitle
          kicker="Reflections"
          title="What went well and what I'd change"
          lead="This project was a crash course in execution under pressure, and I'm proud of how I navigated the competing priorities, ambiguity, and sheer scope of it all. That said, there are definitely things I would have done differently in hindsight."
          follow="While I met my deadline for design work, the software ultimately did not launch on time. We simply had too small of a team and not enough time. If I could do it again, I'd push harder for more research and iteration time. I'd also impliment AI into my process sooner to cut down on wireframing and prototyping time."
        />
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {items.map(it => (
            <div key={it.t} style={{ padding: 28, borderRadius: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Eyebrow color={it.c}>{it.t}</Eyebrow>
              <ul style={{ padding: 0, margin: "20px 0 0", listStyle: "none" }}>
                {it.pts.map((p, i) => (
                  <li key={i} style={{
                    display: "flex", gap: 12, alignItems: "flex-start",
                    padding: "14px 0", borderTop: "1px solid rgba(255,255,255,0.05)",
                    fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#EEF2F9", lineHeight: 1.55,
                  }}>
                    <span style={{ color: it.c, marginTop: 6, fontSize: 8 }}>●</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------
   CASE STUDY FOOTER
-------------------------------------------------------------------*/

function CaseStudyFooter() {
  return (
    <footer style={{ padding: "80px 0 40px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <Container>
        <div style={{ fontWeight: 800, fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.025em", color: "#fff", lineHeight: 1.1 }}>
          Thanks for scrolling
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#A9B4C8", marginTop: 16, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          Want to talk about the tradeoffs, AI scoping, or the day the pivot dropped? I'd love to walk you through it.
        </p>
        <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://www.linkedin.com/in/fenneccreative/" style={{
            padding: "12px 22px",
            borderRadius: 999,
            background: "var(--fc-primary)",
            color: "#06201F",
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            boxShadow: "0 8px 20px rgba(59,192,185,0.2)",
            textDecoration: "none",
          }}>Get in touch</a>
          <a href="/" style={{
            padding: "12px 22px",
            borderRadius: 999,
            background: "transparent",
            color: "#EEF2F9",
            border: "1px solid rgba(255,255,255,0.12)",
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
          }}>← Back home</a>
        </div>
        <div style={{ marginTop: 60, fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#6E7B96" }}>
          © 2026 · Chelsea Williams · Staff Product Designer
        </div>
      </Container>
    </footer>
  );
}

/* ------------------------------------------------------------------
   ROOT EXPORT
-------------------------------------------------------------------*/

const GoodLeapCaseStudy = () => {
  return (
    <DarkTheme mobileappstyle customstyle>
      <NavbarArch  />
      <style>{CSS_TOKENS}</style>
      <CaseStudyNav />
      <HeaderMain />
      <IntroMain />
      <ProblemSection />
      <ApproachSection />
      <ResearchSection />
      <NorthStarSection />
      <DesignSystemSection />
      <FeaturesSection />
      <TensionsSection />
      <DataStageSection />
      <ImpactSection />
      <ReflectionsSection />
      <CaseStudyFooter />
    </DarkTheme>
  );
};

export default withAuth(GoodLeapCaseStudy);
//export default GoodLeapCaseStudy;