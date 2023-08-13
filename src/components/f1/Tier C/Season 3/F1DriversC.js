import React from 'react'
import F1DriverStanding from '../../F1DriverStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1DriversC3 () {
  const drivers = []
  drivers.push({ name: 'Sharky', points: '68', order: '0', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/se.png' })
  drivers.push({ name: 'Lukas', points: '55', order: '0', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/dk.png' })
  drivers.push({ name: 'afnonso', points: '149', order: '0', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/es.png' })
  drivers.push({ name: 'Manuel', points: '30', order: '1', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/it.png' })
  drivers.push({ name: 'c0zm1c', points: '80', order: '0', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/en.png' })
  drivers.push({ name: 'Rayhan', points: '24', order: '0', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/be.png' })
  drivers.push({ name: 'Sea Pulse', points: '27', order: '0', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/nl.png' })
  drivers.push({ name: 'BasiqlyCrazy', points: '4', order: '1', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/nl.png' })
  drivers.push({ name: 'jarmo', points: '56', order: '0', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/nl.png' })
  drivers.push({ name: 'luuk', points: '16', order: '0', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/nl.png' })
  drivers.push({ name: 'danottok', points: '30', order: '0', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/fi.png' })
  drivers.push({ name: 'Henry', points: '19', order: '0', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/us.png' })
  drivers.push({ name: 'Aki', points: '4', order: '0', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/pl.png' })
  drivers.push({ name: 'Porp', points: '6', order: '0', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/gb.png' })
  drivers.push({ name: 'CurtisJones', points: '179', order: '0', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/gb.png' })
  drivers.push({ name: 'OGK Snake', points: '35', order: '0', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/gb.png' })
  drivers.push({ name: 'Flerber', points: '1', order: '0', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/gb.png' })
  drivers.push({ name: 'Rabas', points: '6', order: '1', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/es.png' })
  drivers.push({ name: 'Saad', points: '9', order: '0', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/sa.png' })
  drivers.push({ name: 'Tinos_RL', points: '34', order: '0', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/nl.png' })
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
