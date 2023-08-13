import React from 'react'
import '../../../../stylesheets/F1ResultsPage.css'
import F1RaceResult from '../../F1RaceResult'

export default function F1RacesMiamiA () {
  return (
    <div className="page-content">
        <h1 className="page-content-heading">Imola</h1>
        <h2 className="race-subtext">Tier A - Season 1</h2>
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
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Faded" driverFlag="/us.png" driverInterval="42:40.427" driverFastLap="1:17.768" driverGrid="" driverPosition="1" driverPoints="33"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cortes" driverFlag="/es.png" driverInterval="+12.685" driverFastLap="1:18.717" driverGrid="5" driverPosition="2" driverPoints="20" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Nik Kei" driverFlag="/ua.png" driverInterval="+21.578" driverFastLap="1:18.291" driverGrid="10" driverPosition="3" driverPoints="15" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Kalcess" driverFlag="/no.png" driverInterval="+26.766" driverFastLap="1:18.291" driverGrid="2" driverPosition="4" driverPoints="19" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Focuser" driverFlag="/es.png" driverInterval="+30.163" driverFastLap="1:17.774" driverGrid="5" driverPosition="5" driverPoints="10" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="CountMuttly" driverFlag="/dk.png" driverInterval="+35.510" driverFastLap="1:18.894" driverGrid="6" driverPosition="6" driverPoints="8" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="ThomasVink" driverFlag="/nl.png" driverInterval="+35.937" driverFastLap="1:18.014" driverGrid="4" driverPosition="7" driverPoints="12" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="AnOldEnemy" driverFlag="/hr.png" driverInterval="+48.309" driverFastLap="1:19.052" driverGrid="" driverPosition="8" driverPoints="5" />
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Counterfeit" driverFlag="/gb.png" driverInterval="+50.487" driverFastLap="1:16.992" driverGrid="2" driverPosition="9" driverPoints="3" arrow="fa-solid fa-angle-up" lapColor="#ff00ff"/>
        <F1RaceResult teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Kudos" driverFlag="/de.png" driverInterval="+1:12.608" driverFastLap="1:19.625" driverGrid="1" driverPosition="10" driverPoints="1" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="LawrenceSelling" driverFlag="/ph.png" driverInterval="+1 Lap" driverFastLap="1:19.421" driverGrid="4" driverPosition="11" driverPoints="0" arrow="fa-solid fa-angle-up"/>
        <F1RaceResult teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Newman" driverFlag="/it.png" driverInterval="+2 Laps" driverFastLap="1:18.259" driverGrid="8" driverPosition="12" driverPoints="5" arrow="fa-solid fa-angle-down" />
        <F1RaceResult teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Flaw" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:18.788" driverGrid="1" driverPosition="-" driverPoints="0" arrow="fa-solid fa-angle-up" />
        <F1RaceResult teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Kyan" driverFlag="/nl.png" driverInterval="DNF" driverFastLap="1:20.032" driverGrid="8" driverPosition="-" driverPoints="3" arrow="fa-solid fa-angle-down"/>
        <F1RaceResult teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Luca" driverFlag="/gb.png" driverInterval="DNF" driverFastLap="" driverGrid="10" driverPosition="-" driverPoints="4" arrow="fa-solid fa-angle-down" />
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
