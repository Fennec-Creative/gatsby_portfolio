import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Contact from '../components/Contact'

import pic01 from '../assets/images/pic01.jpg'

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
    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>Illustration</h2>
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
            <img src={pic01} alt="" />
          </span>
        </div>
      </div>
    </section>

    <section id="two" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <span className="image fit">
            <img src={pic01} alt="" />
          </span>
        </div>
        <div className="col-6">
          <header className="major">
            <h2>Logo Design</h2>
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

    <section id="three" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>Graphic Design</h2>
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
            <img src={pic01} alt="" />
          </span>
        </div>
      </div>
    </section>

    <section id="four" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <span className="image fit">
            <img src={pic01} alt="" />
          </span>
        </div>
        <div className="col-6">
          <header className="major">
            <h2>Digital Painting and Photomanipulation</h2>
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

    <Contact />
  </Layout>
)

export default DesignSkills
