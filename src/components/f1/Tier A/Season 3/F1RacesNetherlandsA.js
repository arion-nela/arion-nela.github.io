import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesNetherlandsA3 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Netherlands</h1>
        <h2 className="race-subtext">Tier A - Season 3</h2>
        <h3 className="race-subtext">Round 7 of 10</h3>
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
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Thomas Vink" driverFlag="/nl.png" driverInterval="WINNER" driverFastLap="" driverGrid="15" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Octavian Ursu" driverFlag="/ro.png" driverInterval="+0.529" driverFastLap="" driverGrid="1" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Romeo Gagliotti" driverFlag="/nl.png" driverInterval="+5.339" driverFastLap="" driverGrid="4" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Focuser" driverFlag="/es.png" driverInterval="+5.691" driverFastLap="" driverGrid="11" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Dallan McTeer" driverFlag="/us.png" driverInterval="+5.860" driverFastLap="" driverGrid="5" driverPosition="5" driverPoints="10"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Maxfan" driverFlag="/pl.png" driverInterval="+10.473" driverFastLap="" driverGrid="2" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Max Housley" driverFlag="/gb-eng.png" driverInterval="+16.350" driverFastLap="" driverGrid="6" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Justin Janson" driverFlag="/nl.png" driverInterval="" driverFastLap="+17.358" driverGrid="10" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Daniel Bodnár" driverFlag="/sk.png" driverInterval="+21.279" driverFastLap="" driverGrid="12" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Anton Chebotarov" driverFlag="/ua.png" driverInterval="+22.533" driverFastLap="" driverGrid="3" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Cameron Clarke" driverFlag="/gb-eng.png" driverInterval="+1:07.935" driverFastLap="1:12.197" driverGrid="14" driverPosition="11" driverPoints="10" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Veixel" driverFlag="/se.png" driverInterval="+1 LAP" driverFastLap="" driverGrid="13" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Antonio Cortes" driverFlag="/es.png" driverInterval="DNF" driverFastLap="" driverGrid="16" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Sp3xtre" driverFlag="/se.png" driverInterval="DNF" driverFastLap="" driverGrid="9" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Antonio Brancati" driverFlag="/it.png" driverInterval="DNF" driverFastLap="" driverGrid="8" driverPosition="-" driverPoints="0"arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Ondřej Macháč" driverFlag="/cz.png" driverInterval="DNF" driverFastLap="" driverGrid="7" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Thomas Vink</h3>
          </div>
        </div>
    </div>
  )
}
