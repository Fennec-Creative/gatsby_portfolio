import React from 'react'
import Helmet from 'react-helmet'

import IllSlider from '../components/IllSlider'
import LogoSlider from '../components/LogoSlider'
import Layout from '../components/layout'
import Contact from '../components/Contact'
import WhitePaperSlider from '../components/WhitePaperSlider'
import EBookSlider from '../components/EBookSlider'

import pic01 from '../assets/images/backpack.png'

const DesignSkills = () => (
  <Layout>
    <section class="header">
      <div className="inner">
        <h1>Design Skills</h1>
        <p>Subtext goes here</p>
        <ul className="actions">
          <li>
            <a href="#one" className="button scrolly">
              Discover
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section id="one" className="main style4">
      <div className="grid-wrapper">
        <div className="col-6">
          <h2>Illustration</h2>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
        </div>
        <div className="col-6">
          <span className="image fit">
            <IllSlider />
          </span>
        </div>
      </div>
    </section>

    <section id="two" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <span className="image fit">
            <LogoSlider />
          </span>
        </div>
        <div className="col-6">
          <h2>Logo Design</h2>
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

    <section id="three" className="main style3">
      <div className="grid-wrapper">
        <div className="col-6">
          <h2>White Paper Design</h2>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
        </div>
        <div className="col-6">
          <span className="image fit">
            <WhitePaperSlider />
          </span>
        </div>
      </div>
    </section>

    <section id="four" className="main style4">
      <div className="grid-wrapper">
        <div className="col-6">
          <span className="image fit">
            <EBookSlider />
          </span>
        </div>
        <div className="col-6">
          <h2>Ebook Design</h2>
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

    <section id="five" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <h2>Product Design</h2>
          <p>
            Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg venmo
            everyday carry direct trade authentic. Church-key woke bitters
            shoreditch snackwave lumbersexual poke lo-fi taxidermy iPhone
            actually everyday carry fingerstache.
          </p>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={pic01} alt="" />
          </span>
        </div>
      </div>
    </section>

    <Contact />
  </Layout>
)

export default DesignSkills
