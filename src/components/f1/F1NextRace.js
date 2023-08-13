import React from 'react'
import '../../App.css'
import '../../stylesheets/F1NextRace.css'
import { Link } from 'react-router-dom'

function F1NextRace () {
  return (
    <>
      <section className="next-race-container">
        <h2 className="next-race-heading">Next Race</h2>
        <hr className="header-row"></hr>
        <div className="view-all-container">
        <Link to='/f1/races'><p className="view-all-link">View all races</p></Link>
        </div>
        <div className="next-race-box">
          <div className="next-race-tier-container">
              <div className="next-race-tier-left">
              <div className="flag-img-container">
              <img className="flag-img" src="/qa.png"/>
              </div>
              <h3 className="race-tier">Tier A</h3>
              <h2 className="race-title">Qatar</h2>
              <h4 className="race-date">Friday, 18th August 2023</h4>
              <h4 className="race-time">19:00 BST</h4>
              </div>
              <div className="next-race-tier-center">
              <div className="flag-img-container">
              <img className="flag-img" src="/blank.png"/>
              </div>
              <h3 className="race-tier">The Cup</h3>
              <h2 className="race-title">???</h2>
              <h4 className="race-date">Wednesday, 23rd August 2023</h4>
              <h4 className="race-time">19:30 BST</h4>
              </div>
              <div className="next-race-tier-right">
              <div className="flag-img-container">
              <img className="flag-img" src="/us.png"/>
              </div>
              <h3 className="race-tier">Assetto Corsa</h3>
              <h2 className="race-title">Long Beach</h2>
              <h4 className="race-date">Sunday, 2nd September 2023</h4>
              <h4 className="race-time">17:30 BST</h4>
              </div>
          </div>
          <div className="buttons-container">
            <div>
            <Link to='/f1/register'><button className="tier-button">Register Now</button></Link>
            </div>
            <div>
            <Link to='https://discord.gg/10controls'><button className="tier-button">Register Now</button></Link>
            </div>
            <div>
            <Link to='https://10circuit.com/register'><button className="tier-button">Register Now</button></Link>
            </div>
          </div>
        </div>
</section>
</>
  )
}

export default F1NextRace
