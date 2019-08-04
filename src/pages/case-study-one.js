import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/Privo-full.jpg'
import pic02 from '../assets/images/privo_personas.png'
import pic03 from '../assets/images/privo_style_guide.png'
import pic04 from '../assets/images/privo_design.png'
import pic05 from '../assets/images/privo_lucky_orange.png'

class CaseStudyOne extends React.Component {
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
          id="privo-head"
        >
          <div className="inner padding-extra">
            <h1>Privo</h1>
            <p>UI/UX Design / Development / Managment</p>
          </div>
        </section>
        <section id="one" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-12">
              <span className="image fit">
                <div className="acuImg">
                  <div className="acu_image_container">
                    <img src={pic01} alt="Privo Hoome Page" />
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
              <h3 className="privo-orange">My Role</h3>
              <p>
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic.
              </p>
              <h3 className="privo-orange">Employer</h3>
              <p>Revenue River</p>
            </div>
          </div>
        </section>

        <section id="two" className="main casestudy styleB privo-blue">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic02} />
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

        <section id="Two_point_five" className="main casestudy styleA">
          <div className="grid-wrapper">
            <div className="col-6">
              <h2>Brand Refresh</h2>
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

        <section id="three" className="main casestudy styleB">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
            </div>
            <div className="col-6">
              <h2>Design and Production</h2>
              <p>
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
              </p>
            </div>
          </div>
        </section>

        <section
          id="Two_point_five"
          className="main casestudy styleA privo-blue"
        >
          <div className="grid-wrapper">
            <div className="col-6">
              <h2>GDD Analysis and Continual Improvements</h2>
              <p>
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic05} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="five" className="main casestudy styleB">
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
export default CaseStudyOne
