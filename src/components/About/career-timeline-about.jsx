import React from "react";

const roles = [
  {
    title: "Staff UX Designer",
    company: "GoodLeap",
    period: "2025 — Present",
    location: "San Francisco, CA",
    bullets: [
      "Led 0 → 1 design of enterprise roofing software to optimize the output of GoodLeap’s network of 20,000 contractors",
      "Defined and drove product strategy in close partnership with Product and Engineering, delivering key features within 6 months",
      "Built foundational design system and token architecture, enabling scalable UI development and improving cross-team consistency",
      "Contributed to data-driven, agentic AI roofing assistant, helping define workflows and user experience",
      "Led cross-functional stakeholder alignment, facilitating working sessions to balance design quality, speed, and technical constraints",
    ],
    accent: true,
  },
  {
    title: "Lead Product Designer",
    company: "EverBright",
    period: "2023 — 2025",
    location: "San Francisco, CA",
    bullets: [
      "Led end-to-end redesign of cross-platform app, driving 500% increase in annual traffic and 100% growth in user engagement",
      "Reduced customer support volume by 30% through redesign of key workflows and improved information architecture",
      "Led user research and usability testing, increasing comprehension of complex data models from 26% to 100%",
      "Influenced product and executive stakeholders through strategic storytelling and presentations",
      "Mentored and guided 8 junior to mid-level designers, improving output quality and strengthening design culture",
      "Created scalable design system and contributed to company-wide brand evolution",
      "Designed cross-platform, data-dense interfaces optimized for web, mobile, and tablet experiences",
    ],
    accent: false,
  },
  {
    title: "Product Designer, UX",
    company: "Mayo Clinic",
    period: "2022-2023",
    location: "Remote",
    bullets: [
      "Helped ensure accessibility to our 900,000+ patients by creating accessibility-centered guides for WCAG 3.0 adherence ",
      "Led multi-surface experience design for online user portal, increasing NPS by 10 points",
      "Reduced user drop-off by 22% through cross-functional collaboration with Product, Engineering, and Data teams",
      "Contributed to enterprise design system, providing mentorship and improving consistency across teams",
      "Designed end-to-end user journeys, including wireframes, high-fidelity mockups, and production-ready prototypes",
    ],
    accent: false,
  },
  {
    title: "Senior UX Designer",
    company: "World Wide Technology",
    period: "2019 — 2022",
    location: "Denver, CO",
    bullets: [
      "Built and contributed to scalable design systems, improving consistency and accelerating development across teams",
      "Lead initiatives on inclusive design, web accessibility, and gamification",
      "Designed user flows, wireframes, high-fidelity mockups, and production-ready prototypes",
      "Led Lean UX workshops, translating insights into product improvements and measurable experience gains ",
      "Mentored junior designers and promoted UX best practices, strengthening team capabilities and design maturity",
      "Supported product launches by providing clear handoff documentation and hosting QA sessions",
      "Collaborated closely with engineering to recognize technical constraints and minimize dev rework",
    ],
    accent: true,
  },
  {
    title: "UI/UX Designer",
    company: "Revenue River",
    period: "2018 — 2019",
    location: "",
    bullets: [
      "Secured six 5-star reviews from Revenue River’s clients",
    ],
    accent: false,
    condensed: true,
  },
];

const CareerTimelineAbout = () => {
  return (
    <section className="section-padding fc-dbg-dark-gray">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8 text-center">
            <h2 className="mb-20">Experience</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "520px", margin: "0 auto" }}>
            Over a decade of experience across startups, Fortune 500 companies, and everything in between. Deep expertise in enterprise solutions, data-heavy products, and zero-to-one product development.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div
              style={{
                position: "relative",
                paddingLeft: "2px",
              }}
            >
              {/* vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "8px",
                  bottom: "8px",
                  width: "1px",
                  background: "rgba(255,255,255,0.1)",
                }}
              />

              {roles.map((role, i) => (
                <div
                  key={i}
                  className="wow fadeInUp"
                  data-wow-delay={`${0.1 + i * 0.1}s`}
                  style={{
                    display: "flex",
                    gap: "2rem",
                    marginBottom: role.condensed ? "0" : "3rem",
                    paddingLeft: "2rem",
                    position: "relative",
                    opacity: role.condensed ? 0.55 : 1,
                  }}
                >
                  {/* dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-5px",
                      top: "7px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: role.accent ? "#fff" : "rgba(255,255,255,0.3)",
                      border: role.accent ? "none" : "1px solid rgba(255,255,255,0.3)",
                      flexShrink: 0,
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "baseline",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <h5
                        style={{
                          margin: 0,
                          fontWeight: 600,
                          fontSize: "1rem",
                          color: "rgba(255,255,255,0.95)",
                        }}
                      >
                        {role.title}
                      </h5>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.5)",
                          fontSize: "0.9rem",
                        }}
                      >
                        · {role.company}
                      </span>
                      {role.location && (
                        <span
                          style={{
                            color: "rgba(255,255,255,0.35)",
                            fontSize: "0.8rem",
                          }}
                        >
                          · {role.location}
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        color: "rgba(255,255,255,0.35)",
                        marginBottom: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      {role.period}
                    </div>
                    {!role.condensed && (
                      <ul
                        style={{
                          listStyle: "none",
                          margin: 0,
                          padding: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        {role.bullets.map((b, j) => (
                          <li
                            key={j}
                            style={{
                              fontSize: "0.875rem",
                              color: "rgba(255,255,255,0.6)",
                              lineHeight: 1.6,
                              paddingLeft: "1rem",
                              position: "relative",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                color: "rgba(255,255,255,0.25)",
                              }}
                            >
                              –
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {role.condensed && (
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.45)",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {role.bullets[0]}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center" style={{ marginTop: "2.5rem" }}>
              <a
                href="/img/resume-chelsea-williams.pdf"
                target="_blank"
                rel="noreferrer"
                className="nav-link fc-btn ripple"
              >
                View Full Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimelineAbout;
