import React from "react";

const NextStepsData = () => {
  return (
    <section className="serv-block section-padding min-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-20">
                <h2 className="mb-30 center-small">
                Application
                </h2>
                <p className="mb-20">
                This was the final key feature in our complete redesign of the MyEverBright application. 
                </p>
                <p className="mb-20">
                Next we set up analytics and created a plan for future data-centric iterations 
                </p>
                <div className="center-small">
                <a href="/case-studies/myeverbright" className="butn-bord-dark rounded buton mt-30"><span>Back to Main Case Study</span></a>
              </div>
              </div>
            </div>
            <div className="col-lg-6 valign">
              <img src="/img/case-studies/research-next-steps.png" alt=" "/>
            </div>
          </div>
        </div>
    </section>
  ); 
};

export default NextStepsData;
