import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import IllSlider from '../components/IllSlider'
import LogoSlider from '../components/LogoSlider'
import Layout from '../components/layout'
import Contact from '../components/Contact'
import WhitePaperSlider from '../components/WhitePaperSlider'
import EBookSlider from '../components/EBookSlider'

class DesignSkills extends React.Component {
  componentDidMount() {
    let header = document.querySelector('.menu')
    header.classList.add('menu-dark')
    console.log(header)
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Design Skills</title>
          <meta
            name="description"
            content="Chelsea Williams is a UI/UX Designer and Developer based in Denver Colorado. Her skillset includes graphic design, logo design, and custom illustration"
          />
        </Helmet>
        <section className="header header-light-theme style6">
          <div className="inner padding-extra">
            <h1>Design Skills</h1>
            <p>Graphic Design | Logo Design | Illustration</p>
          </div>
        </section>
        <section id="illustration" className="main style4">
          <div className="grid-wrapper flex">
            <div className="col-6 flex-one">
              <h2>Illustration</h2>
              <p>
                I create custom illustrations as needed for my various UX/UI
                projects. I can emulate a wide variety of illustration styles,
                however my personal style is a fusion of modern vector graphics
                and traditional character illustration. I enjoy creating
                graphics that are personable and light-hearted in nature with
                professional undertones.
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
                Strong branding starts with an effective logo. I have a specific
                logo design process that I typically apply during the{' '}
                <Link to="/ux-process/#discovery" className="inline_link">
                  strategy phase
                </Link>{' '}
                of my projects. I'll start by giving the client a detailed
                intake list followed-up by an interview. Using the information
                gathered, I'll create a series of simple vector layouts and go
                through several iterations of feedback with the client where I
                gradually work down to a single design and build upon it.
              </p>
            </div>
          </div>
        </section>

        <section id="white_paper_design" className="main style3">
          <div className="grid-wrapper flex">
            <div className="col-6 flex-one">
              <h2>White Paper Design</h2>
              <p>
                Building a company's online presence does not stop at their
                website. For authoritative articles such as white papers, that
                is especially true. I typically design white papers during the{' '}
                <Link to="/ux-process/#improvements" className="inline_link">
                  continual improvements
                </Link>{' '}
                stage of my UX process as a way to help build on branding and
                authority.
              </p>
              <p>
                I'll start by designing a template in InDesign that can be
                easily updated and altered, then I will either re-create
                existing white papers, or use my templates for new content.
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
                In the Winter of 2018 I developed a 22-page eBook for the
                company Anexinet. After an extensive interview with Anexinet's
                design team, I mapped out the content for this ebook using
                sketches first, then wireframes. Finally, I crated a custom
                template in InDesign, and built each page out using custom
                iconography and illustrations as needed.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </Layout>
    )
  }
}

export default DesignSkills
