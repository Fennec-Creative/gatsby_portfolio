import React from "react";

const ProblemData = () => {
  return (
    <section className="serv-block section-padding fc-lbg-dark-gray min-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-20">
                <h2 className="mb-30">
                The Problem 
                </h2>
                <p className="mb-20">
                EverBright previosly had a data monitoring chart system for solar energy only. The feature was not optimized for mobile applications, and struggled to draw user engagement. 
                </p>
                <p className="mb-20">
                We sought to improve engagement and trust, while also empowering users to optimize their energy systems and reduce carbon emissions. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 valign text-center">
              <img src="/img/case-studies/power-problem.png" alt="chart showing user engagement dropping quickly within first two weeks" className="img-width-large"/>
            </div>
          </div>
        </div>
    </section>
  ); 
};

export default ProblemData;
