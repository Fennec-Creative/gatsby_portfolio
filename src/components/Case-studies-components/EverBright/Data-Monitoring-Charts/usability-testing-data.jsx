import React from "react";

const UsabilityTestingData = () => {
  return (
    <section className="serv-block section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 mb-30">
              <h2 className="s-head text-center mb-30">Usability & AB Testing</h2>
              <p className="mb-20">
              With my direction defined, I created 3 unique iterations of the feature, each solving the same problem in a different way.
              </p>
              <p className="mb-20">
              Useberry was used to test these 3 iterations against each-other. Each test consisted of measurable actions to complete (quantitative), and a survey to gauge how users perceived the tasks (qualitative). 
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-10">
              <img src="/img/case-studies/data-usability-testing.png" alt="snapshots of three iterations, each showing a different way to explore the same dataset" />
            </div>
          </div>
        </div>
      </section>
  ); 
};

export default UsabilityTestingData;
