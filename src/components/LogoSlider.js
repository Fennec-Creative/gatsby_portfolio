import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import React from 'react'
import pic01 from '../assets/images/porter_construction_logo.jpg'
import pic02 from '../assets/images/radio_logo.jpg'
import pic03 from '../assets/images/housed_working_healthy_logo.jpg'

class LogoSlider extends React.Component {
  render() {
    return (
      <AwesomeSlider>
        <div data-src={pic02} />
        <div data-src={pic01} />
        <div data-src={pic03} />
      </AwesomeSlider>
    )
  }
}

export default LogoSlider
