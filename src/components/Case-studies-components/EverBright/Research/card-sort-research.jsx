import React from "react";

const CardSortResearch = () => {
  return (
    <section className="serv-block section-padding min-area" id="card-sort-study">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-20">
                <h2 className="mb-30 center-small">
                Card Sort Study  
                </h2>
                <p className="mb-20">
                To help optimize information architecture in the app, My team and I conducted a card sort study using UseBerry. 
                </p>
                <p classname="mb-20">
                While the data set was small, we were able to: 
                </p>
                <div className="content">
                <ul>
                  <li className="wow fadeInUp">Identify patterns in user navigational expectations </li>
                  <li className="wow fadeInUp">Identify key items with high similarity between participants </li>
                  <li className="wow fadeInUp">Use the information gleaned to improve the information hierarchy of the MyEverBright app</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 valign text-center">
              <img src="/img/case-studies/research-card-sort-study.png" alt=" " className="img-width-medium"/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default CardSortResearch;
