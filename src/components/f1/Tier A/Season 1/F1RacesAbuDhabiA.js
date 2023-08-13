import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMiamiA () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Abu Dhabi</h1>
        <h2 className="race-subtext">Tier A - Season 1</h2>
        <h3 className="race-subtext">Round 15 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Faded" driverFlag="/us.png" driverInterval="43:09.657" driverFastLap="1:27.075" driverGrid="6" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="ThomasVink" driverFlag="/nl.png" driverInterval="+0.570" driverFastLap="1:27.100" driverGrid="3" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Nik Kei" driverFlag="/ua.png" driverInterval="+1.316" driverFastLap="1:26.991" driverPosition="3" driverPoints="15" />
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Kalcess" driverFlag="/no.png" driverInterval="+2.211" driverFastLap="1:26.590" driverGrid="3" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Luca" driverFlag="/gb.png" driverInterval="+7.054" driverFastLap="1:26.879" driverGrid="1" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Focuser" driverFlag="/es.png" driverInterval="+33.024" driverFastLap="1:27.086" driverGrid="4" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Counterfeit" driverFlag="/gb.png" driverInterval="+40.712" driverFastLap="1:26.003" driverGrid="1" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Kudos" driverFlag="/de.png" driverInterval="+42.041" driverFastLap="1:25.278" driverPosition="8" driverPoints="5" lapColor="#ff00ff" />
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="AnOldEnemy" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:28.760" driverGrid="2" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Im3j3n" driverFlag="/de.png" driverInterval="DNF" driverFastLap="1:27.901" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Newman" driverFlag="/it.png" driverInterval="DNF" driverFastLap="2:01.859" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Kalcess</h3>
          </div>
        </div>
    </div>
  )
}
