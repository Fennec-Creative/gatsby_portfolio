import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import React from 'react'

class Slider extends React.Component {
  render() {
    return (
      <AwesomeSlider>
        <div
          data-src={
            '/static/cthulu_illustration-ce92c9ea8b7233ebbcc300c28687c434.png'
          }
        />
        <div data-src="/static/lil_death_illustration-37381117db3530329f85aec002af1517.png" />
      </AwesomeSlider>
    )
  }
}

export default Slider
