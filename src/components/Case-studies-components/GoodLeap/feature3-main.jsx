import React from "react";

const Feature3Main = () => {
  return (
    <section className="serv-block section-padding fc-dbg-light-gray">
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="sec-head text-center mb-30">
              <h6>
                  Key feature
                </h6>
                <h2 className="mb-20">
                Real Time Power Flow
              </h2>
              </div>
              <div>
              <p className="mb-20">
              We needed to give users a fully comprehensive, live view of their system that was easy to understand.
              </p>
              <p className="mb-60">
                Below is an overview of my solution. To view a detailed summary, <a href="/case-studies/myeverbright/real-time-power-flow">click here</a>. 
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-1 valign">
          <img className="img-width-medium mb-60" src="/img/case-studies/fc-animated-gif.gif" alt="isometric house with solar panel, battery, and power pole. Animated arrows depict poer flow" />
            </div>
            <div className="col-lg-5 offset-rg-1 mb-40">
              <div className="mb-20">
              <h3 className="mb-20 center-small">
                Overview
                </h3>
                <p className="mb-20">
                This animated graphic was designed to allow users to quickly and efficiently understand their system's status upon opening the app.
                </p>
                <p className="mb-20">
                To ensure comprehension, I added interactive cards that users could tap to get educational breakdowns of each system element. 
                </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-1 valign">
            <img className="img-width-large margin-more-b" src="/img/case-studies/main-real-time-power-flow.png" alt="Two snapshots of home screen shwoing animated graphic and buttons to pay bill and view contracts" />
            </div>
            <div className="col-lg-5 offset-rg-1">
              <div className="mb-20">
                <h3 className="mb-20 center-small">
                Defining Features: 
                </h3>
                <p className="mb-20">
                <span className="fc-bullet-icon">
                  <img src="/img/case-studies/main-real-time-data-that.svg" alt=" " />
                </span>
                  Real-time power flow at a glance
                </p>
                <p className="mb-20">
                <span className="fc-bullet-icon">
                  <img src="/img/case-studies/main-inclusive-accessibility-first-design.svg" alt=" " />
                </span>
                Accessibility-focused controls
                </p>
                <p className="mb-20">
                <span className="fc-bullet-icon">
                  <img src="/img/case-studies/main-custom-animations.svg" alt=" " />
                </span>
                Custom animations for every possible scenario
                </p>
                <div className="center-small">
                <a href="/case-studies/myeverbright/real-time-power-flow" className="nav-link fc-btn-case mt-30"><span>View Project Details</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Feature3Main;
