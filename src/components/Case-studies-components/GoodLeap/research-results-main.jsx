import React from "react";
import featuresData from "data/sections/findings-main.json";

const Results1 = ({ style, lines }) => {
  return (
    <section
      className={`services bords section-padding fc-dbg-light-gray ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-header  text-center">
              <h2 className="wow mb-20">
                Key Research Insights
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {style === "4item"
            ? featuresData.map((feature) => (
                <div
                  key={feature.id}
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-delay={`${
                    feature.id === 1
                      ? ".5"
                      : feature.id === 2
                      ? ".7"
                      : feature.id === 3
                      ? ".9"
                      : "1.1"
                  }s`}
                >
                  <div className="item-box">
                    <div className="cont">
                      <h5 className="mb-10">{feature.title}</h5>
                      <p>{feature.content}</p>
                    </div>
                  </div>
                </div>
              ))
            : // max item 3 in Home page
              featuresData.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="item-box md-mb50">
                    <span className={`icon ${feature.icon}`}></span>
                    <h5>{feature.title}</h5>
                    <p>{feature.content}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
      {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null}
    </section>
  );
};

export default Results1;
