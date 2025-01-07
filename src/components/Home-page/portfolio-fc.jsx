import React from "react";
import { Link } from "gatsby";
import initIsotope from "common/initIsotope";

const PortfolioFc = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  return (
    <section className={`${grid ? (grid === 3 ? "three-column" : null) : null} portfolio section-padding pb-70 fc-dbg-gray-opacity`}>
      {
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center">
                  <h3 className="wow" id="case_studies">
                    Case Studies
                  </h3>
                </div>
              </div>
            </div>
          </div>
      }
      <div className={"container"}>
        <div className="row">
          {
            !hideFilter && (
              <div className={`filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} col-12`}>
                <div className="filter">
                  <span data-filter="*" className="active">
                    All
                  </span>
                  <span data-filter=".brand">Branding</span>
                  <span data-filter=".web">Mobile App</span>
                  <span data-filter=".graphic">Creative</span>
                </div>
              </div>
            )
          }

          <div className="gallery full-width">
            <div className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link to={`/case-studies/myeverbright`} className="imago wow">
                  <img src="/img/fc-everbright.png" alt="mobile application with light and dark mode depecting colorful data charts" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>MyEverBright</h6>
                <span>
                  Design Leadership • UX & UI Design
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/case-studies/axil-design-system`} className="imago wow">
                  <img src="/img/fc-axil.png" alt="Components of design system including logo, colors, fonts, and components" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Axil Design System</h6>
                <span>
                  UX & UI Design
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/case-studies/quest-for-a-clean-house`} className="imago wow">
                  <img src="/img/fc-quest.png" alt="Colorful game cards showcasing dnd-inspired chore game" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Cleaning Quest</h6>
                <span>
                  UX Design • Game Design
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link to={`/case-studies/search-feature`} className="imago wow">
                  <img src="/img/fc-search.png" alt="Search application for finding medical providers in an area" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>A Better Search Experience</h6>
                <span>
                  UI & UX Design
                </span>
              </div>
            </div>

          
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFc;
