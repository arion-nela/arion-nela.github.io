import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesTexasA2 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Texas</h1>
        <h2 className="race-subtext">Tier A - Season 2</h2>
        <h3 className="race-subtext">Round 9 of 12</h3>
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
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Octavian Ursu" driverFlag="/ro.png" driverInterval="WINNER" driverFastLap="" driverGrid="1" driverPosition="1" driverPoints="33"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Romeo Gagliotti" driverFlag="/nl.png" driverInterval="+9.771" driverFastLap="" driverGrid="2" driverPosition="2" driverPoints="25"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Thomas Vink" driverFlag="/nl.png" driverInterval="+24.244" driverFastLap="" driverGrid="8" driverPosition="3" driverPoints="16" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Focuser" driverFlag="/es.png" driverInterval="+27.214" driverFastLap="" driverGrid="3" driverPosition="4" driverPoints="18" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Dallan McTeer" driverFlag="/us.png" driverInterval="+27.918" driverFastLap="" driverGrid="5" driverPosition="5" driverPoints="14"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Stra" driverFlag="/rs.png" driverInterval="+28.289" driverFastLap="" driverGrid="10" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Antonio Brancati" driverFlag="/it.png" driverInterval="+30.131" driverFastLap="" driverGrid="13" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Anton Chebotarov" driverFlag="/ua.png" driverInterval="+32.387" driverFastLap="" driverGrid="9" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Cameron Clarke" driverFlag="/gb-eng.png" driverInterval="+34.027" driverFastLap="" driverGrid="11" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Veixel" driverFlag="/se.png" driverInterval="+34.454" driverFastLap="" driverGrid="4" driverPosition="10" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Kudos" driverFlag="/de.png" driverInterval="+40.397" driverFastLap="" driverGrid="6" driverPosition="11" driverPoints="3" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Luca Stevens" driverFlag="/gb-eng.png" driverInterval="+41.603" driverFastLap="" driverGrid="15" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverInterval="+1:11.428" driverFastLap="1:35.276" driverGrid="7" driverPosition="13" driverPoints="2" arrow="fa-solid fa-angle-down" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Luc" driverFlag="/nl.png" driverInterval="+1:16.898" driverFastLap="" driverGrid="15" driverPosition="14" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Daniel Bodnár" driverFlag="/sk.png" driverInterval="DNF" driverFastLap="" driverGrid="14" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Octavian Ursu</h3>
          </div>
        </div>
    </div>
  )
}
