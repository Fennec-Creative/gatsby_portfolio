import React from 'react'
import Helmet from 'react-helmet'

import IllSlider from '../components/IllSlider'
import LogoSlider from '../components/LogoSlider'
import Layout from '../components/layout'
import Contact from '../components/Contact'
import WhitePaperSlider from '../components/WhitePaperSlider'
import EBookSlider from '../components/EBookSlider'

import pic01 from '../assets/images/backpack.png'

class DesignSkills extends React.Component {
  componentDidMount() {
    let header = document.querySelector('.menu')
    header.classList.add('menu-dark')
    console.log(header)
  }

  render() {
    return (
      <Layout>
        <section class="header header-light-theme style6">
          <div className="inner padding-extra">
            <h1>Design Skills</h1>
            <p>Subtext goes here</p>
          </div>
        </section>
        <section id="illustration" className="main style4">
          <div className="grid-wrapper flex">
            <div className="col-6 flex-one">
              <h2>Illustration</h2>
              <p>
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
              </p>
            </div>
            <div className="col-6 flex-two">
              <span className="image fit">
                <IllSlider />
              </span>
            </div>
          </div>
        </section>

        <section id="logo_design" className="main style1">
          <div className="grid-wrapper flex">
            <div className="col-6 flex-two">
              <span className="image fit">
                <LogoSlider />
              </span>
            </div>
            <div className="col-6 flex-one">
              <h2>Logo Design</h2>
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

        <section id="white_paper_design" className="main style3">
          <div className="grid-wrapper flex">
            <div className="col-6 flex-one">
              <h2>White Paper Design</h2>
              <p>
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
              </p>
            </div>
            <div className="col-6 flex-two">
              <span className="image fit">
                <WhitePaperSlider />
              </span>
            </div>
          </div>
        </section>

        <section id="ebook_design" className="main style4">
          <div className="grid-wrapper flex">
            <div className="col-6 flex-two">
              <span className="image fit">
                <EBookSlider />
              </span>
            </div>
            <div className="col-6 flex-one">
              <h2>Ebook Design</h2>
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

        <section id="product_design" className="main style1">
          <div className="grid-wrapper flex">
            <div className="col-6 flex-one">
              <h2>Product Design</h2>
              <p>
                Kogi truffaut pop-up chartreuse neutra keffiyeh, williamsburg
                venmo everyday carry direct trade authentic. Church-key woke
                bitters shoreditch snackwave lumbersexual poke lo-fi taxidermy
                iPhone actually everyday carry fingerstache.
              </p>
            </div>
            <div className="col-6 flex-two">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <Contact />
      </Layout>
    )
  }
}

export default DesignSkills
