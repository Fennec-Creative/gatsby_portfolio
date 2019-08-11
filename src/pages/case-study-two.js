import React from 'react'

import Layout from '../components/layout'

import pic01 from '../assets/images/TeamConnect-full.jpg'
import pic02 from '../assets/images/teamconnect_personas.png'
import pic03 from '../assets/images/teamconnect_design.png'
import pic04 from '../assets/images/pdv_wireless_gif.gif'

class CaseStudyTwo extends React.Component {
  componentDidMount() {
    let header = document.querySelector('.menu')
    header.classList.add('menu-dark')
    console.log(header)
  }

  render() {
    return (
      <Layout>
        <section
          className="header casestudy header-light-theme"
          id="team_connect_header"
        >
          <div className="inner padding-extra">
            <h1>TeamConnect</h1>
            <p>UI/UX Design / Development / Animation</p>
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
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
              </p>
              <h2>The Solution</h2>
              <p>
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
              </p>
            </div>
            <div className="col-4">
              <h3 className="tc-blue-text">My Role</h3>
              <p>
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic.
              </p>
              <h3 className="tc-blue-text">Contractor</h3>
              <p>EmoryDay</p>
            </div>
          </div>
        </section>

        <section id="tc_strategy" className="main casestudy cmv-gray styleC">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
            </div>
            <div className="col-6">
              <h2>Strategy</h2>
              <p>
                Hammock forage cred fashion axe authentic stumptown ethical
                vegan banh mi mixtape humblebrag readymade salvia intelligentsia
                ennui. Keffiyeh gentrify bicycle rights, poutine aesthetic deep
                v bushwick.
              </p>
              <p>
                Irony lomo raw denim four loko, leggings austin tumeric man
                braid ethical before they sold out swag. Stumptown XOXO pickled,
                banjo mustache pork belly vice celiac seitan mumblecore pop-up
                everyday carry trust fund forage distillery.
              </p>
            </div>
          </div>
        </section>

        <section id="tc_design" className="main casestudy styleB">
          <div className="grid-wrapper">
            <div className="col-6">
              <h2>Design and Production </h2>
              <p>
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="tc_demo" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
            </div>
            <div className="col-6">
              <h2>Interactive Demo Series</h2>
              <p>
                Hammock forage cred fashion axe authentic stumptown ethical
                vegan banh mi mixtape humblebrag readymade salvia intelligentsia
                ennui. Keffiyeh gentrify bicycle rights, poutine aesthetic deep
                v bushwick.
              </p>
              <p>
                Irony lomo raw denim four loko, leggings austin tumeric man
                braid ethical before they sold out swag. Stumptown XOXO pickled,
                banjo mustache pork belly vice celiac seitan mumblecore pop-up
                everyday carry trust fund forage distillery.
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
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
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
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CaseStudyTwo
