import React from "react";

const METRICS = [
  { v: "Q1",  l: "Shipped ahead of deadline",     c: "#3BC0B9" },
  { v: "7",   l: "Core features designed",        c: "#5FB1FF" },
  { v: "50",  l: "Reusable components",           c: "#B299FF" },
  { v: "1st", l: "Project to define DeDe AI",     c: "#F27D9C" },
];

const IntroMain = () => {
  return (
    <section className="serv-block section-padding fc-dbg-light-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 ">
              <div>
                <p className="mb-20">
                GoodLeap Pros is an Enterprise Roofing SaaS that I took from 0 → 1 in 6 months in 2025.
                </p>
                <p>
                Built as a single platform for all roofing needs, Pros includes a proposal tool, pricebook, loans, contracts, invoices, and an interactive AI agent named DeDe.
                </p>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div style={{
                display: "flex",
                gap: 48,
                flexWrap: "wrap",
                marginBottom: 32,
              }}>
                <div>
                  <h6 className="mb-10">My Role</h6>
                  <p className="mb-0">Staff UX Designer • Sole Designer</p>
                </div>
                <div>
                  <h6 className="mb-10">Company</h6>
                  <p className="mb-0">GoodLeap</p>
                </div>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
              }}>
                {METRICS.map((s, i) => (
                  <div key={i} style={{
                    padding: "18px 16px",
                    borderRadius: 14,
                    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    border: `1px solid ${s.c}30`,
                    borderLeft: `3px solid ${s.c}`,
                  }}>
                    <div style={{
                      fontWeight: 800,
                      fontSize: 36,
                      color: s.c,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}>{s.v}</div>
                    <div style={{
                      fontSize: 12,
                      color: "#EEF2F9",
                      marginTop: 10,
                      lineHeight: 1.4,
                    }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default IntroMain;
