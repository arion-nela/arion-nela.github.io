import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMexicoB () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Imola</h1>
        <h2 className="race-subtext">Tier B - Season 1</h2>
        <h3 className="race-subtext">Round 10 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cheers" driverFlag="/de.png" driverInterval="44:23.363" driverFastLap="1:17.838" driverGrid="4" driverPosition="1" driverPoints="30" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Philip" driverFlag="/nl.png" driverInterval="+7.080" driverFastLap="1:18.809" driverGrid="" driverPosition="2" driverPoints="25" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Sp3xtre" driverFlag="/se.png" driverInterval="+10.881" driverFastLap="1:18.706" driverGrid="12" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Veixel" driverFlag="/se.png" driverInterval="+14.661" driverFastLap="1:18.279" driverGrid="4" driverPosition="4" driverPoints="13" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Nydrow" driverFlag="/be.png" driverInterval="+15.209" driverFastLap="1:19.125" driverGrid="1" driverPosition="5" driverPoints="13" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Daniel Bodnar" driverFlag="/sk.png" driverInterval="+15.516" driverFastLap="1:18.974" driverGrid="1" driverPosition="6" driverPoints="10" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverInterval="+20.663" driverFastLap="1:19.295" driverGrid="5" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="+22.527" driverFastLap="1:19.228" driverGrid="5" driverPosition="8" driverPoints="10" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Vade" driverFlag="/se.png" driverInterval="+23.350" driverFastLap="1:19.402" driverGrid="5" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Arab" driverFlag="/us.png" driverInterval="+31.773" driverFastLap="1:18.852" driverGrid="9" driverPosition="10" driverPoints="9" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Luc" driverFlag="/nl.png" driverInterval="+53.563" driverFastLap="1:19.154" driverGrid="2" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Hugyme" driverFlag="/gb.png" driverInterval="+59.529" driverFastLap="1:19.428" driverGrid="2" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="UKLUCASW" driverFlag="/gb.png" driverInterval="+1 LAP" driverFastLap="1:19.649" driverGrid="9" driverPosition="13" driverPoints="5" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Aspec" driverFlag="/gb.png" driverInterval="+1 LAP" driverFastLap="1:20.465" driverGrid="2" driverPosition="14" driverPoints="0" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="F1 Gamer" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="1:21.121" driverGrid="4" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="rinky" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:19.946" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Jay Azier" driverFlag="/nl.png" driverInterval="DNS" driverFastLap="" driverGrid="5" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Sp3xtre</h3>
          </div>
        </div>
    </div>
  )
}
