import React from "react";

const ProblemAxil = () => {
  return (
    <section className="app-services section-padding min-area fc-lbg-dark-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head mb-60">
              <h2 className="mb-30 text-center">The Problem</h2>
              <p className="mb-20">
              The goal of  a design system is to create a unifying language that is simple enough for <strong>any designer to use</strong>, yet complex enough to ensure <strong>future needs</strong> are accounted for. 
              </p>
              <p className="mb-80">
              I’ve worked with many design systems over the years, and I know firsthand how long-term issues can arise from systems that fail to maintain a healthy balance between complexity and adaptability. 
              </p>
              <h4 className="text-center">
                Poorly balanced design systems result in: 
              </h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 text-center">
            <div>
              <div className="mb-10">
                <div className="fc-block-icon mb-20" >
                  <img src="/img/case-studies/axil-poor-adoption.png" alt=" " />
                </div>
                <div className="text-tit margin-more-b">
                  <h5 className="mb-10">Poor Adoption</h5>
                  <p className="fc-block-icon-p">
                  Designers resist systems that are not easy to use
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mb-30">
              <div className="mb-10">
                <div className="fc-block-icon mb-20" >
                  <img src="/img/case-studies/axil-endless-design-debt.png" alt=" " />
                </div>
                <div className="text-tit margin-more-b">
                  <h5 className="mb-10">Endless Design Debt</h5>
                  <p className="fc-block-icon-p">
                  Early complexity issues will multiply over time
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center ">
            <div className="mb-30">
              <div className="mb-10">
                <div className="fc-block-icon mb-20" >
                  <img src="/img/case-studies/axil-developer-hesitancy.png" alt=" " />
                </div>
                <div className="text-tit">
                  <h5 className="mb-10">Developer Hesitancy </h5>
                  <p className="fc-block-icon-p">
                  Developers resist systems that aren't easy to implement 
                  </p>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAxil;
