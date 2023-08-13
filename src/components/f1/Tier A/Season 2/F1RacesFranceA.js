import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesFranceA2 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">France</h1>
        <h2 className="race-subtext">Tier A - Season 2</h2>
        <h3 className="race-subtext">Round 3 of 12</h3>
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
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Romeo Gagliotti" driverFlag="/nl.png" driverInterval="WINNER" driverFastLap="" driverGrid="2" driverPosition="1" driverPoints="32" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Thomas Vink" driverFlag="/nl.png" driverInterval="+0.571" driverFastLap="" driverGrid="3" driverPosition="2" driverPoints="24" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Dallan McTeer" driverFlag="/us.png" driverInterval="+10.068" driverFastLap="" driverGrid="6" driverPosition="3" driverPoints="18" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Antonio Cortes" driverFlag="/es.png" driverInterval="+11.937" driverFastLap="" driverGrid="15" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Cheers" driverFlag="/de.png" driverInterval="+13.167" driverFastLap="" driverGrid="4" driverPosition="5" driverPoints="15" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Antonio Brancati" driverFlag="/it.png" driverInterval="+21.960" driverFastLap="" driverGrid="1" driverPosition="6" driverPoints="16" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Luca Stevens" driverFlag="/gb-eng.png" driverInterval="+26.892" driverFastLap="" driverGrid="10" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Kudos" driverFlag="/de.png" driverInterval="+27.445" driverFastLap="" driverGrid="13" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Cameron Clarke" driverFlag="/gb-eng.png" driverInterval="+35.876" driverFastLap="" driverGrid="5" driverPosition="9" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverInterval="+38.839" driverFastLap="" driverGrid="9" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Luc" driverFlag="/nl.png" driverInterval="+48.470" driverFastLap="" driverGrid="11" driverPosition="11" driverPoints="0" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="+1:04.567" driverFastLap="" driverGrid="12" driverPosition="12" driverPoints="0" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Im3j3n" driverFlag="/de.png" driverInterval="+1:06.859" driverFastLap="" driverGrid="7" driverPosition="13" driverPoints="2" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Philip" driverFlag="/nl.png" driverInterval="+1 LAP" driverFastLap="1:31.775" driverGrid="14" driverPosition="14" driverPoints="0" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Nydrow" driverFlag="/be.png" driverInterval="DNF" driverFastLap="" driverGrid="8" driverPosition="-" driverPoints="1" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Dallan McTeer</h3>
          </div>
        </div>
    </div>
  )
}
