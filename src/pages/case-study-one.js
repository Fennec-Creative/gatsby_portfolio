import React from 'react'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'

import Layout from '../components/layout'

import pic01 from '../assets/images/Privo-full.jpg'
import pic02 from '../assets/images/privo_personas.png'
import pic03 from '../assets/images/privo_style_guide.png'
import pic04 from '../assets/images/privo_design.png'
import pic05 from '../assets/images/privo_lucky_orange.png'

const CaseStudyOne = () => (
  <Layout>
    <section class="header">
      <div className="inner">
        <h1>Privo</h1>
        <p>UI/UX Design / Development / Managment</p>
        <ul className="actions">
          <li>
            <a href="#one" className="button scrolly">
              Discover
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-12">
          <span className="image fit">
            <div class="acuImg">
              <div class="acu_image_container">
                <img src={pic01} alt="Privo Hoome Page" />
              </div>
            </div>
          </span>
        </div>
        <div className="col-12">
          <header className="major">
            <h2>The Problem</h2>
          </header>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
          <header className="major">
            <h2>The Solution</h2>
          </header>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
          <h3>My Role</h3>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic.
          </p>
          <h3>Employer</h3>
          <p>Revenue River</p>
        </div>
      </div>
    </section>

    <section id="two" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <span className="image fit">
            <img src={pic02} />
          </span>
        </div>
        <div className="col-6">
          <header className="major">
            <h2>Strategy</h2>
          </header>
          <p>
            Hammock forage cred fashion axe authentic stumptown ethical vegan
            banh mi mixtape humblebrag readymade salvia intelligentsia ennui.
            Keffiyeh gentrify bicycle rights, poutine aesthetic deep v bushwick.
          </p>
          <p>
            Irony lomo raw denim four loko, leggings austin tumeric man braid
            ethical before they sold out swag. Stumptown XOXO pickled, banjo
            mustache pork belly vice celiac seitan mumblecore pop-up everyday
            carry trust fund forage distillery.
          </p>
        </div>
      </div>
    </section>

    <section id="Two_point_five" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>Brand Refresh</h2>
          </header>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={pic03} alt="" />
          </span>
        </div>
      </div>
    </section>

    <section id="three" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <span className="image fit">
            <img src={pic04} alt="" />
          </span>
        </div>
        <div className="col-6">
          <header className="major">
            <h2>Design and Production</h2>
          </header>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
        </div>
      </div>
    </section>

    <section id="four" className="main style1 special">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Metrics section (to develop)</h2>
          </header>
        </div>

        <div className="col-3">
          <span className="image fit">
            <img src={pic02} alt="" />
          </span>
          <h3>Interviews</h3>
        </div>
        <div className="col-3">
          <span className="image fit">
            <img src={pic03} alt="" />
          </span>
          <h3>Usability Tests</h3>
        </div>
        <div className="col-3">
          <span className="image fit">
            <img src={pic04} alt="" />
          </span>
          <h3>Iterations</h3>
        </div>
        <div className="col-3">
          <span className="image fit">
            <img src={pic04} alt="" />
          </span>
          <h3>Downloads</h3>
        </div>
      </div>
    </section>

    <section id="Two_point_five" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>GDD Analysis and Continual Improvements</h2>
          </header>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={pic05} alt="" />
          </span>
        </div>
      </div>
    </section>

    <section id="five" className="main style1">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Key Takeaways</h2>
          </header>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
        </div>
      </div>
    </section>

    <Contact />
  </Layout>
)

export default CaseStudyOne
