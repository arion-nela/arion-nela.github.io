import React from 'react'
import F1DriverStanding from '../../F1DriverStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1DriversCup4 () {
  const drivers = []
  drivers.push({ name: 'Thomas Vink', points: '0', order: '0', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/nl.png' })
  drivers.push({ name: 'Maxfan', points: '0', order: '0', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/pl.png' })
  drivers.push({ name: 'Antonio Brancati', points: '0', order: '0', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/it.png' })
  drivers.push({ name: 'Emil Lundell', points: '0', order: '0', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/se.png' })
  drivers.push({ name: 'Sp3xtre', points: '0', order: '0', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/se.png' })
  drivers.push({ name: 'Lukáš Hendrych', points: '0', order: '0', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/cz.png' })
  drivers.push({ name: 'Daniel Bodnár', points: '0', order: '0', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/sk.png' })
  drivers.push({ name: 'Justin Janson', points: '0', order: '0', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/nl.png' })
  drivers.push({ name: 'Dallan McTeer', points: '0', order: '0', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/us.png' })
  drivers.push({ name: 'Nik kei', points: '0', order: '0', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/ua.png' })
  drivers.push({ name: 'Ondřej Macháč', points: '0', order: '0', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/cz.png' })
  drivers.push({ name: 'Adam Modan', points: '0', order: '0', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/en.png' })
  drivers.push({ name: 'Dopi', points: '0', order: '0', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/fi.png' })
  drivers.push({ name: 'Gabor', points: '0', order: '0', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/hu.png' })
  drivers.push({ name: 'Paaveli', points: '0', order: '0', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/fi.png' })
  drivers.push({ name: 'Jack', points: '0', order: '0', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/gb-sct.png' })
  drivers.push({ name: 'Octavian Ursu', points: '0', order: '0', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/ro.png' })
  drivers.push({ name: 'Focuser', points: '0', order: '0', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/es.png' })
  drivers.push({ name: 'Romeo Gagliotti', points: '0', order: '0', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/nl.png' })
  drivers.push({ name: 'Jan Švrdlik', points: '0', order: '0', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/cz.png' })
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
          if (driverid === 3) {
            return (
            <>
            <hr className="standing-separator-gold" />
            <F1DriverStanding key={driver.points} teamColor={driver.id} teamBackground={driver.teamBackground} teamImage={driver.teamImage} constructorName={driver.teamName} driverName={driver.name} driverFlag={driver.flag} driverPosition={driverid + 1} driverPoints={sortedDrivers[driverid].points} />
            </>
            )
          } else if (driverid === 15) {
            return (
            <>
            <div>
            <h5>Demotion to tier B</h5>
            <hr className="standing-separator"></hr>
            </div>
            <F1DriverStanding key={driver.points} teamColor={driver.id} teamBackground={driver.teamBackground} teamImage={driver.teamImage} constructorName={driver.teamName} driverName={driver.name} driverFlag={driver.flag} driverPosition={driverid + 1} driverPoints={sortedDrivers[driverid].points} />
            </>
            )
          } else {
            return (
            <F1DriverStanding key={driver.points} teamColor={driver.id} teamBackground={driver.teamBackground} teamImage={driver.teamImage} constructorName={driver.teamName} driverName={driver.name} driverFlag={driver.flag} driverPosition={driverid + 1} driverPoints={sortedDrivers[driverid].points} />
            )
          }
        })}
    </div>
  )
}
