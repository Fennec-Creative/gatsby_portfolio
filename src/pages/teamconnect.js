import React from 'react'

import Layout from '../components/layout'
import Helmet from 'react-helmet'

import pic01 from '../assets/images/TeamConnect-full.jpg'
import pic02 from '../assets/images/teamconnect_personas.png'
import pic03 from '../assets/images/teamconnect_design.png'
import pic04 from '../assets/images/pdv_wireless_gif.gif'

class TeamConnect extends React.Component {
  componentDidMount() {
    let header = document.querySelector('.menu')
    header.classList.add('menu-dark')
    console.log(header)
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>TeamConnect: A Case Study</title>
          <meta
            name="description"
            content="As a part of a team, I helped build a new site for a growing company and developed an interactive demo series."
          />
        </Helmet>
        <section
          className="header casestudy header-light-theme"
          id="team_connect_header"
        >
          <div className="inner padding-extra">
            <h1>TeamConnect</h1>
            <p>UI/UX Design | Development | Animation</p>
          </div>
        </section>
        <section id="tc_problem" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-12">
              <span className="image fit">
                <div className="acuImg">
                  <div className="acu_image_container">
                    <img src={pic01} alt="Team Connet Home Page" />
                  </div>
                </div>
              </span>
            </div>
            <div className="col-8 rule-left">
              <h2>The Problem</h2>
              <p>
                PDV Wireless is a wireless communications provider that
                specializes in workforce management solutions. After growing
                from a small company to a national supplier, PDV Wireless needed
                to establish themselves as the authority in their field, and
                distinguish themselves from competitors.
              </p>
              <h2>The Solution</h2>
              <p>
                A modern, professional site that strategically guides viewers to
                promotional materials and conversion points.
              </p>
            </div>
            <div className="col-4">
              <h3 className="tc-blue-text">My Roles</h3>
              <p>UI/UX Design | Web Development | Animation</p>
              <h3 className="tc-blue-text">Contractor</h3>
              <p>EmoryDay</p>
            </div>
          </div>
        </section>

        <section id="tc_strategy" className="main casestudy cmv-gray styleC">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic02} alt="Project Personas" />
              </span>
            </div>
            <div className="col-6">
              <h2>Strategy</h2>
              Working closely with the PDVWireless team, I helped with user
              research, current site analysis, and site strategy. The
              TeamConnect site was developed as part of a rebranding effort to
              separate PDV products from their corporate site, and as a
              launchpad for future marketing efforts. Using data collected from
              Google Analytics and Lucky Orange, I helped develop a
              cost-effective redesign strategy.
            </div>
          </div>
        </section>

        <section id="tc_design" className="main casestudy styleB">
          <div className="grid-wrapper">
            <div className="col-6">
              <h2>Design and Production </h2>
              <p>
                I worked with the PDVWireless design team to create mockups and
                a working prototype. I was solely responsible for the complete
                development, QA, and final launch of the website. I built the
                website using WordPress and was also in charge of updating and
                maintaining the client's Corporate site as part of the rebrand
                process.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic03} alt="project desktop snapshot" />
              </span>
            </div>
          </div>
        </section>

        <section id="tc_demo" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic04} alt="Interactive Demo gif" />
              </span>
            </div>
            <div className="col-6">
              <h2>Interactive Demo Series</h2>
              <p>
                One of PDV's goals was to showcase their workforce management
                software on the TeamConnect home page in a way that was visual,
                intuitive, and easy to consume. To achieve this goal, I created
                a series of six interactive demos, each one focusing on a
                specific software solution.
              </p>
              <p>
                I built the demos as animated gifs using Adobe Animate, then
                designed and developed an interactive web application that
                allowed visitors to toggle between the animated gifs. The PDV
                team was especially happy with this product, and it was used in
                various campaigns the following year.
              </p>
            </div>
          </div>
        </section>

        <section id="tc_improvement" className="main casestudy styleC tc-blue">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Continual Improvement Plan</h2>
              </header>
              <p>
                After the successful launch of TeamConnect, I was responsible
                for maintaining, analyzing, and updating both the TeamConnect
                site and the PDVWireless corporate site. During this time I
                regularly monitored the site's performance, checked for
                potential issues, and offered recommendations for continual
                improvements.
              </p>
            </div>
          </div>
        </section>

        <section id="tc_key" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Key Takeaways</h2>
              </header>
              <p>
                This was a uniquely challenging project for me, as I had the
                opportunity to wear many hats and learn several new skills.
                Ultimately, I created an end product I was very proud of. PDV
                was thrilled with their new site, and reported an overall
                increase in conversions and sales.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TeamConnect
