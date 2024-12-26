import React from "react";

const ProblemSearch = () => {
  return (
    <section className="pb-0 serv-block section-padding min-area fc-lbg-dark-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-20">
                <h2 className="mb-30 center-small">
                The Problem 
                </h2>
                <p className="mb-20">
                Interest in this project began when our Analytics Team discovered an unusually <strong>high drop-off rate</strong> with users on the app’s provider search feature.  
                </p>
                <p className="mb-20">
                Following an internal audit, my team identified several <strong>critical issues</strong> with the feature:
                </p>
                <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Ability to search by insurance provider was not clear
                    </li>
                    <li className="wow fadeInUp">
                    Ability to search by location or zip code was not clear 
                    </li>
                    <li className="wow fadeInUp">
                    Initial results were dependent on user’s location permissions and often shows irrelevant results
                    </li>
                    <li className="wow fadeInUp">
                    Data filter issues existed in results
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 valign text-center">
              <img src="/img/case-studies/search-problem.png" alt=" " className="img-width-medium"/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ProblemSearch;
