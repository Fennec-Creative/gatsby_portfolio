import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/Privo-full.jpg'
import pic02 from '../assets/images/privo_personas.png'
import pic03 from '../assets/images/privo_style_guide.png'
import pic04 from '../assets/images/privo_design.png'
import pic05 from '../assets/images/privo_lucky_orange.png'

class Privo extends React.Component {
  componentDidMount() {
    let header = document.querySelector('.menu')
    header.classList.add('menu-dark')
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Privo: A Case Study</title>
          <meta
            name="description"
            content="As part of a team, I did a complete redesign of the Privo website as a way to improve conversions and build brand-awareness. "
          />
        </Helmet>
        <section
          className="header casestudy header-light-theme"
          id="privo-head"
        >
          <div className="inner padding-extra">
            <h1>Privo</h1>
            <p>UI/UX Design | Development | Managment</p>
          </div>
        </section>
        <section id="privo_problem" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-12">
              <span className="image fit">
                <div className="acuImg">
                  <div className="acu_image_container">
                    <img src={pic01} alt="Privo Home Page" />
                  </div>
                </div>
              </span>
            </div>
            <div className="col-8 rule-left">
              <h2>The Problem</h2>
              <p>
                Privo IT is an Amazon Web Services (AWS) consulting firm that
                designs and manages AWS environments. Despite a stellar
                reputation and growing awareness within the field, Privo's
                website was underperforming and struggling to bring in qualified
                leads. Their goals were to improve brand awareness and
                reputation, increase qualified leads, and establish themselves
                as leading professionals in their field.
              </p>
              <h2>The Solution</h2>
              <p>
                A clean modern website that encapsulates Privo's personable and
                high-energy brand identity while strategically guiding visitors
                along the buyers journey to conversion points.
              </p>
            </div>
            <div className="col-4">
              <h3 className="privo-orange">My Roles</h3>
              <p>
                UI/UX Design | Brand Design | Project Management | Dev Support
              </p>
              <h3 className="privo-orange">Employer</h3>
              <p>Revenue River</p>
            </div>
          </div>
        </section>

        <section
          id="privo_strategy"
          className="main casestudy styleB privo-blue"
        >
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic02} alt="Project personas" />
              </span>
            </div>
            <div className="col-6">
              <h2>Strategy</h2>
              <p>
                All stakeholders were initially interviewed, and we added Google
                Analytics and Lucky Orange tracking so that I could research how
                users were using the current site. Data collected was used to
                build out buyer personas and Buyer's Journey storyboards.
              </p>
              <p>
                As part of a team of designers, marketers, and developers, I
                helped build out a comprehensive strategy that focused on
                enticing visitors, and leading them through easily-consumable
                content to an eventual conversion decision. This was a full team
                effort that included feedback from marketing, SEO, and sales
                specialists.
              </p>
            </div>
          </div>
        </section>

        <section id="privo_brand" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-6">
              <h2>Brand Refresh</h2>
              <p>
                One of Privo's pain points was their brand failed to encapsulate
                their professional, friendly, and high-energy culture. To solve
                this, I focused on a clean modern layout with splashes of
                bright, energetic colors and a fresh custom icon set.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic03} alt="Project brand sample" />
              </span>
            </div>
          </div>
        </section>

        <section id="privo_production" className="main casestudy styleB">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic04} alt="Project snapshots on multiple devices" />
              </span>
            </div>
            <div className="col-6">
              <h2>Design and Production</h2>
              <p>
                After presenting our strategy with wireframes and visual
                references, I built out a series of high-fidelity mockups on
                Adobe XD. Upon client approval, I managed an overseas
                development team through the construction of the new website,
                which was built in Hubspot. I was responsible for ensuring
                timelines were met, walking the site through several iterations,
                initial design and development QA, and updating / editing code
                as needed.
              </p>
              <p>
                After the initial site was complete and had gone through several
                phases of internal review and QA from the entire team, I
                presented the project to the client. After two rounds of client
                revisions, I oversaw the launch of the site.
              </p>
            </div>
          </div>
        </section>

        <section id="privo_gdd" className="main casestudy styleA privo-blue">
          <div className="grid-wrapper">
            <div className="col-6">
              <h2>GDD Analysis and Continual Improvements</h2>
              <p>
                After the launch of the new Privo website, I spent a month
                gathering data to analyze the site's initial performance and
                rule out any potential for performance issues. I created a
                30-Day Post-Launch doc to detail my initial findings along with
                recommendations for areas that we could improve upon.
              </p>
              <p>
                3 months after launch, I created a Growth Driven Design
                Analysis, which took an in-depth look at site performance,
                viewer demographics, top-performing pages, traffic, and
                conversion point usage. This set the groundwork for continual
                improvements for the website while documenting measurable
                metrics for me and my team to expand on.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic05} alt="Snapshots from Lucky Orange" />
              </span>
            </div>
          </div>
        </section>

        <section id="privo_key" className="main casestudy styleB">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Key Takeaways</h2>
              </header>
              <p>
                I was proud of the end-result of this project, and enjoyed the
                opportunity to work with a team of highly effective individuals.
                According to my analysis, the new Privo website improved bounce
                rates of key pages from 72.74% to 53.7% and increased qualified
                lead conversions by 20%. The Privo team was thrilled, and I was
                able to secure a 5-star review for my company.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
export default Privo
