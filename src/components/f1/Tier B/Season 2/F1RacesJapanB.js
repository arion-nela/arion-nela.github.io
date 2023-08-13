import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesJapanB2 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Japan</h1>
        <h2 className="race-subtext">Tier B - Season 2</h2>
        <h3 className="race-subtext">Round 4 of 12</h3>
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
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="McLaren" driverName="Stra" driverFlag="/rs.png" driverInterval="WINNER" driverFastLap="" driverGrid="4" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Justin Janson" driverFlag="/nl.png" driverInterval="+8.769" driverFastLap="" driverGrid="6" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Vade" driverFlag="/se.png" driverInterval="+14.562" driverFastLap="" driverGrid="15" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Bartusg5" driverFlag="/hu.png" driverInterval="+15.392" driverFastLap="" driverGrid="7" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="CountMuttly" driverFlag="/dk.png" driverInterval="+29.690" driverFastLap="" driverGrid="16" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Anoldenemy" driverFlag="/hr.png" driverInterval="+30.073" driverFastLap="" driverGrid="14" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Bald" driverFlag="/ie.png" driverInterval="+30.616" driverFastLap="" driverGrid="13" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Jasper Fitzgerald-Woolfe" driverFlag="/gb-eng.png" driverInterval="+31.056" driverFastLap="" driverGrid="8" driverPosition="8" driverPoints="4"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Uklucasw" driverFlag="/gb-eng.png" driverInterval="+32.314" driverFastLap="" driverGrid="12" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Manuel" driverFlag="/it.png" driverInterval="+48.668" driverFastLap="" driverGrid="11" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="+1:12.378" driverFastLap="1:30.399" driverGrid="2" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-down" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Zerotix" driverFlag="/de.png" driverInterval="DNF" driverFastLap="" driverGrid="10" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Lukáš Hendrych" driverFlag="/cz.png" driverInterval="DNF" driverFastLap="" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="HackoDK" driverFlag="/dk.png" driverInterval="DNF" driverFastLap="" driverGrid="9" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Kjaerbo" driverFlag="/dk.png" driverInterval="DNF" driverFastLap="" driverGrid="5" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Sp3xtre" driverFlag="/se.png" driverInterval="DNF" driverFastLap="" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Vade</h3>
          </div>
        </div>
    </div>
  )
}
