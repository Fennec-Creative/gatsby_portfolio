import React from "react";

const ResearchData = () => {
  return (
    <section className="app-services section-padding fc-lbg-dark-gray min-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head mb-80">
              <h2 className="mb-30 text-center">Related Research</h2>
              <p>
              To kickoff this project, I leveraged research that had been completed as part of the redesign as a whole.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="item mb-30">
              <div className="mb-10">
                <div className="fc-icon" >
                  <img src="/img/case-studies/research-competitive-analysis.svg" alt=" " />
                </div>
                <div className="text-tit">
                  <h5>Competitive Analysis</h5>
                </div>
              </div>

              <p>
                In-depth analysis of 9 competitors & 47 features
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-30">
              <div className="mb-10">
                <div className="fc-icon">
                  <img src="/img/case-studies/research-heuristics-evaluation.svg" alt=" " />
                </div>
  
                <div className="text-tit">
                  <h5>Heatmap Analysis</h5>
                </div>
              </div>

              <p>
                Analysis of in-app user behavior & key interaction points
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-30">
              <div className="mb-10">
                <div className="fc-icon">
                <img src="/img/case-studies/research-contextual-inquires.svg" alt=" " />
                </div>
                
                <div className="text-tit">
                  <h5>Contextual Inquires</h5>
                </div>
              </div>
              <p>
                Series of 6 interviews & analysis of themes 
              </p>
            </div>
          </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-lg-7 col-md-10">
                <div className="caption text-center mt-20">
                <a href="/case-studies/myeverbright/research" className="butn-bord-dark rounded buton mt-30"><span>View All Research</span></a>
                </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default ResearchData;
