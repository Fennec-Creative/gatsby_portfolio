import React from "react";

const ResultsMain = () => {
  return (
    <section className="serv-block services lficon section-padding fc-dbg-light-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 mb-30">
              <h2 className="s-head text-center mb-20">Results</h2>
              <p className="mb-20">My redesign effort gave EverBright a clean, comprehensive, and accessible app to match their growing presence in the field.</p>
              <p className="mb-20">I helped increase traffic to the the MyEverbright application by over 500% and engagement amongst our frequent users by 100% during the first quarter after launch.</p>
              <p className="mb-20">This greatly surpassed our initial business goals and gave us pivotal visibility to our parent company, allowing us to increase our budget for team growth.</p>
            </div>
          </div>
          <div className="row min-area">
            <div className="col-lg-5 offset-lg-1 wow fadeInLeft" data-wow-dela=".7s">
              <div className="item-box">
                <div className="cont">
                <h5 className="mb-10">Customers</h5>
                <div className="content">
                <ul>
                  <li><strong>96%</strong> key task completion rate during user testing </li>
                  <li><strong>100%</strong> real-time power flow comprehension during testing </li>
                  <li><strong>15%</strong> increase to positive app store ratings</li>
                </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-rg-1 wow fadeInLeft" data-wow-dela=".7s">
            <div className="item-box">
            <div className="cont">
              <h5 className="mb-10">Business</h5>
              <div className="content">
              <ul>
                <li><strong>Over 500%</strong> increase in traffic to MyEverBright application</li>
                <li><strong>100%</strong> increase to engagement amongst top users</li>
                <li><strong>115%</strong> increase to 1-month user retention</li>
              </ul>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ResultsMain;
