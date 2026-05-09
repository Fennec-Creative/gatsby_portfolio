import React from "react";

const SkillsAbout = () => {
  return (
    <section
      className= "services bords section-padding fc-dbg-gray-opacity pt-90 lficon">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-12 align-text-center">
            <h2 className="mb-30 text-center">Skills & Abilities</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 wow fadeInLeft"
           data-wow-delay= "">
            <div className="item-box lightservices hide-margin-top">
              <div>
                <span className="icon">
                  <img src="/img/team-leadership-icon.svg" className="skills-icon" alt=" "/>
                </span>
              </div>
              <div className="cont">
                <h6>Design Leadership</h6>
                 <p>Leading and mentoring design teams, shaping strategic direction across product experiences, and partnering closely with product and engineering leadership.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInLeft"
           data-wow-delay= "">
            <div className="item-box lightservices">
              <div>
                <span className="icon">
                  <img src="/img/ux-design-icon.svg" className="skills-icon" alt=" " />
                </span>
              </div>
              <div className="cont">
                <h6>Product & UX Design</h6>
                <p>Driving end-to-end product design from discovery and problem framing through wireframes, prototypes, testing, and implementation across mobile and web.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 wow fadeInLeft"
           data-wow-delay= "">
            <div className="item-box lightservices">
              <div>
                <span className="icon">
                  <img src="/img/ux-research-icon.svg" className="skills-icon" alt=" "/>
                </span>
              </div>
              <div className="cont">
                <h6>UX Research</h6>
                <p>Conducting qualitative and quantitative research including usability testing, contextual inquiry, card sorting, and AI-assisted synthesis.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInLeft"
           data-wow-delay= "">
            <div className="item-box lightservices">
              <div>
                <span className="icon">
                  <img src="/img/team-leadership-icon.svg" className="skills-icon" alt=" "/>
                </span>
              </div>
              <div className="cont">
                <h6>Front-End Development</h6>
                 <p>Comfortable working in HTML, CSS, React, and Vue.js, with the technical fluency to communicate and collaborate effectively with engineers.</p>

              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SkillsAbout;
