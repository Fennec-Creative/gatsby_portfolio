import React from "react";

const FinalDetailsSearch = () => {
  return (
    <section className="serv-block section-padding min-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 mb-30">
              <h2 className="s-head mb-30 center-small">Key Features</h2>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Auto-fill feature</h4>
              <p className="mb-20">
              To reduce typos and spelling errors I added an auto-fill feature.  This also acted as an assist for users to assure they only picked valid data points.
              </p>
            </div>
            <div className="col-lg-4 offset-rg-2 text-center">
              <img src="/img/case-studies/search-auto-fill.png" alt="image" className="img-width-large" />
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-5 offset-lg-2">
              <h4 className="mb-20 center-small">Eliminating Ambiguity</h4>
              <p className="mb-20">
              I broke the single search approach into three separate bars, each highlighting one of the search parameters available to the user.
              </p>
            </div>
            <div className="col-lg-3 offset-rg-2 text-center">
              <img src="/img/case-studies/search-eliminating-ambiguity.png" alt="image" className="img-width-small" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 center-small">Intentional Constraints</h4>
              <p className="mb-20">
              Rather than allowing users to search by any term, users now have to select from a list of valid data points before they can move to the next step.  This not only reduces errors, but makes searches with typos and misspellings impossible.
              </p>
            </div>
            <div className="col-lg-4 offset-rg-2 ">
              <img src="/img/case-studies/search-intentional-constraints.png" alt="image" />
            </div>
          </div>


        </div>
      </section>
  ); 
};

export default FinalDetailsSearch;
