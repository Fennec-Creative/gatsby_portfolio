import React from "react";
import Split from "../Split";
import AboutUs3date from "data/sections/about-us3.json";
import { thumparallax, thumparallaxDown } from "common/thumparallax";

const ExperienceAbout = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallax();
      thumparallaxDown();
    }, 1000);
  }, []);

  return (
    <section className="agency section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="imgsec md-mb50">
              <div className="row">
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgone big-bord wow fadeInDown"
                      data-wow-delay=".8s"
                    >
                      <img
                        className="thumparallax-down"
                        src="/img/about_small1.png"
                        alt=""
                      />
                    </div>
                    <div className="exp hide-on-mobile">
                      <h2 className="nmb-font center-small">{AboutUs3date.exp.nmb}</h2>
                      <h6>{AboutUs3date.exp.name}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgtwo big-bord wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <img
                        className="thumparallax hide-on-mobile"
                        src="/img/about_large1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="content">
              <Split>
                <h4 className=" center-small wow words chars splitting" data-splitting>
                  {AboutUs3date.title.first} <br /> {AboutUs3date.title.second}
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting mb-20" data-splitting>
                  {AboutUs3date.content.first} <br />
                  {AboutUs3date.content.second}
                </p>
              </Split>
              <div className="center-small margin-more-t">
              <a 
                className="nav-link fc-btn ripple" href="">
                View Case Study
              </a>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAbout;
