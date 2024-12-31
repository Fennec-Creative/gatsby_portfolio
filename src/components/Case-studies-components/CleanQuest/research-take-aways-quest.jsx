import React from "react";

const ResearchQuest = ({ style, lines }) => {
  return (
    <section className="app-services section-padding min-area fc-lbg-dark-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head mb-80">
              <h2 className="mb-30 text-center">Key Take-Aways</h2>
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col-lg-6 col-md-6">
            <div className="mb-30">
              <div className="mb-10 alt-item-box quest-colors">
                <div className="text-tit">
                  <h5 className="mb-10">House messiness takes away from everyday contentment</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Both users experience a drop in mood when navigating a messy house 
                    </li>
                    <li className="wow fadeInUp">
                    Messiness affects mood on a daily basis
                    </li>
                    <li className="wow fadeInUp">
                    Messiness reduces efficiency in cooking and getting ready for work
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div className="mb-10 alt-item-box quest-colors">
                <div className="text-tit">
                  <h5 className="mb-10">
                  House chores are unrewarding and boring by nature
                  </h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Both users struggle to clean for more than 45 minutes at a time without taking long breaks 
                    </li>
                    <li className="wow fadeInUp">
                    Long breaks tend to interrupt cleaning and push tasks to next day 
                    </li>
                    <li className="wow fadeInUp">
                    While cleaning, both users tend to feel bored and under-stimulated
                    </li>
                    <li className="wow fadeInUp">
                    Chores are boring -  we didn’t really need data to establish this one. 
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="mb-30">
              <div className="mb-10 alt-item-box quest-colors">
                <div className="text-tit">
                  <h5 className="mb-10">Rushed-cleaning takes a toll on weekends</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Cleaning is primarily motivated by having people over
                    </li>
                    <li className="wow fadeInUp">
                    Cleaning the house ends up taking an entire day
                    </li>
                    <li className="wow fadeInUp">
                    Cleaning contributes to stress when lots has to be done in a short time frame 
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div className="mb-10 alt-item-box quest-colors">
                <div className="text-tit">
                  <h5 className="mb-10">Competition and reward are strong motivators</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Andrew is highly motivated by competition and enjoys activities he can “win” 
                    </li>
                    <li className="wow fadeInUp">
                    Chelsea is highly motivated by rewards and novelty
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div className="mb-10 alt-item-box quest-colors">
                <div className="text-tit">
                  <h5 className="mb-10">Users want to improve, but don’t know where to start</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Both users have been trying to do better for years 
                    </li>
                    <li className="wow fadeInUp">
                    Typically they attempt new habits when the house is very messy, then those habits wain
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchQuest;
