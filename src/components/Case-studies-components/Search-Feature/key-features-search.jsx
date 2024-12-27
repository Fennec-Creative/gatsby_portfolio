import React from "react";

const KeyFeaturesSearch = ({ style, lines }) => {
  return (
    <section className="app-services section-padding min-area ">
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
              <div className="mb-10 alt-item-box search-colors">
                <div className="text-tit">
                  <h5 className="mb-10">
                  Spelling issues are a roadblock for some users
                  </h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    In the second task, 41.67% of users had issues with spelling and had to re-enter search terms one or more times. 
                    </li>
                    <li className="wow fadeInUp">
                    In the third task, 33.33% of users had issues with spelling and had to re-enter search terms one or more times
                    </li>
                    <li className="wow fadeInUp">
                    Several users anticipated an auto-fill feature and just entered in the first letter of their search criteria
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div className="mb-10 alt-item-box search-colors">
                <div className="text-tit">
                  <h5 className="mb-10">The search tool does not provide a good user experience</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Only 8% of users said they did not encounter any problems while completing tasks
                    </li>
                    <li className="wow fadeInUp">
                    Verbal frustration was observed in 75% of all users
                    </li>
                    <li className="wow fadeInUp">
                    Only 8% of users said they would recommend this app to a friend.  50% specifically said they would not.
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6">
            <div className="mb-30">
              <div className="mb-10 alt-item-box search-colors">
                <div className="text-tit">
                  <h5 className="mb-10">Users expect filters as part of their experience</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Users specifically mentioned wanting to see more filter options a total of 15 times 
                    </li>
                    <li className="wow fadeInUp">
                    Users specifically expressed a desire to see filters for location, provider type, and insurance
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div className="mb-10 alt-item-box search-colors">
                <div className="text-tit">
                  <h5 className="mb-10">Finding in-network providers is difficult</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    50% of users reported being confused by how to search by insurance provider
                    </li>
                    <li className="wow fadeInUp">
                    In recordings, users specifically mentioned they would like to see insurance listed on provider cards.  
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div className="mb-10 alt-item-box search-colors">
                <div className="text-tit">
                  <h5 className="mb-10">Search inconsistencies are a problem</h5>
                  <div className="content">
                  <ul>
                    <li className="wow fadeInUp">
                    Users reported issues with results not matching their search terms  
                    </li>
                    <li className="wow fadeInUp">
                    Searching by state did not consistently work 
                    </li>
                    <li className="wow fadeInUp">In the final questionnaire, 58% of users reported being confused by location search</li>
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

export default KeyFeaturesSearch;
