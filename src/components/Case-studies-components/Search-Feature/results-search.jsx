import React from "react";

const ResultsSearch = () => {
  return (
    <section className="serv-block section-padding min-area">
        <div className="container">
          <div className="row mb-80">
            <div className="col-lg-5 offset-lg-1">
              <div className="mb-20">
                <h2 className="mb-30 center-small">
                Results
                </h2>
                <p className="mb-20">
                The study provided valuable data on how users interacted with the application as well as where they were getting frustrated when attempting to narrow search criteria.  
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-rg-1 valign text-center">
              <img src="/img/case-studies/search-results.png" alt=" " className="img-width-small"/>
            </div>
          </div>
          <div className="row mb-80 justify-content-center">
            <div className="col-lg-10">
              <img src="/img/case-studies/search-result-1.png" alt=" "  />
            </div>
          </div>

          <div className="row mb-80 justify-content-center">
            <div className="col-lg-10">
              <p>In general, users struggled with tasks that required more than one search criteria.  This was especially true in the third task, where in many cases the application failed to show any insurance information.  </p>
            </div>
          </div>
          
          <div className="row mb-80 justify-content-center">
            <div className="col-lg-10">
              <img src="/img/case-studies/search-result2.png" alt=" " />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p>
              After completing the three tasks, most users has an overall negative view of the feature.  The image above illustrates this point.  When asked if users would recommend the My Care app to a friend, 50% specifically said no, 42% were neutral, and only 8% said yes.  
              </p>
            </div>
            </div>

        </div>
    </section>
  );
};

export default ResultsSearch;
