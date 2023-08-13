import React from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesTier.css'
import F1RaceBox from './F1RaceBox'
// import F1RaceBoxComplete from './F1RaceBoxComplete'

export default function F1RacesTierA3 () {
  const races = []
  races.push({ id: 1, name: 'Bahrain', date: new Date(2023, 2, 24).getTime(), flag: '/bh.png' })
  races.push({ id: 2, name: 'Great Britain', date: new Date(2023, 2, 31).getTime(), flag: '/gb.png' })
  races.push({ id: 3, name: 'Monaco', date: new Date(2023, 3, 7).getTime(), flag: '/mc.png' })
  races.push({ id: 4, name: 'Belgium (Sprint)', date: new Date(2023, 3, 14).getTime(), flag: '/be.png' })
  races.push({ id: 5, name: 'Miami', date: new Date(2023, 3, 21).getTime(), flag: '/us.png' })
  races.push({ id: 6, name: 'Saudi Arabia (Sprint)', date: new Date(2023, 3, 28).getTime(), flag: '/sa.png' })
  races.push({ id: 7, name: 'Netherlands', date: new Date(2023, 4, 5).getTime(), flag: '/nl.png' })
  races.push({ id: 8, name: 'Italy', date: new Date(2023, 4, 12).getTime(), flag: '/it.png' })
  races.push({ id: 9, name: 'Singapore', date: new Date(2023, 4, 19).getTime(), flag: '/sg.png' })
  races.push({ id: 10, name: 'Spain', date: new Date(2023, 4, 26).getTime(), flag: '/es.png' })
  return (
    <div className="race-tier-container">
      {races.map(race => {
        return (<F1RaceBox key={race.id} raceName={race.name} raceDate={race.date} raceFlag={race.flag} />)
      })}
    </div>
  )
}
