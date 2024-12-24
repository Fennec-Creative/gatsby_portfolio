import React from "react";

const KeyFeaturesData = () => {
  return (
    <section className="serv-block section-padding min-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10 mb-30">
              <h2 className="s-head mb-60 center-small">Key Features</h2>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-5 offset-lg-1">
              <h4 className="mb-20 center-small">Clear and Approachable Data</h4>
              <p className="mb-20">
              To minimize cognitive load, the 4 data sets were broken into separate sections with color coordination to help ease cognitive load. 
              </p>
              <p className="mb-20">
              To help users see the relationship between data, a subtle animation was added to transitions between datasets.
              </p>
            </div>
            <div className="col-lg-5 offset-rg-1 center-small">
              <img src="/img/case-studies/data-clear-easy.png" alt="image" className="img-width-medium"/>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-5 offset-lg-1">
              <h4 className="mb-20 center-small">Multiple Routes to Success </h4>
              <p className="mb-20">
              My goal with this feature was to give users maximal control with minimal UI complexity.
              </p>
              <p className="mb-20">
              To achieve this, I gave high visibility to the easiest interactions, while allowing more robust tools to be discovered via interaction.
              </p>
            </div>
            <div className="col-lg-5 offset-rg-1 center-small">
              <img src="/img/case-studies/data-multiple-routes.png" alt="image"  className="img-width-medium"/>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-5 offset-lg-1">
              <h4 className="mb-20 center-small">Native Mobile Optimization </h4>
              <p className="mb-20">
              I wanted this feature to feel natural on both Android and iOS devices, so I worked with our engineers to modify native modules.  
              </p>
              <p className="mb-20">
              This also cut down on the total custom components needed, which saved our engineers a lot of time. 
              </p>
            </div>
            <div className="col-lg-5 offset-rg-1 center-small">
              <img src="/img/case-studies/data-native-optimization.png" alt="image"  className="img-width-medium"/>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 offset-lg-1">
              <h4 className="mb-20 center-small">Coloration & Continuity </h4>
              <p className="mb-20">
              To help with ease of comprehension, I used coloration to differentiate data sets and connect them to their counter-parts on the <a href="">Real-Time Power Flow</a> chart. 
              </p>
              <p className="mb-20">
              I also ensured a pause button was included on launch so that users had control over the live animations. 
              </p>
              </div>
            <div className="col-lg-5 offset-rg-1 center-small">
              <img src="/img/case-studies/data-coloration-continuity.png" alt="image"  className="img-width-large"/>
            </div>
          </div>


        </div>
      </section>
  ); 
};

export default KeyFeaturesData;
