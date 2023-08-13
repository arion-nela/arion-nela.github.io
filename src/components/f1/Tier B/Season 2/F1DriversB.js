import React from 'react'
import F1DriverStanding from '../../F1DriverStanding'
import '../../../../stylesheets/F1Standings.css'

export default function F1DriversB2 () {
  const drivers = []
  drivers.push({ name: 'Maxfan', points: '114', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/pl.png' })
  drivers.push({ name: 'Lukáš Hendrych', points: '99', teamBackground: 'rgba(54, 113, 198, 0.2)', teamName: 'Red Bull', teamImage: '/red-bull.png', flag: '/cz.png' })
  drivers.push({ name: 'Justin Janson', points: '143', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/nl.png' })
  drivers.push({ name: 'Lando', points: '10', teamBackground: 'rgba(249, 21, 54, 0.2)', teamName: 'Ferrari', teamImage: '/ferrari.png', flag: '/pl.png' })
  drivers.push({ name: 'Sp3xtre', points: '148', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/se.png' })
  drivers.push({ name: 'Uklucasw', points: '37', teamBackground: 'rgba(108, 211, 191, 0.2)', teamName: 'Mercedes', teamImage: '/mercedes.png', flag: '/gb-eng.png' })
  drivers.push({ name: 'Max Housley', points: '98', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/gb-eng.png' })
  drivers.push({ name: 'Vade', points: '91', teamBackground: 'rgba(34, 147, 209, 0.2)', teamName: 'Alpine', teamImage: '/alpine.png', flag: '/se.png' })
  drivers.push({ name: 'CountMuttly', points: '47', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/dk.png' })
  drivers.push({ name: 'Eymen Akin', points: '30', teamBackground: 'rgba(245, 128, 32, 0.2)', teamName: 'McLaren', teamImage: '/mclaren.png', flag: '/tr.png' })
  drivers.push({ name: 'KelanKingi', points: '43', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/fi.png' })
  drivers.push({ name: 'Bald', points: '37', teamBackground: 'rgba(201, 45, 75, 0.2)', teamName: 'Alfa Romeo', teamImage: '/alfa-romeo.png', flag: '/ie.png' })
  drivers.push({ name: 'HackoDK', points: '20', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/dk.png' })
  drivers.push({ name: 'Jack', points: '6', teamBackground: 'rgba(53, 140, 117, 0.2)', teamName: 'Aston Martin', teamImage: '/aston-martin.png', flag: '/gb-sct.png' })
  drivers.push({ name: 'Bolar', points: '10', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/nl.png' })
  drivers.push({ name: 'XNotFrankie', points: '1', teamBackground: 'rgba(182, 186, 189, 0.2)', teamName: 'Haas', teamImage: '/haas.png', flag: '/gb-eng.png' })
  drivers.push({ name: 'Rocky', points: '45', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/de.png' })
  drivers.push({ name: 'EndAndrews', points: '24', teamBackground: 'rgba(94, 143, 170, 0.2)', teamName: 'AlphaTauri', teamImage: '/alpha-tauri.png', flag: '/cz.png' })
  drivers.push({ name: 'bartusg5', points: '36', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/hu.png' })
  drivers.push({ name: 'BEAST', points: '0', teamBackground: 'rgba(55, 190, 221, 0.2)', teamName: 'Williams', teamImage: '/williams.png', flag: '/mx.png' })
  const sortedDrivers = drivers.sort((a, b) => b.points - a.points)
  return (
    <div className="drivers-list-4">
        <hr className="standing-separator-gold"></hr>
        {sortedDrivers.map(driver => {
          const driverid = sortedDrivers.findIndex(d => d.name === driver.name)
          console.log(driverid)
          if (driverid === 5) {
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
            <h5>Proceed to qualifiers</h5>
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
  /* return (
    <div className="race-tier-container">
      {drivers.map(race => {
        return (<F1DriverStanding teamColor={drivers.id} teamBackground={drivers.teamBackground} teamImage={drivers.teamImage} constructorName={drivers.teamImage} driverName={drivers.name} driverFlag={drivers.flag} />)
      })}
    </div>
  ) */
  /* return (
    <div className="drivers-list-4">
        <hr className="standing-separator-gold"></hr>
        <F1DriverStanding teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Thomas Vink" driverFlag="/nl.png" driverPosition="1" driverPoints="0" />
        <F1DriverStanding teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverPosition="2" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Antonio Brancati" driverFlag="/it.png" driverPosition="3" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Emil Lundell" driverFlag="/se.png" driverPosition="4" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Sp3xtre" driverFlag="/se.png" driverPosition="5" driverPoints="0" />
        <hr className="standing-separator-gold"></hr>
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Lukas Hendrych" driverFlag="/cz.png" driverPosition="6" driverPoints="0" />
        <F1DriverStanding teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Daniel Bodnar" driverFlag="/sk.png" driverPosition="7" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Justin Janson" driverFlag="/nl.png" driverPosition="8" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="McLaren" driverName="Dallan McTeer" driverFlag="/us.png" driverPosition="9" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="McLaren" driverName="Nik kei" driverFlag="/ua.png" driverPosition="10" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="EndAndrews" driverFlag="/cz.png" driverPosition="11" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Adam Modan" driverFlag="/gb.png" driverPosition="12" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Dopi" driverFlag="/fi.png" driverPosition="13" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Gabor" driverFlag="/hu.png" driverPosition="14" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Paaveli" driverFlag="/fi.png" driverPosition="15" driverPoints="0" />
        <div>
        <h5>Demotion to tier b</h5>
        <hr className="standing-separator"></hr>
        </div>
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(32, 32, 32, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Jack" driverFlag="/sc.png" driverPosition="16" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Octavian Ursu" driverFlag="/ro.png" driverPosition="17" driverPoints="0" />
        <F1DriverStanding teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driverName="Focuser" driverFlag="/es.png" driverPosition="18" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Romeo Gagliotti" driverFlag="/nl.png" driverPosition="19" driverPoints="0" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Jan Švrdlik" driverFlag="/cz.png" driverPosition="20" driverPoints="0" />
        <hr className="standing-separator"></hr>
    </div>
  ) */
}
