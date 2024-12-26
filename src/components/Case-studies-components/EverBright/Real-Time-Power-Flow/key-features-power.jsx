import React from "react";

const KeyFeaturesPower = () => {
  return (
    <section className="serv-block section-padding erv-block section-padding fc-lbg-dark-gray min-areamin-area pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 mb-30">
              <h2 className="s-head mb-60 text-center">Key Features</h2>
            </div>
          </div>

          <div className="row mb-80">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20">Animated Real-Time Data Flow</h4>
              <p className="mb-20">
              I optimized this feature as much as possible to ensure most users could understand their system state within 5 seconds. 
              </p>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <img src="/img/case-studies/power-animated-real-time-data-flow.png" alt="Graphic is simple and uses color and contrast to highlight important information" />
            </div>
          </div>

          <div className="row mb-80">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20  margin-more-t">Custom Animations </h4>
              <p className="mb-20">
              I created custom animations to match each possible use case and wrote thorough documentation on how to build them. 
              </p>
            </div>
            <div className="col-lg-6">
              <img src="/img/case-studies/power-custom-animations.png" alt="snapshot of dev documentation showing exact specifications for animation elements" />
            </div>
          </div>

          <div className="row mb-80">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 margin-more-t">Multiple Ways of Comprehension </h4>
              <p className="mb-20">
              To make sure I was building a feature for all users, I created a dynamic written summary below the animated feature. 
              </p>
              <p className="mb-20">
              I also added an interactive drawer feature that gives users clear summaries of what each data point means.
              </p>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <img src="/img/case-studies/power-multiple-ways-comprehension.png" alt="User has a summary explaining what system is doing and can tap for more in-depth explanations" />
            </div>
          </div>

          <div className="row mb-80">
            <div className="col-lg-4 offset-lg-2">
              <h4 className="mb-20 margin-more-t">Accessibility Focused</h4>
              <p className="mb-20">
              I created an oversized text guideline to make sure this feature was both readable and usable with larger fonts. 
              </p>
              <p className="mb-20">
              I also ensured a pause button was included on launch so that users had control over the live animations. 
              </p>
              </div>
            <div className="col-lg-4 offset-rg-2 text-center">
              <img src="/img/case-studies/power-accessibility-focused.png" alt="Home screen with font enlarged to 200%" className="img-width-small"/>
            </div>
          </div>


        </div>
      </section>
  ); 
};

export default KeyFeaturesPower;
