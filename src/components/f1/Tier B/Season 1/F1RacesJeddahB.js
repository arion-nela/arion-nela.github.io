import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesJeddahB () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">JEddah</h1>
        <h2 className="race-subtext">Tier B - Season 1</h2>
        <h3 className="race-subtext">Round 4 of 15</h3>
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
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cheers" driverFlag="/de.png" driverInterval="45:25.197" driverFastLap="1:32.000" driverGrid="2" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Arab" driverFlag="/us.png" driverInterval="+2.572" driverFastLap="1:31.750" driverGrid="1" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Nydrow" driverFlag="/be.png" driverInterval="+3.080" driverFastLap="1:32.701" driverGrid="8" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Tib" driverFlag="/rs.png" driverInterval="+3.137" driverFastLap="1:32.766" driverGrid="2" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Joram" driverFlag="/nl.png" driverInterval="+8.723" driverFastLap="1:32.686" driverGrid="3" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverInterval="+13.750" driverFastLap="1:33.565" driverGrid="11" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Luc" driverFlag="/nl.png" driverInterval="+17.011" driverFastLap="1:32.839" driverGrid="3" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Chase" driverFlag="/us.png" driverInterval="+20.517" driverFastLap="1:33.055" driverGrid="5" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Uklacasw" driverFlag="/gb.png" driverInterval="+23.150" driverFastLap="1:32.880" driverGrid="" driverPosition="9" driverPoints="2" />
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Zerotix" driverFlag="/de.png" driverInterval="+31.701" driverFastLap="1:30.769" driverGrid="10" driverPosition="10" driverPoints="2" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="aston-martin" driverName="Bald" driverFlag="/ie.png" driverInterval="DNF" driverFastLap="1:32.864" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="F1 Gamer" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="1:33.696" driverGrid="6" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="DNF" driverFastLap="1:33.400" driverGrid="6" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Pr Mango" driverFlag="/pr.png" driverInterval="DNF" driverFastLap="1:32.565" driverGrid="4" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="C3z4R" driverFlag="/ro.png" driverInterval="DNF" driverFastLap="1:34.668" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Dopichu" driverFlag="/fi.png" driverInterval="DNF" driverFastLap="1:32.614" driverGrid="11" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Veixel" driverFlag="/se.png" driverInterval="DNF" driverFastLap="1:32.438" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="WrigglyYeti" driverFlag="/be.png" driverInterval="DNF" driverFastLap="1:35.148" driverGrid="3" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Simmetry" driverFlag="/se.png" driverInterval="DNF" driverFastLap="1:50.275" driverGrid="" driverPosition="-" driverPoints="0" />
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Steen" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="" driverGrid="" driverPosition="-" driverPoints="0" />
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
