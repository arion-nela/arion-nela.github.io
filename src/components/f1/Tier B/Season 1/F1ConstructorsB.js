import React from 'react'
import F1ConstructorStanding from '../../F1ConstructorStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1ConstructorsB () {
  return (
    <div className="drivers-list-4">
      <F1ConstructorStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" constructorPosition="1" constructorPoints="338" />
      <F1ConstructorStanding teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" constructorPosition="2" constructorPoints="283" />
      <F1ConstructorStanding teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" constructorPosition="3" constructorPoints="177" />
      <F1ConstructorStanding teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" constructorPosition="4" constructorPoints="167" />
      <F1ConstructorStanding teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" constructorPosition="5" constructorPoints="146" />
      <F1ConstructorStanding teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" constructorPosition="6" constructorPoints="145" />
      <F1ConstructorStanding teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" constructorPosition="7" constructorPoints="144" />
      <F1ConstructorStanding teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" constructorPosition="8" constructorPoints="132" />
      <F1ConstructorStanding teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" constructorPosition="9" constructorPoints="59" />
      <F1ConstructorStanding teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" constructorPosition="10" constructorPoints="44" />
    </div>
  )
}
