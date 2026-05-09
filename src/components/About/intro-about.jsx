import React from "react";

const IntroAbout = () => {
  return (
    <header className="serv-block section-padding  pb-0">
      <div className="container fc-make-front">
        <div className="row">
          <div className="col-lg-6 text-center">
          <div className="img img-width-medium ">
              <img src="/img/fc-avatar.svg" alt=" "/>
            </div>
          </div>

          <div className="col-lg-6 valign padding-more-t padding-more-b small-background">
            <div className="md-mb50">
              <h1 classname="center-small mb-40 fw-600">
                About Me
              </h1>
              <p className="mb-20 mt-20">
              I specialize in end-to-end products where the problem space is ambiguous and complex. I collaborate closely with cross-functional teams to ensure users never feel that complexity.
              </p>
              <p className="mb-40">
              More than a decade into my career, I’ve worked across mobile, web, and the spaces in between at companies ranging from early-stage startups to Fortune 500 organizations. Outside of work, you’ll usually find me playing with my band or climbing around San Francisco.
              </p>

              <div className="col-lg-12 text-right app-footer fc-social">
            <div className="item-clumn links">
              <div className="info">
              </div>
              <div className="social linklight ">
                <a href="#0">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#0">
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
            
            </div>
          </div>

        </div>
      </div>
      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
    </header>
  );
};

export default IntroAbout;
