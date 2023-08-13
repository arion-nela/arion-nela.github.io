/* eslint-disable no-unused-vars */
import React from 'react'
import '../../App.css'
import PropTypes from 'prop-types'
import '../../stylesheets/F1Main.css'
import '../../stylesheets/RLTournament.css'
import HeroImage from '../HeroImage'
import { Link } from 'react-router-dom'

function RLPlayoffs (props) {
  return (
    <>
<HeroImage heroBackground="/rl-tourn-hero.jpg" heroText="22-23 RL Open Challenge"/>

<div className="page-content">
<div className="tournament-details-box">
  <h2>2022-2023 Rocket League Open Challenge<br></br>{props.tournamentName}</h2>
  <h2>{props.tournamentPrize} USD Prize Pool</h2>
  <h3>{props.tournamentDate}<br></br>19:30 UK TIME</h3>
  <h4>Game mode: Soccar</h4>
  <h4 style={{ textTransform: 'none' }}>TEAM SIZE: 1v1</h4>
  <h4>Region: Europe</h4>
  <br></br>
  <Link to="/rl/register"><button>REGISTER NOW</button></Link>
  <h6>This tournament is not affiliated with or sponsored by Psyonix LLC or Rocket League Esports</h6>
</div>
<hr className="tournament-hr"></hr>
<div className="tournament-info-box">
  <h2>Format</h2>
  <p>The 2022-2023 Autumn Open Challenge consists of 3 qualifier events and a playoff event. Within
         all these qualifier events, players collect ranking points by winning games. Ranking points determine where players will be placed on the rankings. Players are allowed to enter as many qualifier events as they wish. Therfore the
           more qualifier events a player enters, the better chance they have of reaching the Playoffs.</p>
           <h3>HOW DO I QUALIFY FOR THE PLAYOFFS?</h3>
           <ul>
            <li>The top 8 ranked players will be eligible to compete in the Playoffs. These are the 8 players with the most ranking points.</li>
            <li>After all 3 qualifier events have finished, tournament admins will reach out to all the players that have secured a spot in the Playoffs. So make sure that you have joined our <a href="https://discord.gg/jKeXr7mcv5" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: '#c18794' }}>Discord Server</a>.</li>
            <li>Some players who finish outside of the top 8 in the rankings may still be able to compete in the Playoffs if a qualified player is unavailable. So it is important that all players pay attention to their discord.</li>
          </ul>
</div>
<hr className="tournament-hr"></hr>
<div className="tournament-info-box">
  <h2>Prize Pool</h2>
  <p>{props.tournamentPrize} USD and Ranking Points are spread among the players as seen below:</p>
  <table className="prize-table">
    <tr>
      <th className="prize-header">Place</th>
      <th className="prize-header">$ USD</th>
      <th className="prize-header">Points</th>
    </tr>
    <tr className="prize-winner">
      <td className="prize-data">1st</td>
      <td className="prize-data">$26</td>
      <td className="prize-table-data">32</td>
    </tr>
    <tr className="prize-runner-up">
      <td className="prize-data">2nd</td>
      <td className="prize-data">$12</td>
      <td className="prize-data">24</td>
    </tr>
    <tr className="prize-third">
      <td className="prize-data">3rd-4th</td>
      <td className="prize-data">$6</td>
      <td className="prize-data">18</td>
    </tr>
    <tr>
      <td className="prize-data">5th-8th</td>
      <td className="prize-data">$2.50</td>
      <td className="prize-data">12</td>
    </tr>
  </table>
</div>
<hr className="tournament-hr"></hr>
<div className="tournament-info-box">
  <h2>Arenas</h2>
  <h4>Round 1 - Mannfield (Night)</h4>
  <h4>Semi Finals - DFH Stadium</h4>
  <h4>Grand Final - Champions Field</h4>
</div>
<div style={{ textAlign: 'center' }}><Link to="/rl/register"><button>REGISTER NOW</button></Link></div>
</div>
</>
  )
}

export default RLPlayoffs

RLPlayoffs.propTypes = {
  tournamentName: PropTypes.string.isRequired,
  tournamentPrize: PropTypes.string.isRequired,
  tournamentDate: PropTypes.number.isRequired
}
