import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <section id="five" className="main in-touch">
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
    )
  }
}

export default Contact
