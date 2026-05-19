import React from "react";

const HeaderMain = () => {
  return (
    <header className="pb-0 section-padding position-relative elevation-high fc-dbg-gradient-gray " style={{paddingTop:"rem"}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-10">
          <div className="sec-head text-center mb-70">
            <h6 className="mb-20">
              Case Study - 2025
            </h6>
            <h1>GoodLeap Pros Enterprise SaaS </h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="fc-image-container fc-goodleap-header-image" style={{height: "551px",maxWidth: "1170px"}}>
            <img src="/img/case-studies/goodleap-header.png" alt=" " className="main-para-2"/>
        </div>
      </div>
    </div>
  </header>
  );
};

export default HeaderMain;
