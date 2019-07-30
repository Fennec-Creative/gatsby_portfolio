import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import React from 'react'
import pic01 from '../assets/images/anexinet_ebook_1.png'
import pic02 from '../assets/images/anexinet_ebook_2.png'
import pic03 from '../assets/images/anexinet_ebook_3.png'

class EBookSlider extends React.Component {
  render() {
    return (
      <AwesomeSlider>
        <div data-src={pic01} />
        <div data-src={pic02} />
        <div data-src={pic03} />
      </AwesomeSlider>
    )
  }
}

export default EBookSlider
