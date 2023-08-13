import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMontrealB () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Abu Dhabi</h1>
        <h2 className="race-subtext">Tier B - Season 1</h2>
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
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="AlphaRomeo" driverFlag="/nl.png" driverInterval="47:30.096" driverFastLap="1:26.717" driverGrid="1" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Philip" driverFlag="/nl.png" driverInterval="+2.548" driverFastLap="1:26.797" driverGrid="1" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Sp3xtre" driverFlag="/se.png" driverInterval="+2.845" driverFastLap="1:26.822" driverGrid="12" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Veixel" driverFlag="/se.png" driverInterval="+8.847" driverFastLap="1:27.023" driverGrid="1" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cheers" driverFlag="/de.png" driverInterval="+10.047" driverFastLap="1:26.716" driverGrid="4" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="UKLUCASW" driverFlag="/gb.png" driverInterval="+12.017" driverFastLap="1:26.929" driverGrid="5" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Arab" driverFlag="/us.png" driverInterval="+27.103" driverFastLap="1:26.759" driverGrid="6" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverInterval="+27.987" driverFastLap="1:28.096" driverGrid="2" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="EZCAKEARDA" driverFlag="/be.png" driverInterval="+57.795" driverFastLap="1:27.801" driverGrid="5" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Melon" driverFlag="/ro.png" driverInterval="+2 LAPS" driverFastLap="1:26.347" driverGrid="6" driverPosition="10" driverPoints="2" arrow="fa-solid fa-angle-down" lapColor="#ff00ff" />
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Nydrow" driverFlag="/be.png" driverInterval="DNF" driverFastLap="1:27.567" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Zerotix" driverFlag="/de.png" driverInterval="DNF" driverFastLap="1:27.143" driverGrid="5" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="DNF" driverFastLap="1:27.367" driverGrid="7" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Vade" driverFlag="/se.png" driverInterval="DNF" driverFastLap="1:28.278" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Daniel Bodnar" driverFlag="/sk.png" driverInterval="DNF" driverFastLap="" driverGrid="7" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>SP3XTRE</h3>
          </div>
        </div>
    </div>
  )
}
