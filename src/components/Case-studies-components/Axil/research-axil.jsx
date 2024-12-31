import React from "react";

const ResearchAxil = () => {
  return (
    <section className="serv-block section-padding fc-lbg-dark-gray min-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 mb-30">
              <h2 className="s-head mb-60 center-small">Research</h2>
            </div>
          </div>

          <div className="row mb-80">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Internal Data</h4>
              <p className="mb-20">
              I utilized research collected over the years to inform the decisions I made on this project.  This included: 
              </p>
              <div className="content mb-80">
              <ul>
                <li className="wow fadeInUp">Internal UX workshops</li>
                <li className="wow fadeInUp">User feedback tracking </li>
                <li className="wow fadeInUp">Best practice analysis </li>
                <li className="wow fadeInUp">Digital literature review</li>
              </ul>
              </div>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <img src="/img/case-studies/axil-internal-data.png" alt=" " />
            </div>
          </div>

          <div className="row mb-80">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Learning From the Best</h4>
              <p className="mb-20">
              No research is complete without insight into other Design Systems that have been built and withstood the test of time. 
              </p>
              <p className="mb-20">
              Here are some renowned Design Systems that were taken into consideration during my research process. 
              </p>
              <div className="content mb-40">
              <ul>
                <li className="wow fadeInUp">Atlassian</li>
                <li className="wow fadeInUp">Carbon</li>
                <li className="wow fadeInUp">Material Design 3</li>
                <li className="wow fadeInUp">Spectrum</li>
              </ul>
              </div>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <img src="/img/case-studies/axil-learning-best.png" alt=" " />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Accessibility-oholic</h4>
              <p className="mb-20">
              I couldn’t count the number of times I’ve seen accessibility treated as an afterthought in the design process. 
              </p>
              <p className="mb-20">
              For this project I frequently referenced WCAG3 guidelines to ensure I was addressing as many usability issues upfront as possible.  
              </p>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <img src="/img/case-studies/axil-accessibility.png" alt=" " />
            </div>
          </div>

          


        </div>
      </section>
  ); 
};

export default ResearchAxil;
