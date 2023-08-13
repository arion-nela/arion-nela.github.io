import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMelbourneB () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Silverstone</h1>
        <h2 className="race-subtext">Tier B - Season 1</h2>
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
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Tib" driverFlag="/rs.png" driverInterval="40:25.787" driverFastLap="1:30.221" driverGrid="" driverPosition="1" driverPoints="26" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="aston-martin" driverName="Bald" driverFlag="/ie.png" driverInterval="+14.556" driverFastLap="1:31.169" driverGrid="7" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Dopichu" driverFlag="/fi.png" driverInterval="+16.312" driverFastLap="1:30.693" driverGrid="1" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Joram" driverFlag="/nl.png" driverInterval="+22.313" driverFastLap="1:31.176" driverGrid="1" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Chase" driverFlag="/us.png" driverInterval="+22.384" driverFastLap="1:31.358" driverGrid="2" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Veixel" driverFlag="/se.png" driverInterval="+26.176" driverFastLap="1:31.048" driverGrid="6" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Arab" driverFlag="/us.png" driverInterval="+31.968" driverFastLap="1:30.797" driverGrid="3" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Nydrow" driverFlag="/be.png" driverInterval="+40.683" driverFastLap="1:31.421" driverGrid="2" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Zerotix" driverFlag="/de.png" driverInterval="+46.464" driverFastLap="1:31.941" driverGrid="1" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Joakingen" driverFlag="/se.png" driverInterval="+46.634" driverFastLap="1:31.846" driverGrid="" driverPosition="10" driverPoints="1"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Uklacasw" driverFlag="/gb.png" driverInterval="+50.953" driverFastLap="1:31.525" driverGrid="" driverPosition="11" driverPoints="0" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverInterval="+54.473" driverFastLap="1:31.956" driverGrid="7" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="F1 Gamer" driverFlag="/gb.png" driverInterval="+1:01.572" driverFastLap="1:31.399" driverGrid="2" driverPosition="13" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Jurv" driverFlag="/nl.png" driverInterval="+1:08.845" driverFastLap="1:31.723" driverGrid="3" driverPosition="14" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverInterval="+1:11.159" driverFastLap="1:32.028" driverGrid="1" driverPosition="15" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Simmetry" driverFlag="/se.png" driverInterval="+1:27.237" driverFastLap="1:31.887" driverGrid="2" driverPosition="16" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="C3z4R" driverFlag="/ro.png" driverInterval="+1:51.976" driverFastLap="1:31.982" driverGrid="4" driverPosition="17" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Egamer" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="1:31.842" driverGrid="2" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Shadow" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="1:32.218" driverGrid="" driverPosition="-" driverPoints="0" />
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="DaVinky" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:33.532" driverGrid="4" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Dopichu</h3>
          </div>
        </div>
    </div>
  )
}
