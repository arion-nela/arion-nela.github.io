import React from 'react'
import F1ConstructorStanding from '../../F1ConstructorStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1ConstructorsB4 () {
  const constructors = []
  constructors.push({ name: 'Red Bull', points: '11', teamColor: '#3671C6', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/nl.png' })
  constructors.push({ name: 'Ferrari', points: '42', teamColor: '#F91536', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/it.png' })
  constructors.push({ name: 'Mercedes', points: '124', teamColor: '#6CD3BF', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/se.png' })
  constructors.push({ name: 'Alpine', points: '145', teamColor: '#2293D1', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/sk.png' })
  constructors.push({ name: 'McLaren', points: '24', teamColor: '#F58020', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/us.png' })
  constructors.push({ name: 'Alfa Romeo', points: '150', teamColor: '#C92D4B', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/cz.png' })
  constructors.push({ name: 'Aston Martin', points: '108', teamColor: '#358C75', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/fi.png' })
  constructors.push({ name: 'Haas', points: '41', teamColor: '#B6BABD', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/fi.png' })
  constructors.push({ name: 'AlphaTauri', points: '78', teamColor: '#5E8FAA', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/ro.png' })
  constructors.push({ name: 'Williams', points: '43', teamColor: '#37BEDD', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/nl.png' })
  const sortedconstructors = constructors.sort((a, b) => parseInt(b.points) - parseInt(a.points))
  return (
    <div className="constructors-list-4">
        {sortedconstructors.map((constructor, index) => {
          console.log(constructor.name)
          return (
              <F1ConstructorStanding key={constructor.name} teamColor={constructor.teamColor} teamBackground={constructor.teamBackground} teamImage={constructor.teamImage} constructorName={constructor.teamName} constructorPosition={index + 1} constructorPoints={constructor.points} />
          )
        })}
      </div>
  )
  /* return (
    <div className="constructors-list-4">
      <F1ConstructorStanding teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" constructorPosition="1" constructorPoints="0" />
      <F1ConstructorStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" constructorPosition="2" constructorPoints="0" />
      <F1ConstructorStanding teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" constructorPosition="3" constructorPoints="0" />
      <F1ConstructorStanding teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" constructorPosition="4" constructorPoints="0" />
      <F1ConstructorStanding teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" constructorPosition="5" constructorPoints="0" />
      <F1ConstructorStanding teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" constructorPosition="6" constructorPoints="0" />
      <F1ConstructorStanding teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" constructorPosition="7" constructorPoints="0" />
      <F1ConstructorStanding teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" constructorPosition="8" constructorPoints="0" />
      <F1ConstructorStanding teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" constructorPosition="9" constructorPoints="0" />
      <F1ConstructorStanding teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" constructorPosition="10" constructorPoints="0" />
    </div>
  ) */
}
