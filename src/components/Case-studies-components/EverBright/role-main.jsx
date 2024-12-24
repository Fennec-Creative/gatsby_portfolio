import React from "react";

const RoleMain = () => {
  return (
    <section className="serv-block section-padding fc-dbg-light-gray min-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 mb-30">
              <h2 className="s-head text-center mb-30">My Role</h2>
              <p>As the lead product designer for a team of two, I was involved in every step of this project. My responsibilities included:</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 offset-lg-2">
              <div className="content mb-40">
                <ul>
                  <li class="wow fadeInUp">Product definition & stakeholder meetings </li>
                  <li class="wow fadeInUp">Initial research & analysis</li>
                  <li class="wow fadeInUp">Planning & timeline management </li>
                  <li class="wow fadeInUp">UX design & strategy </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <div className="content mb-40">
                <ul>
                  <li class="wow fadeInUp">Development team documentation & handoff</li>
                  <li class="wow fadeInUp">Design team leadership and direction </li>
                  <li class="wow fadeInUp">UI design of key features </li>
                  <li class="wow fadeInUp">Animation & interaction Design </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10 mt-30">
              <img src="/img/case-studies/main-my-role.png" alt="image" />
            </div>
          </div>
        </div>
      </section>
  );
};

export default RoleMain;
