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
                I specialize in end-to-end products where the problem space is ambiguous and complex. I collaborate closely with cross-functional teams to ensure users never feel that complexity.
                </p>
                <p className="mb-40">
                More than a decade into my career, I’ve worked across mobile, web, and the spaces in between at companies ranging from early-stage startups to Fortune 500 organizations. Outside of work, you’ll usually find me playing with my band or climbing around San Francisco.
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

