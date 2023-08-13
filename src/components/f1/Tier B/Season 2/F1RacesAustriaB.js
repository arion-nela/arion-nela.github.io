import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesAustriaB2 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Austria</h1>
        <h2 className="race-subtext">Tier B - Season 2</h2>
        <h3 className="race-subtext">Round 6 of 12</h3>
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
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Vade" driverFlag="/se.png" driverInterval="WINNER" driverFastLap="" driverGrid="7" driverPosition="1" driverPoints="27" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Sp3xtre" driverFlag="/se.png" driverInterval="+2.429" driverFastLap="" driverGrid="13" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="HackoDK" driverFlag="/dk.png" driverInterval="+6.011" driverFastLap="" driverGrid="15" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Justin Janson" driverFlag="/nl.png" driverInterval="+7.127" driverFastLap="" driverGrid="2" driverPosition="4" driverPoints="19" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Rocky" driverFlag="/de.png" driverInterval="+8.703" driverFastLap="1:06.480" driverGrid="8" driverPosition="5" driverPoints="11" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="CountMuttly" driverFlag="/dk.png" driverInterval="+8.715" driverFastLap="" driverGrid="9" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Bartusg5" driverFlag="/hu.png" driverInterval="+10.752" driverFastLap="" driverGrid="4" driverPosition="7" driverPoints="11" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Lukáš Hendrych" driverFlag="/cz.png" driverInterval="+13.240" driverFastLap="" driverGrid="3" driverPosition="8" driverPoints="10" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="+13.814" driverFastLap="" driverGrid="1" driverPosition="9" driverPoints="10" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="McLaren" driverName="Eymen Akin" driverFlag="/tr.png" driverInterval="+1 LAP" driverFastLap="" driverGrid="5" driverPosition="10" driverPoints="5" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Bald" driverFlag="/ie.png" driverInterval="+1 LAP" driverFastLap="" driverGrid="14" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Uklucasw" driverFlag="/gb-eng.png" driverInterval="+2 LAPS" driverFastLap="" driverGrid="10" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Hidlex" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="" driverGrid="6" driverPosition="-" driverPoints="3" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Zerotix" driverFlag="/de.png" driverInterval="DNF" driverFastLap="" driverGrid="11" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Anoldenemy" driverFlag="/hr.png" driverInterval="DNF" driverFastLap="" driverGrid="12" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Sp3xtre</h3>
          </div>
        </div>
    </div>
  )
}
