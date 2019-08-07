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
          <ul className="menu">
            <li>
              <Link to="/#main_header" onClick={this.toggleHidden}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={this.toggleHidden}>
                About
              </Link>
            </li>
            <li className="small_only">
              <div
                className="dropdownStart small_menu_link"
                id="1"
                onClick={this.dropdownOneStart}
              >
                Skills <span className="arrow">&#9660;</span>
              </div>
              <ul className="dropdown" id="dropdown_1">
                <li>
                  <Link to="./code-skills">Code Skills</Link>
                </li>
                <li>
                  <Link to="./ux-process">UX Process</Link>
                </li>
                <li>
                  <Link to="./design-skills/" className="no-border">
                    Design Skills
                  </Link>
                </li>
              </ul>
            </li>
            <li className="full_only">
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
                  <Link to="./design-skills/" className="no-border">
                    Design Skills
                  </Link>
                </li>
              </ul>
            </li>
            <li className="small_only">
              <div
                className="dropdownStart small_menu_link"
                id="2"
                onClick={this.dropdownTwoStart}
              >
                Case Studies <span className="arrow">&#9660;</span>
              </div>
              <ul className="dropdown" id="dropdown_2">
                <li>
                  <Link to="./case-study-one/">Case Study 1</Link>
                </li>
                <li>
                  <Link to="./case-study-two/">Case Study 2</Link>
                </li>
                <li>
                  <Link to="./case-study-three/" className="no-border">
                    Case Study 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="full_only">
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
                  <Link to="./case-study-three/" className="no-border">
                    Case Study 3
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#contact" onClick={this.toggleHidden}>
                Contact
              </Link>
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
