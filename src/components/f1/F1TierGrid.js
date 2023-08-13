import React from 'react'
import '../../App.css'
import '../../stylesheets/F1TierGrid.css'
import { Link } from 'react-router-dom'

function F1TierGrid () {
  return (
    <>
      <section className="tier-grid-container">
  <div className="left-grid grid">
    <div className="grid-heading">Tier A</div>
    <div className="grid-subheading">Season 4</div>
    <div className="grid-text">Every Friday</div>
    <div className="grid-text">19:00 GMT</div>
    <Link to='/f1/register'><button className="grid-button">Register Now</button></Link>
  </div>
  <div className="center-grid grid">

  <div className="grid-heading">Tier B</div>
    <div className="grid-subheading">Season 4</div>
    <div className="grid-text">Every Friday</div>
    <div className="grid-text">19:00 GMT</div>
    <Link to='/f1/register'><button className="grid-button">Register Now</button></Link>
  </div>
  <div className="right-grid grid">

  <div className="grid-heading">Tier C</div>
    <div className="grid-subheading">Season 4</div>
    <div className="grid-text">Every Sunday</div>
    <div className="grid-text">19:30 GMT</div>
    <Link to='/f1/register'><button className="grid-button">Register Now</button></Link>
  </div>
</section>
</>
  )
}

export default F1TierGrid
