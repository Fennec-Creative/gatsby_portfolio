import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import React from 'react'
import pic01 from '../assets/images/ECS_white_paper.png'
import pic02 from '../assets/images/Inteq_white_paper.png'

class WhitePaperSlider extends React.Component {
  render() {
    return (
      <AwesomeSlider>
        <div data-src={pic01} />
        <div data-src={pic02} />
      </AwesomeSlider>
    )
  }
}

export default WhitePaperSlider
