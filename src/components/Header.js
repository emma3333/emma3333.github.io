import React from 'react'
import { Slide } from 'react-slideshow-image'

const slideImages = [
  'https://i.imgur.com/895ueXF.jpg',
  'https://i.imgur.com/7hhzMPo.jpg',
  'https://i.imgur.com/0XLeuQz.jpg'
]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`)
  }
}
const Header = () => {
  return (
    <div id="hero" >
      <h1>Emma Price</h1>
      <h3>Web Developer</h3>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="slide-container ">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>

            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Header
