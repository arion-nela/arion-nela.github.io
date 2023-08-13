import React from 'react'
import F1ConstructorStanding from '../../F1ConstructorStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1ConstructorsC2 () {
  const constructors = []
  constructors.push({ name: 'Red Bull', points: '169', order: '0', teamColor: '#3671C6', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/nl.png' })
  constructors.push({ name: 'Ferrari', points: '65', order: '0', teamColor: '#F91536', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/it.png' })
  constructors.push({ name: 'Mercedes', points: '117', order: '0', teamColor: '#6CD3BF', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/se.png' })
  constructors.push({ name: 'Alpine', points: '98', order: '0', teamColor: '#2293D1', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/sk.png' })
  constructors.push({ name: 'McLaren', points: '85', order: '0', teamColor: '#F58020', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/us.png' })
  constructors.push({ name: 'Alfa Romeo', points: '64', order: '0', teamColor: '#C92D4B', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/cz.png' })
  constructors.push({ name: 'Aston Martin', points: '71', order: '0', teamColor: '#358C75', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/fi.png' })
  constructors.push({ name: 'Haas', points: '152', order: '0', teamColor: '#B6BABD', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/fi.png' })
  constructors.push({ name: 'AlphaTauri', points: '61', order: '0', teamColor: '#5E8FAA', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/ro.png' })
  constructors.push({ name: 'Williams', points: '92', order: '0', teamColor: '#37BEDD', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/nl.png' })
  const sortedconstructors = constructors.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points // Sort by points descending
    } else {
      // If the points are equal, sort by order value (highest first)
      return b.order - a.order
    }
  })
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
}
