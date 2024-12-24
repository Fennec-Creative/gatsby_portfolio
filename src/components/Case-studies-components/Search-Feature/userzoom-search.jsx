import React from "react";

const UserzoomSearch = () => {
  return (
    <section className="serv-block section-padding min-area  fc-lbg-dark-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-2">
              <h4 className="mb-20 center-small">Unmoderated User Study</h4>
              <p className="mb-20">
              Using the platform UserZoom, I created an unmoderated user study that asked users to talk out loud while performing the following three tasks: 
              </p>
              <div className="content mb-40">
              <ul>
                <li className="wow fadeInUp">Locate a primary care physician that is currently accepting new patients</li>
                <li className="wow fadeInUp">Locate a dermatologist in the city of Phoenix, AZ</li>
                <li className="wow fadeInUp">Locate a neurologist that accepts Kaiser Permanente insurance</li>
              </ul>
              </div>
              <p>
              Afterwards they were provided with a survey to help me identify user priorities and behaviors.
              </p>
            </div>
            <div className="col-lg-3 offset-rg-2 text-center margin-more-t">
              <img src="/img/case-studies/search-userzoom.png" alt="image" className="img-width-small" />
            </div>
          </div>

        </div>
      </section>
  ); 
};

export default UserzoomSearch;
