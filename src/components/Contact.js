import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="main in-touch">
        <div className="container">
          <header className="major">
            <h2>Let's Get in Touch</h2>
          </header>
          <p>
            I am always interested in hearing about new projects and
            opportunities!
          </p>
          <ul className="icons">
            <li>
              <a
                href="mailto:cwilliamsdigital@gmail.com"
                className="icon alt fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fenneccreative/"
                className="icon alt fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/chelsea.williams.92560"
                className="icon alt fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Fennec-Creative"
                className="icon alt fa-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Contact
