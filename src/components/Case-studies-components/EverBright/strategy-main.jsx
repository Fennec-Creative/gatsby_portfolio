import React from "react";

const StrategyMain = () => {
  return (
    <section className="serv-block section-padding fc-dbg-gradient-gray">
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="text-center mb-60">
            <img src="/img/case-studies/main-strategy.png" alt="image" className="img-width-large"/>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head mb-40">
              <h2 className="mb-20 text-center">Strategy</h2>
              <p>Once my team and I finished the analysis of our research, I began the strategy process. This included:  </p>
            </div>
          </div>
        </div>
        <div className="row fc-bullet-section">
            <div className="col-lg-4 offset-lg-2">
                <p>
                  <span className="fc-bullet-icon">
                    <img src="/img/case-studies/main-information-architecture-restructure.svg" />
                  </span>Information Architecture</p>
                <p>
                <span className="fc-bullet-icon">
                    <img src="/img/case-studies/main-new-feature-planning.svg" />
                  </span>
                  New Feature Planning</p>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <p>
              <span className="fc-bullet-icon">
                    <img src="/img/case-studies/main-sketches-wireframes.svg" />
                  </span>
                Sketches & Wireframes</p>
              <p>
              <span className="fc-bullet-icon">
                    <img src="/img/case-studies/main-stakeholder-review-updates.svg" />
                  </span>
                Stakeholder Review & Updates</p>
            </div>
          </div>
      </div>
      </section>
  );
};

export default StrategyMain;
