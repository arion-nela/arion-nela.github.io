import React from 'react'
import '../../stylesheets/F1ResultsPage.css'
import F1RaceResult from './F1RaceResult'

export default function F1RacesJeddahB () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Monza</h1>
        <h2 className="race-subtext">Tier C - Season 1</h2>
        <h3 className="race-subtext">Round 6 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Kai" driverFlag="/gb.png" driverInterval="43:28.528" driverFastLap="1:21.358" driverGrid="12" driverPosition="1" driverPoints="19" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Las Gamer" driverFlag="/it.png" driverInterval="+10.841" driverFastLap="1:24.824" driverGrid="5" driverPosition="2" driverPoints="16" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="geetype" driverFlag="/se.png" driverInterval="+38.992" driverFastLap="1:23.938" driverGrid="" driverPosition="3" driverPoints="18" />
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Saad" driverFlag="/sa.png" driverInterval="+53.333" driverFastLap="1:22.633" driverGrid="8" driverPosition="4" driverPoints="10" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="traumatized" driverFlag="/it.png" driverInterval="+1:04.386" driverFastLap="1:24.274" driverGrid="9" driverPosition="5" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Egamer" driverFlag="/gb.png" driverInterval="+1:05.591" driverFastLap="1:21.967" driverGrid="4" driverPosition="6" driverPoints="13" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="ArionBoi" driverFlag="/al.png" driverInterval="+1:11.734" driverFastLap="1:22.170" driverGrid="6" driverPosition="7" driverPoints="12" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Guri" driverFlag="/br.png" driverInterval="+1:57.092" driverFastLap="1:24.185" driverGrid="3" driverPosition="8" driverPoints="2" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Steen" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:28.726" driverGrid="" driverPosition="-" driverPoints="0"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Runkeri" driverFlag="/fi.png" driverInterval="DNF" driverFastLap="1:24.997" driverGrid="4" driverPosition="-" driverPoints="3" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="ZaceFace" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="1:25.786" driverGrid="6" driverPosition="-" driverPoints="4" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="pablo Mothiba" driverFlag="/be.png" driverInterval="DNF" driverFastLap="1:25.786" driverGrid="8" driverPosition="-" driverPoints="5" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Aspec" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Jay Azier" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="" driverGrid="6" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>kai</h3>
          </div>
        </div>
    </div>
  )
}
