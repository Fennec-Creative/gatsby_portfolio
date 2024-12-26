import React from "react";

const HeatmapResearch = () => {
  return (
    <section className="serv-block section-padding min-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-20">
                <h2 className="mb-30 center-small">
                Application
                </h2>
                <p>
                  Research played a vital role in my design process and I used it in all stages of the MyEverBright redesign, including: 
                </p>
                <div className="content margin-more-b">
                <ul>
                  <li class="wow fadeInUp">Visual Language Identification</li>
                  <li class="wow fadeInUp">Complete app redesign</li>
                  <li class="wow fadeInUp">Real time power flow feature</li>
                  <li class="wow fadeInUp">Data monitoring charts feature</li>
                </ul>
                </div>
                <div className="center-small">
                <a href="#0" className="butn-bord-dark rounded buton mt-30"><span>Back to Main Case Study</span></a>
              </div></div>
            </div>
            <div className="col-lg-6 valign">
              <img src="/img/case-studies/research-next-steps.png" alt=" "/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeatmapResearch;
