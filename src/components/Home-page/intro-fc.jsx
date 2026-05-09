import React, { useEffect, useCallback } from "react";
import particlesConfig from "config/particle-config";
import particlesBlackConfig from "config/pr-s-black";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Link } from "react-scroll";

const IntroFC = ({ sliderRef, blackStar }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('#particles-js canvas')?.style.removeProperty('position');
    }, 500);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    document.querySelector('#particles-js canvas')?.style.removeProperty('position');
  }, []);

  const metrics = [
  {
    value: "500%+",
    label: "Traffic Growth",
    context: "MyEverBright redesign",
  },
  {
    value: "115%",
    label: "Retention Lift",
    context: "MyEverBright redesign",
  },
  {
    value: "0→1",
    label: "Enterprise SaaS Launched",
    context: "GoodLeap Roofer Plus in 6 months",
  },
  {
    value: "6",
    label: "Design Systems Built",
    context: "Powered by Axil framework",
  },
];

  return (
    <header ref={sliderRef} className="particles valign" id="home">
      <div className="container fc-make-front">
        <div className="row">
          <div className="col-lg-6 valign margin-more-b margin-more-t">
          <div className="img ">
              <img src="/img/fc-fennec-fox.svg" alt=" " />
            </div>
          </div>

          <div className="col-lg-6 valign">
            <div className="cont md-mb40">
              <h2 classname="mb-40 fw-600>">
                Hi, I'm Chelsea
              </h2>
              <p className="mb-20 mt-20">I'm a Staff Product Designer with 10 years of experience taking products from zero to launch. </p>
              <p className="mb-40">Recently, I designed an all-in-one enterprise SaaS platform in less than 6 months and led a complete app redesign that increased monthly visits from 200 to over 1,000 and boosted 30-day retention by 115% year over year.</p>
              
             
    <Link 
                className="nav-link fc-btn .ripple margin-more-b"
                to="case_studies"
                spy={true}gatsby
                smooth={true}
                offset={-150}
                duration={500}
              >
                View Case Studies
              </Link>
            </div>
          </div>

<section
      className="section-padding pt-60 pb-60"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", width: "100%", marginTop: "10%" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="col-6 col-md-3 text-center wow fadeInUp"
              data-wow-delay={`${0.1 + i * 0.1}s`}
              style={{ padding: "1.5rem 1rem" }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.65) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.35rem",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.4,
                }}
              >
                {m.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        </div>
      </div>
      <Particles
        id="particles-js"
        init={particlesInit}
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />
      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
    </header>

  );
};

export default IntroFC;
