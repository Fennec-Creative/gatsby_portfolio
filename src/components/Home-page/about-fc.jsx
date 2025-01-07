import React from "react";

const AboutFc = () => {
  return (
    <section className="serv-block section-padding pb-0">
        <div className="container">
          <div className="row">
          <div className="col-lg-6 valign">
            <img className="img-width-medium" src="/img/fc-avatar.svg" alt=" " />
            </div>
            <div className="col-lg-6 padding-more-t padding-more-b small-background">
              <div className="mb-20">
                <h2 className="mb-30 center-small">
                About Me
                </h2>
                <p className="mb-20">
                I love solving complex problems and helping companies meet their goals by creating products that are thoughtful, intuitive, and enjoyable to use. Throughout my career, I have developed a versatile skill set and am always seeking new challenges.
                </p>
                <p className="mb-40">
                When I'm not hammering code or illustrating graphics I can be found jamming with my band or climbing outside of San Francisco.
                </p>
               
               <div className="center-small">
                <a 
                className="nav-link fc-btn ripple" href="/about">
                Learn More
              </a> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutFc;

