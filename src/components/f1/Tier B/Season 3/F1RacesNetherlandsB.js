import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesNetherlandsB3 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Netherlands</h1>
        <h2 className="race-subtext">Tier B - Season 3</h2>
        <h3 className="race-subtext">Round 7 of 7</h3>
        <table className="results-table">
        <tr>
            <th></th>
            <th className="flag-result"></th>
            <th></th>
            <th className="team-image-standing"></th>
            <th className="grid-position"></th>
            <th><h6>Interval</h6></th>
            <th className="fastest-lap"><h6>Fastest Lap</h6></th>
            <th><h6>Pts</h6></th>
        </tr>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Adam" driverFlag="/gb-eng.png" driverInterval="WINNER" driverFastLap="" driverGrid="1" driverPosition="1" driverPoints="25"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Emil Lundell" driverFlag="/se.png" driverInterval="+0.020" driverFastLap="" driverGrid="2" driverPosition="2" driverPoints="18"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Hugyme" driverFlag="/gb-eng.png" driverInterval="+11.443" driverFastLap="" driverGrid="6" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Dopichu" driverFlag="/fi.png" driverInterval="+19.304" driverFastLap="1:12.110" driverGrid="11" driverPosition="4" driverPoints="13" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Ukrain Aim" driverFlag="/az.png" driverInterval="+47.026" driverFastLap="" driverGrid="8" driverPosition="5" driverPoints="10"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Bald" driverFlag="/ie.png" driverInterval="+1 LAP" driverFastLap="" driverGrid="5" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Uklucasw" driverFlag="gb-eng.png" driverInterval="DNF" driverFastLap="" driverGrid="7" driverPosition="-" driverPoints="0" />
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Dopichu</h3>
          </div>
        </div>
    </div>
  )
}
