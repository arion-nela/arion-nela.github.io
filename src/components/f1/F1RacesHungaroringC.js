import React from 'react'
import '../../stylesheets/F1ResultsPage.css'
import F1RaceResult from './F1RaceResult'

export default function F1RacesHungaroringC () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Hungaroring</h1>
        <h2 className="race-subtext">Tier C - Season 1</h2>
        <h3 className="race-subtext">Round 7 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Rinky" driverFlag="/nl.png" driverInterval="49:02.463" driverFastLap="1:18.328" driverGrid="4" driverPosition="1" driverPoints="19" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Kudos" driverFlag="/de.png" driverInterval="+8.586" driverFastLap="1:19.626" driverGrid="1" driverPosition="2" driverPoints="14" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Br0wn" driverFlag="/de.png" driverInterval="+12.022" driverFastLap="1:19.379" driverGrid="2" driverPosition="3" driverPoints="12" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="ArionBoi" driverFlag="/al.png" driverInterval="+41.194" driverFastLap="1:17.578" driverGrid="2" driverPosition="4" driverPoints="10" arrow="fa-solid fa-angle-down" lapColor="#ff00ff" />
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="geetype" driverFlag="/se.png" driverInterval="+58.172" driverFastLap="1:20.299" driverGrid="10" driverPosition="5" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Kaiba" driverFlag="/eg.png" driverInterval="+1 Lap" driverFastLap="1:20.590" driverGrid="11" driverPosition="6" driverPoints="6" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Steen" driverFlag="/nl.png" driverInterval="+1 Lap" driverFastLap="1:20.050" driverGrid="3" driverPosition="7" driverPoints="4" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Aspec" driverFlag="/gb.png" driverInterval="+1 Lap" driverFastLap="1:22.340" driverGrid="2" driverPosition="8" driverPoints="2" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="traumatized" driverFlag="/it.png" driverInterval="+1 Lap" driverFastLap="1:22.212" driverGrid="4" driverPosition="9" driverPoints="1" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Myron" driverFlag="/ua.png" driverInterval="+2 Laps" driverFastLap="1:22.149" driverGrid="1" driverPosition="10" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="JB" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="1:19.729" driverGrid="5" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Arab" driverFlag="/us.png" driverInterval="DNF" driverFastLap="1:20.061" driverGrid="" driverPosition="-" driverPoints="0" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Egamer" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="1:20.761" driverGrid="6" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Lean" driverFlag="/de.png" driverInterval="DNF" driverFastLap="1:22.343" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Guri" driverFlag="/ng.png" driverInterval="DNF" driverFastLap="" driverGrid="2" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Kai" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="" driverGrid="8" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Rob" driverFlag="/us.png" driverInterval="DNF" driverFastLap="" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>rinky</h3>
          </div>
        </div>
    </div>
  )
}
