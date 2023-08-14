import React from 'react'
import F1DriverStanding from '../../F1DriverStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1DriversA2 () {
  return (
    <div className="drivers-list-4">
        <hr className="standing-separator-gold"></hr>
      <F1DriverStanding teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driverName="Octavian Ursu" driverFlag="/ro.png" driverPosition="1" driverPoints="231" />
      <F1DriverStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Romeo Gagliotti" driverFlag="/nl.png" driverPosition="2" driverPoints="214" />
      <F1DriverStanding teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driverName="Dallan McTeer" driverFlag="/us.png" driverPosition="3" driverPoints="144" />
      <F1DriverStanding teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Focuser" driverFlag="/es.png" driverPosition="4" driverPoints="110" />
      <F1DriverStanding teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Thomas Vink" driverFlag="/nl.png" driverPosition="5" driverPoints="103" />
        <hr className="standing-separator-gold"></hr>
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Luca" driverFlag="/en.png" driverPosition="6" driverPoints="65" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Counterfeit" driverFlag="/en.png" driverPosition="7" driverPoints="63" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Antonio Brancati" driverFlag="/it.png" driverPosition="8" driverPoints="56" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Kalcess" driverFlag="/no.png" driverPosition="9" driverPoints="51" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Nik kei" driverFlag="/ua.png" driverPosition="10" driverPoints="42" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Stra" driverFlag="/rs.png" driverPosition="11" driverPoints="35" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Kudos" driverFlag="/de.png" driverPosition="12" driverPoints="35" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Veixel" driverFlag="/se.png" driverPosition="13" driverPoints="28" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Im3j3n" driverFlag="/de.png" driverPosition="14" driverPoints="26" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Philip" driverFlag="/nl.png" driverPosition="15" driverPoints="16" />
        <div>
        <h5>Demotion to tier b</h5>
        <hr className="standing-separator"></hr>
        </div>
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="McLaren" driverName="Brim" driverFlag="/nl.png" driverPosition="16" driverPoints="15" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Flaw" driverFlag="/nl.png" driverPosition="17" driverPoints="10" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="McLaren" driverName="Luc" driverFlag="/nl.png" driverPosition="18" driverPoints="5" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Nydrow" driverFlag="/be.png" driverPosition="19" driverPoints="3" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Daniel Bodnar" driverFlag="/sk.png" driverPosition="20" driverPoints="0" />
        <hr className="standing-separator"></hr>
    </div>
  )
}
