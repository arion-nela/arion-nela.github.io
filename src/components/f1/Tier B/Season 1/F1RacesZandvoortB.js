import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesJeddahB () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Zandvoort</h1>
        <h2 className="race-subtext">Tier B - Season 1</h2>
        <h3 className="race-subtext">Round 5 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Daniel Bodnar" driverFlag="/sk.png" driverInterval="54:48.454" driverFastLap="1:13.367" driverGrid="5" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cheers" driverFlag="/de.png" driverInterval="+1.862" driverFastLap="1:13.526" driverGrid="8" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Nydrow" driverFlag="/be.png" driverInterval="+5.981" driverFastLap="1:14.107" driverGrid="11" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Veixel" driverFlag="/se.png" driverInterval="+6.441" driverFastLap="1:14.213" driverGrid="8" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Zerotix" driverFlag="/de.png" driverInterval="+11.016" driverFastLap="1:13.618" driverGrid="3" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverInterval="+13.047" driverFastLap="1:14.210" driverGrid="5" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Arab" driverFlag="/us.png" driverInterval="+14.150" driverFastLap="1:13.099" driverGrid="6" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="C3z4R" driverFlag="/ro.png" driverInterval="+14.577" driverFastLap="1:15.039" driverGrid="8" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="+20.163" driverFastLap="1:13.668" driverGrid="6" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Luc" driverFlag="/nl.png" driverInterval="+32.857" driverFastLap="1:14.587" driverGrid="3" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Uklucasw" driverFlag="/gb.png" driverInterval="+42.965" driverFastLap="1:13.790" driverGrid="8" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="F1 Gamer" driverFlag="/gb.png" driverInterval="+1 Lap" driverFastLap="1:13.522" driverGrid="3" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Jay Azier" driverFlag="/be.png" driverInterval="DNF" driverFastLap="1:12.804" driverGrid="4" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Joakingen" driverFlag="/se.png" driverInterval="DNF" driverFastLap="1:15.781" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Simmetry" driverFlag="/se.png" driverInterval="DNF" driverFastLap="1:17.571" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Joram" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:21.688" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="aston-martin" driverName="Bald" driverFlag="/ie.png" driverInterval="DNF" driverFastLap="1:23.080" driverGrid="13" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Philip" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:22.586" driverGrid="16" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Chase" driverFlag="/us.png" driverInterval="DNF" driverFastLap="1:23.886" driverGrid="14" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Nydrow</h3>
          </div>
        </div>
    </div>
  )
}
