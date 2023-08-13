import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMiamiA () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Suzuka</h1>
        <h2 className="race-subtext">Tier A - Season 1</h2>
        <h3 className="race-subtext">Round 12 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Faded" driverFlag="/us.png" driverInterval="46:02.857" driverFastLap="1:40.263" driverGrid="" driverPosition="1" driverPoints="25" />
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Flaw" driverFlag="/nl.png" driverInterval="+6.748" driverFastLap="1:40.165" driverGrid="2" driverPosition="2" driverPoints="19" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Newman" driverFlag="/it.png" driverInterval="+21.598" driverFastLap="1:40.513" driverGrid="2" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Im3j3n" driverFlag="/de.png" driverInterval="+21.702" driverFastLap="1:40.850" driverGrid="3" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Luca" driverFlag="/gb.png" driverInterval="+22.987" driverFastLap="1:40.415" driverGrid="6" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="ThomasVink" driverFlag="/nl.png" driverInterval="+25.088" driverFastLap="1:40.192" driverGrid="3" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Kalcess" driverFlag="/no.png" driverInterval="+25.288" driverFastLap="1:40.630" driverGrid="5" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Counterfeit" driverFlag="/gb.png" driverInterval="+32.175" driverFastLap="1:41.116" driverGrid="4" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Focuser" driverFlag="/es.png" driverInterval="+35.564" driverFastLap="1:40.881" driverGrid="1" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Nik Kei" driverFlag="/ua.png" driverInterval="+35.731" driverFastLap="1:40.891" driverGrid="4" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Kudos" driverFlag="/de.png" driverInterval="+53.442" driverFastLap="1:41.678" driverGrid="1" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="CountMuttly" driverFlag="/dk.png" driverInterval="DNF" driverFastLap="1:42.924" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Flaw</h3>
          </div>
        </div>
    </div>
  )
}
