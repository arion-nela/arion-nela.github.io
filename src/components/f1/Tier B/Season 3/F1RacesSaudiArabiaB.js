import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesSaudiArabiaB3 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Saudi Arabia</h1>
        <h2 className="race-subtext">Tier B - Season 3</h2>
        <h3 className="race-subtext">Round 6 of 7</h3>
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
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Emil Lundell" driverFlag="/se.png" driverInterval="WINNER" driverFastLap="" driverGrid="1" driverPosition="1" driverPoints="33"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Adam" driverFlag="/gb-eng.png" driverInterval="+3.038" driverFastLap="" driverGrid="2" driverPosition="2" driverPoints="25"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="HackoDK" driverFlag="/dk.png" driverInterval="+7.052" driverFastLap="" driverGrid="5" driverPosition="3" driverPoints="19" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Dopichu" driverFlag="/fi.png" driverInterval="+7.075" driverFastLap="" driverGrid="8" driverPosition="4" driverPoints="13" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Hugyme" driverFlag="/gb-eng.png" driverInterval="+9.758" driverFastLap="" driverGrid="7" driverPosition="5" driverPoints="17"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="arionboi" driverFlag="/al.png" driverInterval="+12.473" driverFastLap="" driverGrid="3" driverPosition="6" driverPoints="14" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Lando" driverFlag="/pl.png" driverInterval="+14.176" driverFastLap="" driverGrid="9" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Kisiel" driverFlag="/pl.png" driverInterval="+41.203" driverFastLap="1:28.548" driverGrid="14" driverPosition="8" driverPoints="5" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Kai" driverFlag="/gb-eng.png" driverInterval="DNF" driverFastLap="" driverGrid="4" driverPosition="-" driverPoints="5" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Spyzer" driverFlag="nl.png" driverInterval="DNF" driverFastLap="" driverGrid="11" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Vaipz" driverFlag="/dk.png" driverInterval="DNF" driverFastLap="" driverGrid="13" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="bartusg5" driverFlag="/hu.png" driverInterval="DNF" driverFastLap="" driverGrid="6" driverPosition="-" driverPoints="3" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Uklucasw" driverFlag="gb-eng.png" driverInterval="DNF" driverFastLap="" driverGrid="12" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
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
