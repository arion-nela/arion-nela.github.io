import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMonacoB3 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Monaco</h1>
        <h2 className="race-subtext">Tier B - Season 3</h2>
        <h3 className="race-subtext">Round 3 of 7</h3>
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
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Antonio Cortes" driverFlag="/es.png" driverInterval="WINNER" driverFastLap="" driverGrid="3" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Emil Lundell" driverFlag="/se.png" driverInterval="+28.516" driverFastLap="" driverGrid="1" driverPosition="2" driverPoints="18"arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Wiardi" driverFlag="/nl.png" driverInterval="+40.379" driverFastLap="" driverGrid="5" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Ondřej Macháč" driverFlag="/cz.png" driverInterval="+51.877" driverFastLap="" driverGrid="2" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Adam" driverFlag="/gb-eng.png" driverInterval="+54.676" driverFastLap="" driverGrid="4" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Snowy" driverFlag="/gb-eng.png" driverInterval="+1 LAP" driverFastLap="" driverGrid="9" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="TsaR" driverFlag="/hu.png" driverInterval="+2 LAPS" driverFastLap="" driverGrid="7" driverPosition="7" driverPoints="6"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="McLaren" driverName="Uklucasw" driverFlag="/gb-eng.png" driverInterval="+2 LAPS" driverFastLap="" driverGrid="16" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Hugyme" driverFlag="/gb-eng.png" driverInterval="+2 LAPS" driverFastLap="" driverGrid="13" driverPosition="9" driverPoints="1" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Eymen Akin" driverFlag="/tr.png" driverInterval="DNF" driverFastLap="" driverGrid="8" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Jordy" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="" driverGrid="6" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Rocky" driverFlag="/de.png" driverInterval="DNF" driverFastLap="" driverGrid="12" driverPosition="-" driverPoints="0"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Durrrp" driverFlag="/dk.png" driverInterval="DNF" driverFastLap="" driverGrid="11" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Bolar" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="" driverGrid="10" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Vade" driverFlag="/se.png" driverInterval="DNF" driverFastLap="" driverGrid="14" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Antonio Cortes</h3>
          </div>
        </div>
    </div>
  )
}
