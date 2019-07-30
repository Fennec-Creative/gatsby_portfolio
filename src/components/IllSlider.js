import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import React from 'react'
import pic01 from '../assets/images/cthulu_illustration.png'
import pic02 from '../assets/images/lil_death_illustration.png'

class IllSlider extends React.Component {
  render() {
    return (
      <AwesomeSlider>
        <div data-src={pic01} />
        <div data-src={pic02} />
      </AwesomeSlider>
    )
  }
}

export default IllSlider
