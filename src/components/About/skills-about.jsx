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
                  <img src="/img/ux-design-icon.svg" className="skills-icon" alt=" " />
                </span>
              </div>
              <div className="cont">
                <h6>UX Design</h6>
                <p>I'm experienced with every step of the design process from concept to launch</p>
              </div>
            </div>
          </div>

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
                <p>I have experience collecting and analyzing qualitative and quantitative data</p>
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
                  <img src="/img/front-end-dev.svg" className="skills-icon" alt=" " />
                </span>
              </div>
              <div className="cont">
                <h6>Front-End Development</h6>
                <p>I have a background in web development and can easily communicate with engineers</p>
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
                <h6>Team Leadership</h6>
                <p>I am currently a team lead and love managing and mentoring other designers</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SkillsAbout;
