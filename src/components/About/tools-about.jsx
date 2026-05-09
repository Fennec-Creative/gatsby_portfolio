import React from "react";

const toolGroups = [
  {
    category: "Design & Prototyping",
    tools: ["Figma", "Framer", "Invision", "ProtoPie", "Sketch"],
  },
  {
    category: "Research & Testing",
    tools: ["Lyssna", "Maze", "Userlytics", "UserTesting", "UserZoom"],
  },
  {
    category: "AI Tooling",
    tools: ["Claude Code & Design", "Chat GPT", "Codex", "Figma Make", "Google Stitch"],
  },
  {
    category: "Front-End",
    tools: ["CSS", "HTML", "Javascript", "React", "Vue.js"],
  },
  {
    category: "Data & Analytics",
    tools: ["Amplitude", "Contentsquare", "FullStory", "Google Analytics", "Mixpanel"],
  },
  {
    category: "Collaboration",
    tools: ["Confluence", "FigJam", "Jira", "Miro", "Slack"],
  },
];

const methodGroups = [
  "0→1 Strategy and Design",
  "Accessibility (WCAG)",
  "AI/ML Product Design",
  "Data Visualization",
  "End-to-end design",
  "Information Architecture",
  "Interaction Design",
  "Motion Design",
  "Rapid Prototyping",
  "Responsive design",
  "User-Centered Design",
  "Wireframing",
];

const ToolsAbout = () => {
  return (
    <section className="section-padding pt-60">
      <div className="container">

        <div className="row justify-content-center mb-60">
          <div className="col-lg-8 text-center">
            <h2 className="mb-20">Tools & Methods</h2>
          </div>
        </div>

        {/* Tool groups */}
        <div className="row mb-60">
          {toolGroups.map((group, i) => (
            <div
              key={i}
              className="col-6 col-md-4 wow fadeInUp"
              data-wow-delay={`${0.05 * i}s`}
              style={{ marginBottom: "2rem" }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.35)",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                {group.category}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {group.tools.map((tool, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.5,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Methods / competencies pill cloud */}
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="col-lg-10">
            <div
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.35)",
                fontWeight: 600,
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Competencies
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
              {methodGroups.map((method, i) => (
                <span
                  key={i}
                  style={{
                    padding: "0.35rem 0.85rem",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "100px",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.6)",
                    background: "rgba(255,255,255,0.03)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ToolsAbout;
