import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import Contact from '../components/Contact'

import pic01 from '../assets/images/design-open.jpg'
import pic02 from '../assets/images/featured-open.jpg'
import pic03 from '../assets/images/toolbox-open.jpg'
import pic04 from '../assets/images/Team_connect_2.png'
import pic05 from '../assets/images/privo_2.png'
import pic06 from '../assets/images/connectmevoice_2.png'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selfAnimate: false,
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)

    window.addEventListener('scroll', () => {
      const isAnimate = window.scrollY < 400
      if (isAnimate !== true) {
        this.setState({ selfAnimate: true })
      } else {
        this.setState({ selfAnimate: false })
      }
    })
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }

    //window.removeEventListener('scroll')
  }

  render() {
    const siteTitle = 'Fennec Creative - UI/UX Design and Development'

    return (
      <Layout>
        <Helmet title={siteTitle}>
          <meta
            name="description"
            content="Personal website of Chelsea Williams, a UI/UX Designer and Developer based in Denver, CO."
          />
          <meta
            rel="publisher"
            href="https://plus.google.com/u/0/+FennecCreative/"
          ></meta>
          <link rel="image_src" href="../assets/images/source_image.jpg" />
          <link rel="shortcut icon" href="../assets/images/favicon.png" />
        </Helmet>
        <section className="header style3" id="main_header">
          <div className="inner">
            <div className="foxy" />
            <h1>Fennec Creative</h1>
            <p className="sub-header">UI/UX Design &amp; Development</p>
            <ul className="actions">
              <li>
                <Link to="/#about" className="button scrolly">
                  <div className="arrow-down">
                    <div className="left animated" />
                    <div className="right animated" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="about" className="main style1 image_container_1">
          <div className="grid-wrapper">
            <div className="col-6">
              <div
                className={
                  this.state.selfAnimate ? 'slide-left show' : 'slide-left'
                }
                title="Cartoon Character of Chelsea"
              />
              <div
                id="to-top"
                className={
                  this.state.selfAnimate
                    ? 'black slide-up show-black'
                    : 'black slide-up'
                }
                title="Background Image"
              />
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Hi, I'm Chelsea</h2>
              </header>
              <p>
                Tell me your vision and I'll build it! I am passionate about
                building visually remarkable websites and applications. I love
                helping companies solve complex problems and reach growth goals
                by creating products that are thoughtful, intuitive, and
                future-proof. In pursuing my passion, I have developed a
                versatile skill set and am always looking for new ways to
                challenge myself and improve.
              </p>
              <p>
                When I'm not hammering code or illustrating graphics I can be
                found slapping my bass or roaming the mountains of Colorado.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="main style3 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major align-center">
                <h2>What I can Do</h2>
              </header>
            </div>
            <div className="col-4 thumbUnit">
              <div className="thumb-unit image fit" id="smallCircle2">
                <Link to="./tech-skills">
                  <img src={pic03} alt="Briefcase of technical skills" />
                </Link>
              </div>
              <Link to="./tech-skills">
                <h3>Technical Skills</h3>
              </Link>
            </div>

            <div className="col-4 thumbUnit">
              <div className="thumb-unit image fit" id="largeCircle">
                <Link to="./ux-process">
                  <img
                    src={pic02}
                    alt="Computer with design comp featured on it"
                  />
                </Link>
              </div>
              <Link to="./ux-process">
                <h3>UX Process</h3>
              </Link>
            </div>
            <div className="col-4 thumbUnit">
              <div className="thumb-unit image fit" id="smallCircle">
                <Link to="./design-skills">
                  <img src={pic01} alt="Scrapbook of designs" />
                </Link>
              </div>
              <Link to="./design-skills">
                <h3>Design Skills</h3>
              </Link>
            </div>
          </div>
        </section>
        <section id="case-studies" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Case Studies</h2>
              </header>
            </div>
            <div className="col-4 thumbUnit">
              <div className="thumb-unit image fit" id="privo">
                <Link to="./privo">
                  <img src={pic05} alt="Privo preview" />
                </Link>
              </div>
              <Link to="./privo">
                <h3>Privo IT</h3>
              </Link>
            </div>
            <div className="col-4 thumbUnit">
              <div className="thumb-unit image fit" id="team-connect">
                <Link to="./teamconnect">
                  <img src={pic04} alt="TeamConnect preview" />
                </Link>
              </div>
              <Link to="./teamconnect">
                <h3>TeamConnect</h3>
              </Link>
            </div>
            <div className="col-4 thumbUnit">
              <div className="thumb-unit image fit" id="connectmevoice">
                <Link to="./connectmevoice">
                  <img src={pic06} alt="ConnectMeVoice preview" />
                </Link>
              </div>
              <Link to="./connectmevoice">
                <h3>ConnectMeVoice</h3>
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </Layout>
    )
  }
}

export default Homepage
