import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/cmv-full.jpg'
import pic02 from '../assets/images/connectmevoice_personas.png'
import pic03 from '../assets/images/cmv_landing.png'
import pic04 from '../assets/images/cmv_phone.jpg'
import pic05 from '../assets/images/cmv_banners.png'

const CaseStudyThree = () => (
  <Layout>
    <section class="header casestudy header-light-theme" id="cmv-header">
      <div className="inner">
        <h1>ConnectMeVoice</h1>
        <p>UI/UX Design / Development / Visual Design</p>
        <ul className="actions">
          <li>
            <a href="#one" className="button scrolly">
              Discover
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section id="one" className="main casestudy styleA">
      <div className="grid-wrapper">
        <div className="col-12">
          <span className="image fit">
            <div class="acuImg">
              <div class="acu_image_container">
                <img src={pic01} alt="ConnectMeVoice Hoome Page" />
              </div>
            </div>
          </span>
        </div>
        <div className="col-8 rule-left">
          <h2>The Problem</h2>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
          <h2>The Solution</h2>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
        </div>
        <div className="col-4">
          <h3 className="cmv-red-text">My Role</h3>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic.
          </p>
          <h3 className="cmv-red-text">Contractor</h3>
          <p>EmoryDay</p>
        </div>
      </div>
    </section>

    <section id="two" className="main casestudy styleB">
      <div className="grid-wrapper">
        <div className="col-6">
          <span className="image fit">
            <img src={pic02} />
          </span>
        </div>
        <div className="col-6">
          <h2>Strategy</h2>
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

    <section id="three" className="main casestudy styleC cmv-gray">
      <div className="grid-wrapper">
        <div className="col-6">
          <h2>Design and Production</h2>
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

    <section id="three-point-five" className="main casestudy styleB">
      <div className="grid-wrapper">
        <div className="col-6">
          <span className="image fit">
            <img src={pic05} />
          </span>
        </div>
        <div className="col-6">
          <h2>Graphic Design and Bran Support</h2>
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

    <section id="four_point_five" className="main casestudy styleA">
      <div className="grid-wrapper">
        <div className="col-4">
          <span className="image fit">
            <img src={pic04} alt="" />
          </span>
        </div>
        <div className="col-8">
          <h2>Continual Improvements Plan</h2>
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

    <section id="five" className="main casestudy styleC cmv-red">
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
  </Layout>
)

export default CaseStudyThree