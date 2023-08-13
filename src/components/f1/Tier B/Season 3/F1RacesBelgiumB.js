import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesBelgiumB3 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Belgium</h1>
        <h2 className="race-subtext">Tier B - Season 3</h2>
        <h3 className="race-subtext">Round 4 of 7</h3>
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
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Adam" driverFlag="/gb-eng.png" driverInterval="WINNER" driverFastLap="" driverGrid="10" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Ondřej Macháč" driverFlag="/cz.png" driverInterval="+10.303" driverFastLap="" driverGrid="2" driverPosition="2" driverPoints="25"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Wiardi" driverFlag="/nl.png" driverInterval="+13.348" driverFastLap="" driverGrid="4" driverPosition="3" driverPoints="20" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Rocky" driverFlag="/de.png" driverInterval="+23.544" driverFastLap="" driverGrid="5" driverPosition="4" driverPoints="16"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Emil Lundell" driverFlag="/se.png" driverInterval="+25.665" driverFastLap="" driverGrid="1" driverPosition="5" driverPoints="18" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="HackoDK" driverFlag="/dk.png" driverInterval="+28.305" driverFastLap="" driverGrid="7" driverPosition="6" driverPoints="10" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Antonio Cortes" driverFlag="/es.png" driverInterval="+28.701" driverFastLap="1:46.278" driverGrid="3" driverPosition="7" driverPoints="12" arrow="fa-solid fa-angle-down"  lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Bolar" driverFlag="/nl.png" driverInterval="+31.492" driverFastLap="" driverGrid="15" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="bartusg5" driverFlag="/hu.png" driverInterval="+32.260" driverFastLap="" driverGrid="9" driverPosition="9" driverPoints="2"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Uklucasw" driverFlag="gb-eng.png" driverInterval="+48.216" driverFastLap="" driverGrid="11" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Durrrp" driverFlag="/dk.png" driverInterval="+1:00.240" driverFastLap="" driverGrid="6" driverPosition="11" driverPoints="3" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Vade" driverFlag="/se.png" driverInterval="DNF" driverFastLap="" driverGrid="13" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Spyzer" driverFlag="nl.png" driverInterval="DNF" driverFastLap="" driverGrid="8" driverPosition="-" driverPoints="1" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Dopichu" driverFlag="/fi.png" driverInterval="DNF" driverFastLap="" driverGrid="12" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Hugyme" driverFlag="/gb-eng.png" driverInterval="DNF" driverFastLap="" driverGrid="14" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Adam</h3>
          </div>
        </div>
    </div>
  )
}
