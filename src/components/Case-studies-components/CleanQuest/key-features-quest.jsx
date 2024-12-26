import React from "react";
import featuresData from "data/sections/findings-main.json";

const KeyFeatures = ({ style, lines }) => {
  return (
    <section className="serv-block section-padding min-area fc-lbg-dark-gray">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10 mb-30">
              <h2 className="s-head mb-60 center-small">Key Features</h2>
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-6 offset-lg-1">
              <h4 className="mb-20 center-small">Curated to Bring Joy</h4>
              <p className="mb-20">
                <strong>Accessibility</strong> and <strong>Inclusivity</strong> were paramount to the success of this project. 
              </p>
              <p className="mb-20">
              I made this game during the 2020 pandemic. 
              </p>
              <p className="mb-20">
              Times felt bleak, so to help encourage engagement, I made this game as upbeat and nostalgia-inducing as possible.
              </p>
              <p className="mb-20">
              I made custom avatars and used a bright, colorful aesthetic throughout my designs and utilized game mechanics that resembled childhood video games we both played. 
              </p>
            </div>
            <div className="col-lg-4 offset-rg-1 text-center">
              <img src="/img/case-studies/quest-curated-to-bring-joy.png" alt="custom illustration of a wizard" className="img-width-medium" />
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-6 offset-lg-1">
              <h4 className="mb-20 center-small">Points for Success</h4>
              <p className="mb-20">
              I created a point system that awards “experience points” upon completing each chore. 
              </p>
              <p className="mb-20">
              The purpose of this was to give little pinches of satisfaction throughout the chore process, while also creating a playful competition for whomever could get the most points. 
              </p>
            </div>
            <div className="col-lg-5 offset-rg-1 text-center">
              <img src="/img/case-studies/quest-points-for-success.png" alt="Chore list showing daily, weekly, and monthly chores" className="img-width-medium" />
            </div>
          </div>

          <div className="row mb-100">
            <div className="col-lg-5 offset-lg-1">
              <h4 className="mb-20 center-small">Shared Accountability</h4>
              <p className="mb-20">
              I created a series of game “bosses” that appeared at the end of each week. 
              </p>
              <p className="mb-20">
              To defeat them, we had to have enough combined points. This helped us keep each-other accountable, because it was impossible to win the game without both of us participating. 
              </p>
            </div>
            <div className="col-lg-5 offset-rg-1">
              <img src="/img/case-studies/quest-shared-accountability.png" alt="four cards, each showcasing a boss with a number of assigned experience points" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 offset-lg-1">
              <h4 className="mb-20 center-small">Reward for Victory</h4>
              <p className="mb-20">
              Each month a “treasure chest” was created. If all bosses were defeated within the month, the winner would get to open the chest. 
              </p>
              <p>Typically we chose rewards that were fun for both of us - such as a nice date night for two where the winner gets to pick the restaurant. </p>
            </div>
            <div className="col-lg-4 offset-rg-1 text-center">
              <img src="/img/case-studies/quest-reward-for-victory.png" alt="victory badge" className="img-width-medium"/>
            </div>
          </div>


        </div>
      </section>
  );
};

export default KeyFeatures;
