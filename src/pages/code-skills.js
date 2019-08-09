import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Contact from '../components/Contact'

const CodeSkills = () => (
  <Layout>
    <section id="one" className="header style3">
      <div className="grid-wrapper padding-extra">
        <div className="col-12">
          <header className="major special">
            <h1>Technical Knowledge</h1>
          </header>
        </div>
        <div className="col-3" id="design-box">
          <div className="float float_right">
            <h3 className="hdev special dark_blue">Design</h3>
            <ul>
              <li>Adobe Suite</li>
              <li>Sketch</li>
              <li>Invision</li>
              <li>GIMP</li>
              <li />
            </ul>
          </div>
        </div>
        <div className="col-6" id="pieChart">
          <svg
            version="1.1"
            id="Layer_2"
            x="0px"
            y="0px"
            width="396.504px"
            height="396.896px"
            viewBox="0 0 396.504 396.896"
            enable-background="new 0 0 396.504 396.896"
          >
            <path
              class="blue"
              fill="#B8D8D8"
              stroke="#467089"
              stroke-width="2"
              stroke-dasharray="1000"
              d="M193.986,39.658C108.371,42.047,39.7,112.202,39.7,198.396c0,87.703,71.097,158.8,158.8,158.8
  c32.839,0,63.352-9.968,88.674-27.044l22.711,32.57c-31.76,21.57-70.101,34.174-111.385,34.174C88.871,396.896,0,308.024,0,198.396
  C0,90.271,86.45,2.337,194-0.055"
            >
              <animate
                attributeName="fill"
                from="#B8D8D8"
                to="#467089"
                dur=".5s"
                begin="1s"
                fill="freeze"
              />

              <animate
                attributeName="stroke-dashoffset"
                from="1000"
                to="0"
                dur="2s"
                fill="freeze"
              />
            </path>

            <path
              class="pink"
              fill="#B8D8D8"
              stroke="#FE5F55"
              stroke-width="2"
              stroke-dasharray="1000"
              d="M294.665,324.778c38.066-29.011,62.139-74.827,62.139-126.383C356.804,112.868,289,43.131,204,39.725V0
  c107,3.426,192.504,90.939,192.504,198.396c0,64.936-30.933,122.588-79.137,158.803"
            >
              <animate
                attributeName="fill"
                from="#B8D8D8"
                to="#FE5F55"
                dur=".5s"
                begin="1s"
                fill="freeze"
              />

              <animate
                attributeName="stroke-dashoffset"
                from="1000"
                to="0"
                dur="2s"
                fill="freeze"
              />
            </path>
          </svg>
        </div>
        <div className="col-3" id="dev-box">
          <div className="float float_left">
            <h3 className="hdev special primary_pink">Development</h3>
            <ul>
              <li>DHTML</li>
              <li>ReactJS</li>
              <li>Python</li>
              <li>GIT</li>
              <li>AJAX/JSON</li>
            </ul>
          </div>
        </div>
        <div className="col-12 small_screens_only">
          <h3>
            <span className="dark_blue">Design</span> &amp;{' '}
            <span className="primary_pink">Code </span>
          </h3>
          <ul>
            <li>Adobe Suite</li>
            <li>Sketch</li>
            <li>Invision</li>
            <li>GIMP</li>
            <li>DHTML</li>
            <li>ReactJS</li>
            <li>Python</li>
            <li>GIT</li>
            <li>AJAX/JSON</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="working-knowledge" className="main style4">
      <div className="grid-wrapper">
        <div className="col-12">
          <h2 className="align-center">Working Knowledge</h2>
        </div>
        <div className="col-6">
          <div className="working-list">
            <ul>
              <li>React Native</li>
              <li>Redux</li>
              <li>AngularJS</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="working-list">
            <ul>
              <li>Django</li>
              <li>MySQL</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="bar-graph" className="main style1">
      <div className="grid-wrapper">
        <div className="col-12">
          <h2 className="align-center">Skill Mastery</h2>
          <div className="barChart">
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="100%"
              height="27em"
              viewBox="0 0 967 489"
              enable-background="new 0 0 967 579"
              preserveAspectRatio="xMinYMin"
            >
              <rect
                class="bar"
                id="bar1"
                x="55"
                y="5.45"
                fill="#FE5F55"
                width="104"
                height="480"
              />
              <rect
                class="bar"
                id="bar2"
                x="238"
                y="60"
                fill="#7A9E9F"
                width="104"
                height="425"
              />
              <rect
                class="bar"
                id="bar3"
                x="424"
                y="75"
                fill="#FE5F55"
                width="102"
                height="410"
              />
              <rect
                class="bar"
                id="bar4"
                x="610"
                y="35"
                fill="#7A9E9F"
                width="103"
                height="449"
              />
              <rect
                class="bar pop"
                id="bar5"
                x="795"
                y="438"
                fill="#FE5F55"
                width="102"
                height="46"
              />
              <rect id="bar6" y="478" fill="#656565" width="967" height="11" />
            </svg>
            <div className="skillList">
              <div className="skillItem">
                <p>UX Strategy</p>
              </div>
              <div className="skillItem">
                <p>Coding</p>
              </div>
              <div className="skillItem">
                <p>Research</p>
              </div>
              <div className="skillItem">
                <p>Troubleshooting</p>
              </div>
              <div className="skillItem">
                <p>Dancing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Contact />
  </Layout>
)

export default CodeSkills
