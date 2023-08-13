import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMelbourneA () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Silverstone</h1>
        <h2 className="race-subtext">Tier A - Season 1</h2>
        <h3 className="race-subtext">Round 2 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Newman" driverFlag="/it.png" driverInterval="42:02.146" driverFastLap="1:30.315" driverGrid="1" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Kalcess" driverFlag="/no.png" driverInterval="+0.398" driverFastLap="1:30.249" driverGrid="2" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Kudos" driverFlag="/de.png" driverInterval="+7.356" driverFastLap="1:30.459" driverGrid="2" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Dopichu" driverFlag="/fi.png" driverInterval="+21.110" driverFastLap="1:31.174" driverGrid="16" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cortes" driverFlag="/es.png" driverInterval="+21.779" driverFastLap="1:30.595" driverGrid="4" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Luca" driverFlag="/gb.png" driverInterval="+22.474" driverFastLap="1:31.069" driverGrid="3" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="CountMuttly" driverFlag="/dk.png" driverInterval="+27.050" driverFastLap="1:30.853" driverGrid="2" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Jaysen" driverFlag="/nl.png" driverInterval="+33.677" driverFastLap="1:31.178" driverGrid="10" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Focuser" driverFlag="/es.png" driverInterval="+34.487" driverFastLap="1:34.487" driverGrid="2" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Mute" driverFlag="/ng.png" driverInterval="+44.707" driverFastLap="1:31.256" driverGrid="1" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Luc" driverFlag="/nl.png" driverInterval="+47.617" driverFastLap="1:31.529" driverGrid="3" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Nik Kei" driverFlag="/ua.png" driverInterval="+49.449" driverFastLap="1:30.218" driverGrid="6" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Jesse" driverFlag="/nl.png" driverInterval="+1:05.456" driverFastLap="1:29.437" driverGrid="1" driverPosition="13" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="LawrenceSelling" driverFlag="/ph.png" driverInterval="+1:20.285" driverFastLap="1:31.705" driverGrid="3" driverPosition="14" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Bald" driverFlag="/ie.png" driverInterval="+1:25.211" driverFastLap="1:29.051" driverGrid="" driverPosition="15" driverPoints="0" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Counterfeit" driverFlag="/gb.png" driverInterval="+1:25.274" driverFastLap="1:29.531" driverGrid="6" driverPosition="16" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Joram" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:30.196" driverGrid="9" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="iM3j3n" driverFlag="/de.png" driverInterval="DNF" driverFastLap="1:30.616" driverGrid="2" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Uppsey" driverFlag="/it.png" driverInterval="DNF" driverFastLap="1:33.260" driverGrid="" driverPosition="-" driverPoints="0" />
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Flaw" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:32.308" driverGrid="7" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Newman</h3>
          </div>
        </div>
    </div>
  )
}
