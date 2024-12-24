import React from "react";

const HeuristicsResearch = () => {
  return (
    <section className="serv-block section-padding min-area" id="heuristics-evaluation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-20">
                <h2 className="mb-30 center-small">
                Heuristics Evaluation  
                </h2>
                <p className="mb-20">
                I conducted an initial heuristic evaluation and identified the following issues:
                </p>
                <div className="content mb-40">
                <ul>
                  <li className="wow fadeInUp">Usability issues </li>
                  <li className="wow fadeInUp">Accessibility issues </li>
                  <li className="wow fadeInUp">Issue prioritization & severity </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 valign text-center">
              <img src="/img/case-studies/research-heuristics-evaluation.png" alt="image" className="img-width-large"/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeuristicsResearch;
