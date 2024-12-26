import React from "react";

const DesignPrinciplesSearch = () => {
  return (
    <section className="app-services fc-lbg-dark-gray section-padding min-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head mb-80">
              <h2 className="mb-30 text-center">Key Design Principles</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mb-30">
              <div className="mb-10">
                <div className="fc-block-icon mb-20" >
                  <img src="/img/case-studies/search-hicks.png" alt=" " />
                </div>
                <div className="text-tit margin-more-b">
                  <h5 className="mb-10">Hick’s Law</h5>
                  <p className="fc-block-icon-p">
                  The time it takes to make a decision increases with the number and complexity of choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="mb-30">
              <div className="mb-10">
                <div className="fc-block-icon mb-20" >
                  <img src="/img/case-studies/search-teslers.png" alt=" " />
                </div>
                <div className="text-tit margin-more-b">
                  <h5 className="mb-10">Tesler’s Law</h5>
                  <p className="fc-block-icon-p">
                  For any system there is a certain amount of complexity which cannot be reduced.
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
            <div className="mb-60">
              <div className="mb-10">
                <div className="fc-block-icon mb-20" >
                  <img src="/img/case-studies/search-jakobs.png" alt=" " />
                </div>
                <div className="text-tit">
                  <h5 className="mb-10">Jakob's Law</h5>
                  <p className="fc-block-icon-p">
                  Users spend most of their time on other apps and therefore prefer patterns they already know.
                  </p>
                </div>
              </div>
            </div>
            </div>
        </div>
        <div className="row justify-content-center">
          <p>
            source: <a href="">www.lawsofux.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignPrinciplesSearch;
