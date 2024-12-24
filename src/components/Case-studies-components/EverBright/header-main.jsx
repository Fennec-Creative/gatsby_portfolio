import React from "react";

const HeaderMain = () => {
  return (
    <header className="pb-0 section-padding position-relative elevation-high fc-dbg-gradient-gray ">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-10">
          <div className="sec-head text-center mb-70">
            <h6 className="mb-20">
              Case Study - 2024
            </h6>
            <h1>MyEverBright Mobile App Redesign </h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="fc-image-container">
            <img src="/img/case-studies/phone-graphic-200.png" alt="image" className="main-head"/>
            <img src="/img/case-studies/main-header-overlay.png" alt="image" className="main-para" />
        </div>
      </div>
    </div>
  </header>
  );
};

export default HeaderMain;
