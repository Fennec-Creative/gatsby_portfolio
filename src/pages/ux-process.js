import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Contact from '../components/Contact'

import pic01 from '../assets/images/discover.png'
import pic02 from '../assets/images/strategy.png'
import pic03 from '../assets/images/design.png'
import pic04 from '../assets/images/develop.png'
import pic05 from '../assets/images/launch.png'
import pic06 from '../assets/images/improvements.png'

class UxProcess extends React.Component {
  componentDidMount() {
    let header = document.querySelector('.menu')
    header.classList.add('menu-dark')
    console.log(header)
  }

  render() {
    return (
      <Layout>
        <section class="header header-light-theme style4">
          <div className="inner padding-extra">
            <h1>UX Process</h1>
            <p>Subtext goes here</p>
          </div>
        </section>

        <section id="ux_header" className="main style6">
          <div className="grid-wrapper flex">
            <div className="col-5 flex-one">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>

            <div className="col-7 flex-two">
              <h2>Discovery</h2>
              <p>
                I develop a deep understanding of the job to be done while
                establishing project stake holders, scope, user definitions, and
                ultimately the end goals to be accomplished. I consider starting
                a project with a clearly defined ending in mind vital to
                success.
              </p>
              <div className="grid-wrapper">
                <div className="col-6">
                  <ul>
                    <li>Determine Scope</li>
                    <li>Define SMART Goals</li>
                    <li>User Personas and Storyboards</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Use Cases and Flows</li>
                    <li>Data and Asset Collection</li>
                    <li>Rough Sketches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="discovery" className="main style1">
          <div className="grid-wrapper flex">
            <div className="col-7 flex-two">
              <h2>Strategy</h2>
              <p>
                I define the end product and experience by researching users and
                competitors, collecting data, and establishing a strategy.
                During this step I emphasize the importance of using data and
                insights to discern user assumptions.
              </p>
              <div className="grid-wrapper">
                <div className="col-6">
                  <ul>
                    <li>User Research</li>
                    <li>Competitor Analysis</li>
                    <li>Website Architecture and Strategy </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Wireframes &amp; Prototypes</li>
                    <li>Experience Maps</li>
                    <li>Heuristic Evaluation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-5 flex-one">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="design" className="main style4">
          <div className="grid-wrapper flex">
            <div className="col-5 flex-one">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </div>

            <div className="col-7 flex-two">
              <h2>Design</h2>
              <p>
                I design an interactive user interface that engages users and
                guides them to intuitive conversion points. This is a
                collaborative and iterative process, and relies on active
                involvement with team members, the client, as well as other
                stake holders.
              </p>
              <div className="grid-wrapper">
                <div className="col-6">
                  <ul>
                    <li>Style Guides</li>
                    <li>Strategy implementation</li>
                    <li>Team Collaboration</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>High-Fidelity Mockups</li>
                    <li>Interaction Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="production" className="main style5">
          <div className="grid-wrapper flex">
            <div className="col-7 flex-two">
              <h2>Production</h2>
              <p>
                I develop a fully-functional website or application and commence
                an in-depth quality control process to rule potential speed and
                performance issues. I make an effort to continually research
                best practices and technologies so that my work will stand the
                test of time and suite my clients ever-expanding needs.
              </p>
              <div className="grid-wrapper">
                <div className="col-6">
                  <ul>
                    <li>Design Finalization</li>
                    <li>Development</li>
                    <li>Speed Tests</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Quality Assurance</li>
                    <li>Feedback and Updates</li>
                    <li>Optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-5 flex-one">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="launch" className="main style1">
          <div className="grid-wrapper flex">
            <div className="col-5 flex-one">
              <span className="image fit">
                <img src={pic05} alt="" />
              </span>
            </div>

            <div className="col-7 flex-two">
              <h2>Launch</h2>
              <p>
                I finalize my project by putting it through rigorous testing,
                client approval, and team evaluation. Once complete, I oversee
                the launching of the final project while closely monitoring for
                potential issues.
              </p>
              <div className="grid-wrapper">
                <div className="col-6">
                  <ul>
                    <li>KPI Testing</li>
                    <li>A/B Testing</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Evaluation</li>
                    <li>Publication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="improvements" className="main style4">
          <div className="grid-wrapper flex">
            <div className="col-7 flex-two">
              <h2>Continual Improvements</h2>
              <p>
                Once my project is live, I establish a continual improvement
                plan using data harvested from live users over time. Once
                sufficient time has passed, I analyze the collected data to draw
                conclusions and optimize the project so that it is as polished
                and effective as possible.
              </p>
              <div className="grid-wrapper">
                <div className="col-6">
                  <ul>
                    <li>ata Collection</li>
                    <li>Analytics and Reporting </li>
                    <li>Identification of Improvements</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>QHypothesis testing</li>
                    <li>Updates and Optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-5 flex-one">
              <span className="image fit">
                <img src={pic06} alt="" />
              </span>
            </div>
          </div>
        </section>

        <Contact />
      </Layout>
    )
  }
}

export default UxProcess
