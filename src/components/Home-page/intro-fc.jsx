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
              <h1 classname="mb-40 fw-600>">
                Hi There!
              </h1>
              <p className="mb-20 mt-20"><strong>I’m Chelsea</strong>, a Product Designer based in San Francisco. </p>
              <p className="mb-40">I have 10 years of experience in mobile & web design as well as a background in front-end development. </p>
              
             
    <Link 
                className="nav-link fc-btn .ripple margin-more-b"
                to="case_studies"
                spy={true}gatsby
                smooth={true}
                offset={50}
                duration={500}
              >
                View Case Studies
              </Link>
            </div>
          </div>

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
