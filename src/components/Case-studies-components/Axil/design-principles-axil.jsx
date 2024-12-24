import React from "react";

const DesignPrinciplesAxil = () => {
  return (
    <section className="app-services section-padding min-area fc-lbg-inverse">
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
                  <img src="/img/case-studies/axil-hicks-law.png" />
                </div>
                <div className="text-tit margin-more-b">
                  <h4 className="mb-10">Hick’s Law</h4>
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
                  <img src="/img/case-studies/axil-teslers-law.png" />
                </div>
                <div className="text-tit margin-more-b">
                  <h4 className="mb-10">Tesler’s Law</h4>
                  <p className="fc-block-icon-p">
                  For any system there is a certain amount of complexity which cannot be reduced.
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
            <div className="mb-30">
              <div className="mb-10">
                <div className="fc-block-icon mb-20" >
                  <img src="/img/case-studies/axil-postels-law.png" />
                </div>
                <div className="text-tit">
                  <h4 className="mb-10">Postel’s Law</h4>
                  <p className="fc-block-icon-p">
                  Be liberal in what you accept, and conservative in what you send.
                  </p>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPrinciplesAxil;
