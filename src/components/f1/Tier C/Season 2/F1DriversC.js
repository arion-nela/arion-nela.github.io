import React from 'react'
import F1DriverStanding from '../../F1DriverStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1DriversC2 () {
  const drivers = []
  drivers.push({ name: 'Kai', points: '158', order: '0', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/en.png' })
  drivers.push({ name: 'Avid', points: '17', order: '0', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/nl.png' })
  drivers.push({ name: 'Saad', points: '42', order: '0', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/es.png' })
  drivers.push({ name: 'Tib', points: '5', order: '0', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/rs.png' })
  drivers.push({ name: 'Rogier Boersma', points: '39', order: '0', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/nl.png' })
  drivers.push({ name: 'jarmo', points: '2', order: '0', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/nl.png' })
  drivers.push({ name: 'afnonso', points: '64', order: '0', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/es.png' })
  drivers.push({ name: 'George', points: '46', order: '0', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/en.png' })
  drivers.push({ name: 'ukrain aim', points: '52', order: '0', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/az.png' })
  drivers.push({ name: 'jahames', points: '0', order: '0', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/blank.png' })
  drivers.push({ name: 'Aspec', points: '45', order: '0', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/en.png' })
  drivers.push({ name: 'Sharky', points: '17', order: '0', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/se.png' })
  drivers.push({ name: 'quintusj', points: '0', order: '0', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/nl.png' })
  drivers.push({ name: 'haz', points: '0', order: '1', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/en.png' })
  drivers.push({ name: 'Lukas', points: '54', order: '0', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/dk.png' })
  drivers.push({ name: 'Manuel', points: '36', order: '0', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/it.png' })
  drivers.push({ name: 'luuk', points: '29', order: '0', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/nl.png' })
  drivers.push({ name: 'Aki', points: '24', order: '0', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/pl.png' })
  drivers.push({ name: 'Rayhan', points: '18', order: '0', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/be.png' })
  drivers.push({ name: 'Egamer', points: '0', order: '0', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/gb-sct.png' })
  const sortedDrivers = drivers.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points // Sort by points descending
    } else {
      // If the points are equal, sort by order value (highest first)
      return b.order - a.order
    }
  })
  return (
    <div className="drivers-list-4">
        <hr className="standing-separator-gold"></hr>
        {sortedDrivers.map(driver => {
          const driverid = sortedDrivers.findIndex(d => d.name === driver.name)
          return (
            <F1DriverStanding key={driver.points} teamColor={driver.id} teamBackground={driver.teamBackground} teamImage={driver.teamImage} constructorName={driver.teamName} driverName={driver.name} driverFlag={driver.flag} driverPosition={driverid + 1} driverPoints={sortedDrivers[driverid].points} />
          )
        })}
    </div>
  )
}
