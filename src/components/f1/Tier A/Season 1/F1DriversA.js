import React from 'react'
import F1DriverStanding from '../../F1DriverStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1DriversA () {
  return (
    <div className="drivers-list-4">
        <hr className="standing-separator-gold"></hr>
      <F1DriverStanding teamColor="#F91536" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Dallan McTeer" driverFlag="/us.png" driverPosition="1" driverPoints="195" />
      <F1DriverStanding teamColor="#F91536" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Nik Kei" driverFlag="/ua.png" driverPosition="2" driverPoints="176" />
      <F1DriverStanding teamColor="#F91536" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Thomas Vink" driverFlag="/nl.png" driverPosition="3" driverPoints="172" />
      <F1DriverStanding teamColor="#F91536" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Kalcess" driverFlag="/no.png" driverPosition="4" driverPoints="136" />
      <F1DriverStanding teamColor="#F91536" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Focuser" driverFlag="/es.png" driverPosition="5" driverPoints="119" />
        <hr className="standing-separator-gold"></hr>
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Luca" driverFlag="/en.png" driverPosition="6" driverPoints="116" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cortes" driverFlag="/es.png" driverPosition="7" driverPoints="100" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Antonio Brancati" driverFlag="/it.png" driverPosition="8" driverPoints="91" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Flaw" driverFlag="/nl.png" driverPosition="9" driverPoints="77" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Counterfeit" driverFlag="/en.png" driverPosition="10" driverPoints="75" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Kudos" driverFlag="/de.png" driverPosition="11" driverPoints="67" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="iM3j3n" driverFlag="/de.png" driverPosition="12" driverPoints="53" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="AnOldEnemy" driverFlag="/hr.png" driverPosition="13" driverPoints="39" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="CountMuttly" driverFlag="/dk.png" driverPosition="14" driverPoints="25" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Jaysen" driverFlag="/nl.png" driverPosition="15" driverPoints="20" />
        <div>
        <h5>Demotion to tier b</h5>
        <hr className="standing-separator"></hr>
        </div>
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="LawrenceSelling" driverFlag="/ph.png" driverPosition="16" driverPoints="4" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Kyan" driverFlag="/nl.png" driverPosition="17" driverPoints="3" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(32, 32, 32,  0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Hailee" driverFlag="/nl.png" driverPosition="18" driverPoints="OUT" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(32, 32, 32, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Mute" driverFlag="/ng.png" driverPosition="19" driverPoints="OUT" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(32, 32, 32, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Eddyworth" driverFlag="/fr.png" driverPosition="20" driverPoints="OUT" />
        <hr className="standing-separator"></hr>
    </div>
  )
}
