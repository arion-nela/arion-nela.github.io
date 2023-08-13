import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesBahrainB3 () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Bahrain</h1>
        <h2 className="race-subtext">Tier B - Season 3</h2>
        <h3 className="race-subtext">Round 1 of 7</h3>
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
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Maybach" driverFlag="/fr.png" driverInterval="WINNER" driverFastLap="" driverGrid="4" driverPosition="1" driverPoints="25" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Ondřej Macháč" driverFlag="/cz.png" driverInterval="+0.514" driverFastLap="" driverGrid="3" driverPosition="2" driverPoints="18" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="TsaR" driverFlag="/hu.png" driverInterval="+4.680" driverFastLap="1:30.147" driverGrid="10" driverPosition="3" driverPoints="16" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Adam" driverFlag="/gb-eng.png" driverInterval="+6.061" driverFastLap="" driverGrid="5" driverPosition="4" driverPoints="12" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Snowy" driverFlag="/gb-eng.png" driverInterval="+7.393" driverFastLap="" driverGrid="9" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Hugyme" driverFlag="/gb-eng.png" driverInterval="+8.457" driverFastLap="" driverGrid="16" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="arionboi" driverFlag="/al.png" driverInterval="+9.580" driverFastLap="" driverGrid="6" driverPosition="7" driverPoints="6" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Jan Švrdlik" driverFlag="/cz.png" driverInterval="+11.087" driverFastLap="" driverGrid="2" driverPosition="8" driverPoints="4" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Nydrow" driverFlag="/be.png" driverInterval="+14.475" driverFastLap="" driverGrid="12" driverPosition="9" driverPoints="2" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Bolar" driverFlag="/nl.png" driverInterval="+14.476" driverFastLap="" driverGrid="13" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Lando" driverFlag="/pl.png" driverInterval="+29.692" driverFastLap="" driverGrid="20" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Antonio Cortes" driverFlag="/es.png" driverInterval="+1 LAP" driverFastLap="" driverGrid="1" driverPosition="12" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="McLaren" driverName="Uklucasw" driverFlag="/gb-eng.png" driverInterval="+1 LAP" driverFastLap="" driverGrid="14" driverPosition="13" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Vuk" driverFlag="/rs.png" driverInterval="+2 LAPS" driverFastLap="" driverGrid="8" driverPosition="14" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Bald" driverFlag="/ie.png" driverInterval="+2 LAPS" driverFastLap="" driverGrid="19" driverPosition="15" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Dopichu" driverFlag="/fi.png" driverInterval="+3 LAPS" driverFastLap="" driverGrid="15" driverPosition="16" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Lotiopz" driverFlag="/gb-eng.png" driverInterval="DNF" driverFastLap="" driverGrid="11" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Emil Lundell" driverFlag="/se.png" driverInterval="DNF" driverFastLap="" driverGrid="7" driverPosition="-" driverPoints="0"arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Ukrain aim" driverFlag="/az.png" driverInterval="DNF" driverFastLap="" driverGrid="17" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Kisiel" driverFlag="/pl.png" driverInterval="DNF" driverFastLap="" driverGrid="18" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-down"/>
        </table>
        <div className="driver-day-container">
          <div>
            <h4>Driver of the day</h4>
          </div>
          <div>
          <h3>Hugyme</h3>
          </div>
        </div>
    </div>
  )
}
