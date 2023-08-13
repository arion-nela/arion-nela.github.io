import React from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesTier.css'
import F1RaceBox from './F1RaceBox'
// import F1RaceBox2 from './F1RaceBox2'
// import F1RaceBoxComplete from './F1RaceBoxComplete'

export default function F1RacesTierC4 () {
  const races = [
  ]
  races.push({ id: 1, name: 'Melbourne', date: new Date(2022, 11, 3).getTime(), flag: '/au.png' })
  races.push({ id: 2, name: 'Portimão', date: new Date(2022, 11, 10).getTime(), flag: '/pt.png' })
  races.push({ id: 3, name: 'Paul Ricard (Sprint)', date: new Date(2022, 11, 17).getTime(), flag: '/fr.png' })
  races.push({ id: 4, name: 'Suzuka', date: new Date(2023, 0, 7).getTime(), flag: '/jp.png' })
  races.push({ id: 5, name: 'Hungaroring', date: new Date(2023, 0, 14).getTime(), flag: '/hu.png' })
  races.push({ id: 6, name: 'Spielberg (Sprint)', date: new Date(2023, 0, 21).getTime(), flag: '/at.png' })
  races.push({ id: 7, name: 'Baku', date: new Date(2023, 0, 28).getTime(), flag: '/az.png' })
  races.push({ id: 8, name: 'Shanghai', date: new Date(2023, 1, 4).getTime(), flag: '/cn.png' })
  races.push({ id: 9, name: 'Austin (Sprint)', date: new Date(2023, 1, 11).getTime(), flag: '/us.png' })
  races.push({ id: 10, name: 'Imola', date: new Date(2023, 1, 18).getTime(), flag: '/it.png' })
  races.push({ id: 11, name: 'Singapore', date: new Date(2023, 1, 25).getTime(), flag: '/sg.png' })
  races.push({ id: 12, name: 'Interlagos', date: new Date(2023, 2, 4).getTime(), flag: '/br.png' })
  return (
    <div className="race-tier-container">
        {races.map(race => {
          return (<F1RaceBox key={race.id} raceName={race.name} raceDate={race.date} raceFlag={race.flag} />)
        })}
        {/* <F1RaceBox raceName="Melbourne" raceDate={['5', <sup>th</sup>, ' August 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Silverstone" raceDate={['12', <sup>th</sup>, ' August 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Spa-Francorchamps" raceDate={['19', <sup>th</sup>, ' August 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Jeddah" raceDate={['26', <sup>th</sup>, ' August 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Zandvoort" raceDate={['2', <sup>nd</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Monza (Sprint)" raceDate={['9', <sup>th</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Hungaroring" raceDate={['16', <sup>th</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Miami" raceDate={['23', <sup>rd</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Mexico" raceDate={['30', <sup>th</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Imola" raceDate={['7', <sup>th</sup>, ' October 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Barcelona" raceDate={['14', <sup>th</sup>, ' October 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Suzuka" raceDate={['21', <sup>st</sup>, ' October 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Montreal" raceDate={['28', <sup>th</sup>, ' October 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Bahrain (Sprint)" raceDate={['4', <sup>th</sup>, ' November 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Yas Marina" raceDate={['11', <sup>th</sup>, ' November 2022']} raceFlag="/au.png"/> */}
    </div>
  )
}
