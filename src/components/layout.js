import React from 'react'
import '../assets/scss/main.scss'

import Footer from './Footer'
import Header from './Header'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
      scrolled: false,
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)

    window.addEventListener('scroll', () => {
      let isTop
      if (window.innerWidth > 650) {
        isTop = window.scrollY < 400
      } else {
        isTop = false
      }

      if (isTop !== true) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }
    })
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }

    //window.removeEventListene('scroll')
  }

  render() {
    const { children } = this.props

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('smooth-scroll')('a[href*="#"]')
    }

    return (
      <div className={`body ${this.state.loading}`}>
        <Header scrolled={this.state.scrolled} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
