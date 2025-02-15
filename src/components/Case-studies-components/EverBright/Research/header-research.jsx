import React from "react";

const HeaderResearch = () => {
  return (
    <header className="pb-0 section-padding position-relative elevation-high fc-lbg-gradient-grey">
    <div className="container">

    <div className="row justify-content-left linkdark">
            <a href="/case-studies/myeverbright/#research_overview" className="fc-back-button">
                  <img src="/img/back-bracket-dark.svg" className="fc-back-icon" alt=" " />
                  <span>Main Case Study</span>
              </a>
              <span className="underline"></span>
          </div>

      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-10">
          <div className="sec-head text-center mb-70">
            <h6 className="mb-20">
              Case Study - 2024
            </h6>
            <h1>Research</h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="fc-image-container">
            <img src="/img/case-studies/subpage-phone-graphic.png" alt=" " className="main-head"/>
            <img src="/img/case-studies/subpage-header-overlay.png" alt=" " className="main-para" />
        </div>
      </div>
    </div>
  </header>
  );
};

export default HeaderResearch;
