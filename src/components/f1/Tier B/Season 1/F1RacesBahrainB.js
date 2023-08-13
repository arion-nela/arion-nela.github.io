import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMontrealB () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Bahrain</h1>
        <h2 className="race-subtext">Tier B - Season 1</h2>
        <h3 className="race-subtext">Round 14 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="AlphaRomeo" driverFlag="/nl.png" driverInterval="45:10.331" driverFastLap="1:31.384" driverGrid="1" driverPosition="1" driverPoints="32" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cheers" driverFlag="/de.png" driverInterval="+0.129" driverFastLap="1:31.747" driverGrid="2" driverPosition="2" driverPoints="23" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Brown" driverFlag="/de.png" driverInterval="+7.554" driverFastLap="1:30.565" driverGrid="" driverPosition="3" driverPoints="21" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Sp3xtre" driverFlag="/se.png" driverInterval="+11.950" driverFastLap="1:31.917" driverGrid="2" driverPosition="4" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Nydrow" driverFlag="/be.png" driverInterval="+13.031" driverFastLap="1:31.853" driverGrid="3" driverPosition="5" driverPoints="11" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="+14.372" driverFastLap="1:31.850" driverGrid="5" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Daniel Bodnar" driverFlag="/sk.png" driverInterval="+27.645" driverFastLap="1:31.575" driverGrid="5" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverInterval="+35.394" driverFastLap="1:32.411" driverGrid="7" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Luc" driverFlag="/nl.png" driverInterval="+36.319" driverFastLap="1:31.806" driverGrid="2" driverPosition="9" driverPoints="4" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Veixel" driverFlag="/se.png" driverInterval="+36.344" driverFastLap="1:32.061" driverGrid="1" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="rinky" driverFlag="/nl.png" driverInterval="+1:07.994" driverFastLap="1:31.945" driverGrid="2" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="EZCAKEARDA" driverFlag="/be.png" driverInterval="+1:11.409" driverFastLap="1:32.766" driverGrid="2" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Melon" driverFlag="/ro.png" driverInterval="+1:36.261" driverFastLap="1:29.638" driverGrid="8" driverPosition="13" driverPoints="4" arrow="fa-solid fa-angle-down" lapColor="#ff00ff" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="ARBITERELITEX" driverFlag="/it.png" driverInterval="DNF" driverFastLap="1:31.057" driverGrid="13" driverPosition="-" driverPoints="8" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Arab" driverFlag="/us.png" driverInterval="DNF" driverFastLap="1:32.697" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Vade" driverFlag="/se.png" driverInterval="DNF" driverFastLap="1:32.999" driverGrid="6" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Br0wn</h3>
          </div>
        </div>
    </div>
  )
}
