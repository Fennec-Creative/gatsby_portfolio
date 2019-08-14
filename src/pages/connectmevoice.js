import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/cmv-full.jpg'
import pic02 from '../assets/images/connectmevoice_personas.png'
import pic03 from '../assets/images/cmv_landing.png'
import pic04 from '../assets/images/cmv_phone.jpg'
import pic05 from '../assets/images/cmv_banners.png'

class ConnectMeVoice extends React.Component {
  componentDidMount() {
    let header = document.querySelector('.menu')
    header.classList.add('menu-dark')
    console.log(header)
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>ConnectMeVoice A Case Study</title>
          <meta
            name="description"
            content="I helped solve a growing company's conversion issues by rebuilding their website and supporting their brand."
          />
        </Helmet>
        <section
          className="header casestudy header-light-theme"
          id="cmv-header"
        >
          <div className="inner padding-extra">
            <h1>ConnectMeVoice</h1>
            <p>UI/UX Design / Development / Visual Design</p>
          </div>
        </section>
        <section id="cmv_problem" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-12">
              <span className="image fit">
                <div className="acuImg">
                  <div className="acu_image_container">
                    <img src={pic01} alt="ConnectMeVoice Home Page" />
                  </div>
                </div>
              </span>
            </div>
            <div className="col-8 rule-left">
              <h2>The Problem</h2>
              <p>
                ConnectMeVoice is a Virtual Phone Service company that focuses
                on intra-office communication. Their website had previously been
                built out by an independent CRM company. The site was struggling
                to convert leads and suffered from various bugs and security
                issues.
              </p>
              <h2>The Solution</h2>
              <p>
                A new, refreshed website built with WordPress and managed by a
                highly specialized development and marketing team.
              </p>
            </div>
            <div className="col-4">
              <h3 className="cmv-red-text">My Roles</h3>
              <p>UI/UX Design / Development / Visual Design</p>
              <h3 className="cmv-red-text">Contractor</h3>
              <p>EmoryDay</p>
            </div>
          </div>
        </section>

        <section id="cmv_strategy" className="main casestudy styleB">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic02} alt="Project Personas" />
              </span>
            </div>
            <div className="col-6">
              <h2>Strategy</h2>
              <p>
                My first task was to make a detailed report showing where the
                current site was going wrong using analytical data, viewer
                tracking, and performance testing. I then used this data to
                formulate a strategy to rebuild the site, refresh the company's
                appearance, and optimize the design for better conversions.
              </p>
            </div>
          </div>
        </section>

        <section id="cmv_design" className="main casestudy styleC cmv-gray">
          <div className="grid-wrapper">
            <div className="col-6">
              <h2>Design and Production</h2>
              <p>
                I created a series of wireframes depicting the new site
                structure. I was mindful of the client's limited budget, and
                focused on re-using elements from the original site when
                possible. I created high-fidelity mockups for focus pages like
                the home page and about page and presented them to the client.
                After going through initial revisions and internal review, I
                moved to development.
              </p>
              <p>
                I developed the website in WordPress while taking extra care to
                make sure the company's current SEO structure remained intact.
                Upon completion, I went through two rounds of internal QA and
                testing with my team before presenting the final site to the
                client. After two rounds of revisions, I went through a final
                round of QA, then took the site live.{' '}
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic03} alt="Snapshots of landing pages" />
              </span>
            </div>
          </div>
        </section>

        <section id="cmv_graphic" className="main casestudy styleB">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic05} alt="Trade show banners " />
              </span>
            </div>
            <div className="col-6">
              <h2>Graphic Design and Brand Support</h2>
              <p>
                One of the client's pain points was their inability to connect
                with people at promotional events and stand out from
                competition. To help solve this, I designed new promotional
                materials such as business cards, brochures, and a series of 3
                33" x 88" trade show banners.
              </p>
            </div>
          </div>
        </section>

        <section id="cmv_improvements" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="Project snapshot on mobile" />
              </span>
            </div>
            <div className="col-8">
              <h2>Continual Improvements Plan</h2>
              <p>
                After the successful launch of CMV's new site, I was responsible
                for continual maintenance, analysis, and strategic improvements
                for 3 months.
              </p>
            </div>
          </div>
        </section>

        <section id="cmv_key" className="main casestudy styleC cmv-red">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Key Takeaways</h2>
              </header>
              <p>
                This was a statisfying project because I was starting with a
                clear goal in mind, and it yielded positive results. According
                to our 3-month analysis, CMV saw a 25% increase in conversions,
                a 30% reduction in bounce rates, and a more confident client.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ConnectMeVoice
