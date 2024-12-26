import React from "react";

const ProblemMain = () => {
  return (
    <section className="pb-0 serv-block section-padding fc-dbg-dark-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-20">
                <h2 className="mb-30 center-small">
                  The Problem
                </h2>
                <p className="mb-20">
                When I joined, EverBright was a fast-growing, solar energy software solutions company. Their homeowner portal app was bare-bones and infrequently used.
                </p>
                <p>EverBright needed an application that matched their ambitions and provided their customers a one-of-a-kind user experience. </p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 valign text-center">
              <img src="/img/case-studies/main-the-problem.png" alt="snapshots of original app. Accessibility is poor and little content is shown above the fold" className="img-width-medium"/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProblemMain;
