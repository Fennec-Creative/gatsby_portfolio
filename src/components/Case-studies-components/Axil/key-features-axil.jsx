import React from "react";

const KeyFeaturesAxil = ({ style, lines }) => {
  return (
    <section className="app-services section-padding min-area fc-lbg-dark-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head mb-80">
              <h2 className="mb-30 text-center">Key Features</h2>
            </div>
          </div>
        </div>

        <div className="row">
          
          <div className="col-lg-5 offset-lg-1 col-md-6 margin-more-b">
              <div className="mb-40 alt-item-box">
                <div className="text-tit">
                  <h5 className="mb-10">Usability</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Minimalist Foundation with learning aids
                    </li>
                    <li className="wow fadeInUp">
                    Component optimization for rapid prototyping
                    </li>
                    <li className="wow fadeInUp">
                    Intuitive naming conventions
                    </li>
                    <li className="wow fadeInUp">
                    Accessibility annotations 
                    </li>
                  </ul>
                </div>
              </div>
            </div>

              <div className="mb-10 alt-item-box">
                <div className="text-tit">
                  <h5 className="mb-10">Developer Approved</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Clean, automated tokens system
                    </li>
                    <li className="wow fadeInUp">
                    System for developer feedback 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
            
          <div className="col-lg-5 col-md-6 offset-rg-1">
              <div className=" alt-item-box mb-40">
                <div className="text-tit">
                  <h5 className="mb-10">Adaptability</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Maximum future proofing with minimum complexity
                    </li>
                    <li className="wow fadeInUp">
                    Flexible components that are highly customizable 
                    </li>
                  </ul>
                </div>
                </div>
            </div>

              <div className="mb-10 alt-item-box">
                <div className="text-tit">
                  <h5 className="mb-10">Learnability</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                      Beginner-friendly guidelines 
                    </li>
                    <li className="wow fadeInUp">
                      Easy to customize view
                    </li>
                    <li className="wow fadeInUp">
                      Accessibility tips
                    </li>
                    <li className="wow fadeInUp">
                    Supportive documentation for implementation 
                    </li>
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

export default KeyFeaturesAxil;
