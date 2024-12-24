import React from "react";

const HeatmapResearch = () => {
  return (
    <section className="pb-0 serv-block section-padding fc-lbg-dark-gray min-area" id="heatmap-analysis">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="mb-20">
                <h2 className="mb-30 center-small">
                Heatmap Analysis  
                </h2>
                <p className="mb-20">
                My team and I conducted a heat-map analysis to glean insight into user behavior and identify key interaction points and usability issues. We learned:
                </p>
                <div className="content">
                <ul>
                  <li className="wow fadeInUp">Billing payment, contract access, and contact support accounted for most app use</li>
                  <li className="wow fadeInUp">Interaction with system controls was minimal</li>
                  <li className="wow fadeInUp">Non-interactive items were being tapped on frequently</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7 valign text-center">
              <img src="/img/case-studies/research-heatmap-analysis.png" alt="image" className="fc-image-container"/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeatmapResearch;
