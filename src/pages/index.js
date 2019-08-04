import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Layout from '../components/layout'

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
    const siteTitle = 'Gatsby Starter - Photon'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <section className="header style3" id="main_header">
          <div className="inner">
            <div class="foxy" />
            <h1>Fennec Creative</h1>
            <p class="sub-header">UX Design / Development</p>
            <ul className="actions">
              <li>
                <Link to="/#about" className="button scrolly">
                  <div class="arrow-down">
                    <div class="left" />
                    <div class="right" />
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
                class={
                  this.state.selfAnimate ? 'slide-left show' : 'slide-left'
                }
                title="Cartoon Character of Chelsea"
              />
              <div
                id="to-top"
                class={
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
                found slapping my bass and roaming the mountains of Colorado.
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
              <div class="thumb-unit image fit" id="smallCircle2">
                <Link to="./code-skills">
                  <img src={pic03} alt="" />
                </Link>
              </div>
              <Link to="./code-skills">
                <h3>Technical Skills</h3>
              </Link>
            </div>

            <div className="col-4 thumbUnit">
              <div class="thumb-unit image fit" id="largeCircle">
                <Link to="./ux-process">
                  <img src={pic02} alt="" />
                </Link>
              </div>
              <Link to="./ux-process">
                <h3>Ux Process</h3>
              </Link>
            </div>
            <div className="col-4 thumbUnit">
              <div class="thumb-unit image fit" id="smallCircle">
                <Link to="./design-skills">
                  <img src={pic01} alt="" />
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
              <div class="thumb-unit image fit" id="privo">
                <Link to="./case-study-one">
                  <img src={pic05} alt="" />
                </Link>
              </div>
              <Link to="./case-study-one">
                <h3>Case Study 1</h3>
              </Link>
            </div>
            <div className="col-4 thumbUnit">
              <div class="thumb-unit image fit" id="team-connect">
                <Link to="./case-study-two">
                  <img src={pic04} alt="" />
                </Link>
              </div>
              <Link to="./case-study-two">
                <h3>TeamConnect</h3>
              </Link>
            </div>
            <div className="col-4 thumbUnit">
              <div class="thumb-unit image fit" id="connectmevoice">
                <Link to="./case-study-three">
                  <img src={pic06} alt="" />
                </Link>
              </div>
              <Link to="./case-study-three">
                <h3>ConnectMeVoice</h3>
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="main in-touch">
          <div className="container">
            <header className="major">
              <h2>Let's Get in Touch</h2>
            </header>
            <p>Sed lacus nascetur ac ante amet sapien.</p>
            <ul className="icons">
              <li>
                <a href="#" className="icon alt fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-envelope">
                  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
