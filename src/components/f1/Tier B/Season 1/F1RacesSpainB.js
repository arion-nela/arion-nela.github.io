import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMexicoB () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Barcelona</h1>
        <h2 className="race-subtext">Tier B - Season 1</h2>
        <h3 className="race-subtext">Round 11 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="ARBITERELITEX" driverFlag="/it.png" driverInterval="49:21.223" driverFastLap="1:24.359" driverGrid="1" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cheers" driverFlag="/de.png" driverInterval="+1.431" driverFastLap="1:26.069" driverGrid="1" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Philip" driverFlag="/nl.png" driverInterval="+2.079" driverFastLap="1:25.820" driverGrid="8" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Melon" driverFlag="/ro.png" driverInterval="+2.277" driverFastLap="1:24.091" driverGrid="4" driverPosition="4" driverPoints="13" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Veixel" driverFlag="/se.png" driverInterval="+4.669" driverFastLap="1:25.944" driverGrid="2" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Andrew" driverFlag="/ro.png" driverInterval="+5.888" driverFastLap="1:25.160" driverGrid="13" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Zerotix" driverFlag="/de.png" driverInterval="+10.578" driverFastLap="1:25.562" driverGrid="3" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Daniel Bodnar" driverFlag="/sk.png" driverInterval="+10.899" driverFastLap="1:25.755" driverGrid="3" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="+14.423" driverFastLap="1:26.097" driverGrid="4" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="rinky" driverFlag="/nl.png" driverInterval="+17.125" driverFastLap="1:26.002" driverGrid="4" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Luc" driverFlag="/nl.png" driverInterval="+18.959" driverFastLap="1:26.335" driverGrid="6" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Hugyme" driverFlag="/gb.png" driverInterval="+1 LAP" driverFastLap="1:27.109" driverGrid="3" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Vade" driverFlag="/se.png" driverInterval="+1 LAP" driverFastLap="1:26.938" driverGrid="3" driverPosition="13" driverPoints="0" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverInterval="+1 LAP" driverFastLap="1:27.277" driverGrid="2" driverPosition="14" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Arab" driverFlag="/us.png" driverInterval="DNF" driverFastLap="1:27.574" driverGrid="11" driverPosition="15" driverPoints="0" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Sp3xtre" driverFlag="/se.png" driverInterval="DNF" driverFastLap="1:27.310" driverGrid="7" driverPosition="16" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Nydrow" driverFlag="/be.png" driverInterval="DNF" driverFastLap="1:29.173" driverGrid="16" driverPosition="17" driverPoints="0" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="EZCAKEARDA" driverFlag="/be.png" driverInterval="DNF" driverFastLap="1:29.798" driverGrid="" driverPosition="18" driverPoints="0" />
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Lukas" driverFlag="/dk.png" driverInterval="DNF" driverFastLap="" driverGrid="5" driverPosition="19" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Cheers</h3>
          </div>
        </div>
    </div>
  )
}
