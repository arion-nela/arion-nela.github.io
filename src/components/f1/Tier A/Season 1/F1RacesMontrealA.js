import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMiamiA () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Montreal</h1>
        <h2 className="race-subtext">Tier A - Season 1</h2>
        <h3 className="race-subtext">Round 13 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Faded" driverFlag="/us.png" driverInterval="47:46.403" driverFastLap="1:13.035" driverGrid="13" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Nik Kei" driverFlag="/ua.png" driverInterval="+9.834" driverFastLap="1:13.502" driverGrid="1" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="ThomasVink" driverFlag="/nl.png" driverInterval="+11.214" driverFastLap="1:13.412" driverGrid="1" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Im3j3n" driverFlag="/de.png" driverInterval="+17.079" driverFastLap="1:13.864" driverGrid="1" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Focuser" driverFlag="/es.png" driverInterval="+18.199" driverFastLap="1:13.468" driverGrid="5" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Kudos" driverFlag="/de.png" driverInterval="+20.085" driverFastLap="1:13.743" driverGrid="" driverPosition="6" driverPoints="8" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Luca" driverFlag="/gb.png" driverInterval="+24.589" driverFastLap="1:13.581" driverGrid="8" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Counterfeit" driverFlag="/gb.png" driverInterval="+26.753" driverFastLap="1:13.856" driverGrid="" driverPosition="8" driverPoints="4" />
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Kalcess" driverFlag="/no.png" driverInterval="+35.444" driverFastLap="1:14.181" driverGrid="" driverPosition="9" driverPoints="2"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cortes" driverFlag="/es.png" driverInterval="+36.736" driverFastLap="1:13.182" driverGrid="9" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Kyan" driverFlag="/nl.png" driverInterval="+1 LAP" driverFastLap="1:12.908" driverGrid="4" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-down" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="AnOldEnemy" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:15.059" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Newman" driverFlag="/it.png" driverInterval="DNF" driverFastLap="1:20.203" driverGrid="11" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="CountMuttly" driverFlag="/dk.png" driverInterval="DNF" driverFastLap="1:23.503" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Flaw" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Faded</h3>
          </div>
        </div>
    </div>
  )
}
