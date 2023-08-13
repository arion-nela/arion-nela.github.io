/* eslint-disable no-unused-vars */
import React from 'react'
import '../../App.css'
import '../../stylesheets/F1Main.css'
import Footer from '../Footer'

function RLMain () {
  return (
    <>
    {/* <SecondaryNav /> */}

      <div style={{ backgroundImage: `linear-gradient(180deg, rgba(73,40,51,0.6) 0%, rgba(73,40,51,0.6) 100%), url(${'/rl-hero.jpg'})` }} className="hero-image">
  <div className="hero-text">
    <h1>Rocket League Tournaments</h1>
  </div>
</div>

<div className="page-content">
    <div className='coming-soon-box'>
<h2>Rocket League Tournaments are abandoned</h2>
<br></br>
<h3>Why are you even on this page 💀</h3>
</div>
<Footer />
</div>
{/* <div className="page-content-full">
<F1NextRace />
</div> */}
</>
  )
}

export default RLMain
