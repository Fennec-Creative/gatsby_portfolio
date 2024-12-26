import React from "react";

const HeaderSearch = () => {
  return (
    <header className="pb-0 section-padding position-relative elevation-high fc-search-background">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-10">
          <div className="sec-head text-center mb-30">
            <h6 className="mb-20">
              Case Study - 2021
            </h6>
            <h1>A Better Search Experience</h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="fc-image-container search-colors">
            <img src="/img/case-studies/search-hero.png" alt=" " className="fc-axil-container"/>
        </div>
      </div>
    </div>
  </header>
  ); 
};

export default HeaderSearch;
