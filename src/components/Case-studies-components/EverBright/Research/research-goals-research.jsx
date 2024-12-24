import React from "react";

const ResearchGoalsResearch = () => {
  return (
    <section className="serv-block section-padding fc-lbg-dark-gray min-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-2">
              <div>
                <h3 className="mb-20 center-small">
                Research Goals
                </h3>
                <div className="content mb-40">
                <ul>
                  <li className="wow fadeInUp">Gain a comprehensive understanding of our competitors and common use cases within the field</li>
                  <li className="wow fadeInUp">Gain an understanding of user pain points, motivators, and needs</li>
                  <li className="wow fadeInUp">Analyze current state of mobile app and look for improvements</li>
                  <li className="wow fadeInUp">Gain insights on sustainable design patterns </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 offset-rg-2">
              <h3 className="mb-20">
                Limitations
              </h3>
              <div className="content mb-40">
              <ul>
                <li className="wow fadeInUp">Research budget under $500</li>
                <li className="wow fadeInUp">Limited team capacity</li>
                <li className="wow fadeInUp">Short timelines</li>
                <li className="wow fadeInUp">No access to users</li>
                <li className="wow fadeInUp">Minimal analytics integration</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ResearchGoalsResearch;
