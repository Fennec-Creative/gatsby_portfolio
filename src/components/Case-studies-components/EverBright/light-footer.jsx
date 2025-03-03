import React from "react";

const LightFooter = () => {
  return (
    <footer className="serv-block fc-lbg-dark-gray">
      <div className="container">
        <div classname="row justify-content-center">
          <div classname="col-lg-8 col-md-10">
            <h5 className="text-center mb-40">Thanks for scrolling!</h5>
            <div className="social-container">
              <span className="social linkdark">
              <a href="https://www.linkedin.com/in/fenneccreative/" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </span>
              <span className="social linkdark">
              <a href="mailto:cwilliamsdigital@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LightFooter;
