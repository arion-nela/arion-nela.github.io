import React from 'react'
import F1DriverStanding from '../../F1DriverStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1DriversB () {
  return (
    <div className="drivers-list-4">
      <div>
          <h5>Promotion To Tier A</h5>
        <hr className="standing-separator"></hr>
        </div>
        <F1DriverStanding teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cheers" driverFlag="/de.png" driverPosition="1" driverPoints="263" />
        <F1DriverStanding teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Nydrow" driverFlag="/be.png" driverPosition="2" driverPoints="135" />
        <F1DriverStanding teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Daniel Bodnar" driverFlag="/sk.png" driverPosition="3" driverPoints="114" />
        <F1DriverStanding teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Veixel" driverFlag="/se.png" driverPosition="4" driverPoints="92" />
        <F1DriverStanding teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Luc" driverFlag="/nl.png" driverPosition="5" driverPoints="89" />
        <hr className="standing-separator"></hr>
        <F1DriverStanding teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="AlphaRomeo" driverFlag="/nl.png" driverPosition="6" driverPoints="87" />
        <F1DriverStanding teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Philip" driverFlag="/nl.png" driverPosition="7" driverPoints="84" />
        <F1DriverStanding teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverPosition="8" driverPoints="84" />
        <F1DriverStanding teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Arab" driverFlag="/us.png" driverPosition="9" driverPoints="76" />
        <F1DriverStanding teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Uklucasw" driverFlag="/gb.png" driverPosition="10" driverPoints="60" />
        <F1DriverStanding teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverPosition="11" driverPoints="56" />
        <F1DriverStanding teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Sp3xtre" driverFlag="/se.png" driverPosition="12" driverPoints="45" />
        <F1DriverStanding teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Melon" driverFlag="/ro.png" driverPosition="13" driverPoints="44" />
        <F1DriverStanding teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Zerotix" driverFlag="/de.png" driverPosition="14" driverPoints="42" />
        <F1DriverStanding teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Br0wn" driverFlag="/de.png" driverPosition="15" driverPoints="37" />
        <div>
          <h5>Proceed to qualifiers</h5>
        <hr className="standing-separator"></hr>
        </div>
        <F1DriverStanding teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="ARBITERELITEX" driverFlag="/it.png" driverPosition="16" driverPoints="33" />
        <F1DriverStanding teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Rinky" driverFlag="/nl.png" driverPosition="17" driverPoints="22" />
        <F1DriverStanding teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Vade" driverFlag="/se.png" driverPosition="18" driverPoints="14" />
        <F1DriverStanding teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Andrew" driverFlag="/ro.png" driverPosition="19" driverPoints="8" />
        <F1DriverStanding teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="EZCAKEARDA" driverFlag="/be.png" driverPosition="20" driverPoints="2" />
        <hr className="standing-separator"></hr>
    </div>
  )
}
