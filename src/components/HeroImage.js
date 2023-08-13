/* eslint-disable no-unused-vars */
import React from 'react'
import '../App.css'
import '../stylesheets/F1Main.css'
import PropTypes from 'prop-types'

function HeroImage (props) {
  return (
    <>
    {/* <SecondaryNav /> */}

      <div className="hero-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(73,40,51,0.6) 0%, rgba(73,40,51,0.6) 100%), url(${props.heroBackground})` }}>
  <div className="hero-text">
    <h1>{props.heroText}</h1>
  </div>
</div>

</>
  )
}

export default HeroImage

HeroImage.propTypes = {
  heroBackground: PropTypes.string.isRequired,
  heroText: PropTypes.string.isRequired
}
