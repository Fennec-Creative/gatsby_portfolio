import React from "react";

const Footer2 = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="item-clumn our md-mb50">
              <p>
              © 2024 Chelsea Williams. All Rights Reserved
              </p>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6 text-right">
            <div className="item-clumn links">
              <div className="info">
              </div>
              <div className="social linklight">
                <a href="https://www.linkedin.com/in/fenneccreative/" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:cwilliamsdigital@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="circle-blur"></div>
      <div className="circle-blur two" id="footer"></div>
    </footer>
  );
};

export default Footer2;
