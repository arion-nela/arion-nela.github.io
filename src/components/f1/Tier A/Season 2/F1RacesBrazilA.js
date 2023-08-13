import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesBrazilA2 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Brazil</h1>
        <h2 className="race-subtext">Tier A - Season 2</h2>
        <h3 className="race-subtext">Round 12 of 12</h3>
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
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Anton Chebotarov" driverFlag="/ua.png" driverInterval="WINNER" driverFastLap="" driverGrid="1" driverPosition="1" driverPoints="25"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Romeo Gagliotti" driverFlag="/nl.png" driverInterval="+1.401" driverFastLap="" driverGrid="2" driverPosition="2" driverPoints="18"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Dallan McTeer" driverFlag="/us.png" driverInterval="+2.447" driverFastLap="" driverGrid="3" driverPosition="3" driverPoints="15"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Octavian Ursu" driverFlag="/ro.png" driverInterval="+12.803" driverFastLap="1:09.432" driverGrid="4" driverPosition="4" driverPoints="13" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Focuser" driverFlag="/es.png" driverInterval="+16.117" driverFastLap="" driverGrid="7" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Veixel" driverFlag="/se.png" driverInterval="+22.442" driverFastLap="" driverGrid="9" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Kudos" driverFlag="/de.png" driverInterval="+28.485" driverFastLap="" driverGrid="6" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Thomas Vink" driverFlag="/nl.png" driverInterval="+28.551" driverFastLap="" driverGrid="5" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Stra" driverFlag="/rs.png" driverInterval="+36.568" driverFastLap="" driverGrid="8" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Luca Stevens" driverFlag="/gb-eng.png" driverInterval="+56.618" driverFastLap="" driverGrid="10" driverPosition="10" driverPoints="1"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Nydrow" driverFlag="/be.png" driverInterval="+1:03.680" driverFastLap="" driverGrid="11" driverPosition="11" driverPoints="0"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Cameron Clarke" driverFlag="/gb-eng.png" driverInterval="+1:08.375" driverFastLap="" driverGrid="12" driverPosition="12" driverPoints="0"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Antonio Brancati" driverFlag="/it.png" driverInterval="DNF" driverFastLap="" driverGrid="13" driverPosition="13" driverPoints="0"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Anton Chebotarov</h3>
          </div>
        </div>
    </div>
  )
}
