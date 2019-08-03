import React from 'react'
import Link from 'gatsby-link'

class Header extends React.Component {
  //Toggle first dropdown on Mobile
  toggleHidden() {
    document.querySelector('.menu').classList.toggle('showMenu')
  }

  //toggle second dropdown on Mobile
  //and a toggle item here
  dropdownOneStart() {
    document.querySelector('#dropdown_1').classList.toggle('showDropdown')
  }

  dropdownTwoStart() {
    document.querySelector('#dropdown_2').classList.toggle('showDropdown')
  }

  render() {
    return (
      <section className={this.props.scrolled ? 'nav sticky' : 'nav'} id="nav">
        <nav>
          <ul
            className={
              this.props.isLight ? 'menu menu-light' : 'menu menu-dark'
            }
          >
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link
                to="/#skills"
                className="dropdownStart"
                id="1"
                onClick={this.dropdownOneStart}
              >
                Skills <span className="arrow">&#9660;</span>
              </Link>
              <ul className="dropdown" id="dropdown_1">
                <li>
                  <Link to="./code-skills">Code Skills</Link>
                </li>
                <li>
                  <Link to="./ux-process">UX Process</Link>
                </li>
                <li>
                  <Link to="./design-skills/" class="no-border">
                    Design Skills
                  </Link>
                </li>
              </ul>
            </li>
            <div id="nav_logo">
              <Link to="/">
                <div id="header_logo">
                  <span className="icon major fa-cloud" />
                </div>
              </Link>
            </div>
            <li>
              <Link
                to="/#case-studies"
                className="dropdownStart"
                id="2"
                onClick={this.dropdownTwoStart}
              >
                Case Studies <span className="arrow">&#9660;</span>
              </Link>
              <ul className="dropdown" id="dropdown_2">
                <li>
                  <Link to="./case-study-one/">Case Study 1</Link>
                </li>
                <li>
                  <Link to="./case-study-two/">Case Study 2</Link>
                </li>
                <li>
                  <Link to="./case-study-three/" class="no-border">
                    Case Study 3
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
          <div className="toggle" onClick={this.toggleHidden}>
            <span className="span" id="one" />
            <span className="span" id="two" />
          </div>
        </nav>
      </section>
    )
  }
}

export default Header
