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
              I love solving complex problems and helping companies meet their goals by creating products that are thoughtful, intuitive, and enjoyable to use. Throughout my career, I have developed a versatile skill set and am always seeking new challenges.
              </p>
              <p className="mb-40">
              When I'm not hammering code or illustrating graphics I can be found jamming with my band or climbing outside of San Francisco.
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
