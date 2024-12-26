import React from "react";

const DesignTrendsResearch = () => {
  return (
    <section className="serv-block section-padding fc-lbg-dark-gray" id="ux-trends-study">
        <section className=" min-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 mb-30">
              <h2 className="s-head text-center mb-30">Design Trends Analysis</h2>
              <p className="mb-20">
              Lack of access to our users was a challenge for me when defining our visual language. I couldn’t safely make assumptions about our user demographic without data, so I opted for a more conservative visual aesthetic. 
              </p>
              <p className="mb-20">
              The purpose of this analysis was to filter out short-term design trends and identify more sustainable patterns that can stand the test of time. 
              </p>
              <p>
              Some of the insights I gained were: 
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 offset-lg-2">
              <div className="content mb-40">
                <ul>
                  <li class="wow fadeInUp"><strong>Material.io</strong> & <strong>Apple Design</strong> withstood the test of time as leaders in design practices</li>
                  <li class="wow fadeInUp"><strong>Accessibility</strong> is paramount to design longevity</li>
                  <li class="wow fadeInUp"><strong>Inclusivity</strong> has played a key role in  design evolution over the years</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 offset-rg-2">
              <div className="content mb-40">
                <ul>
                  <li class="wow fadeInUp"><strong>Minimalism</strong> is on the rise. Layouts have gotten simpler over time</li>
                  <li class="wow fadeInUp"><strong>Curved edges</strong> and soft organic shapes have remained popular since their first use</li>
                  <li class="wow fadeInUp"><strong>User-centered</strong> patterns tend to flucuate the least with design trends</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10 mt-30">
              <img src="/img/case-studies/research-design-trends.png" alt=" " />
            </div>
          </div>
        </div>
      </section>
      </section>
  );
};

export default DesignTrendsResearch;
