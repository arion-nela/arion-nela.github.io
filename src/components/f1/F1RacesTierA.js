import React from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesTier.css'
import F1RaceBox from './F1RaceBox'
import F1RaceBoxComplete from './F1RaceBoxComplete'

export default function F1RacesTierA () {
  const races = [
  ]
  return (
    <div className="race-tier-container">
      <F1RaceBoxComplete raceName="Melbourne" raceDate={new Date(2022, 7, 5).getTime()} raceFlag="/au.png" raceLink="/f1/races/tier-a/melbourne" videoLink="https://www.youtube.com/watch?v=nh6SaPSJByY&t=138s"/>
      <F1RaceBoxComplete raceName="Silverstone" raceDate={new Date(2022, 7, 12).getTime()} raceFlag="/gb.png" raceLink="/f1/races/tier-a/silverstone" videoLink="https://www.youtube.com/watch?v=yw-ooSL5eSI&t=302s"/>
      <F1RaceBoxComplete raceName="Spa-Francorchamps" raceDate={new Date(2022, 7, 19).getTime()} raceFlag="/be.png" raceLink="/f1/races/tier-a/spa-francorchamps" videoLink="https://www.youtube.com/watch?v=ITlNwXjxYD0&t=233s"/>
      <F1RaceBoxComplete raceName="Jeddah" raceDate={new Date(2022, 7, 26).getTime()} raceFlag="/sa.png" raceLink="/f1/races/tier-a/jeddah" videoLink="https://www.youtube.com/watch?v=s_xJ5oR-8pY&t=183s"/>
      <F1RaceBoxComplete raceName="Zandvoort" raceDate={new Date(2022, 8, 2).getTime()} raceFlag="/nl.png" raceLink="/f1/races/tier-a/zandvoort" videoLink="https://www.youtube.com/watch?v=maISP1lFtOQ"/>
      <F1RaceBoxComplete raceName="Monza (Sprint)" raceDate={new Date(2022, 8, 9).getTime()} raceFlag="/it.png" raceLink="/f1/races/tier-a/monza" videoLink="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg"/>
      <F1RaceBoxComplete raceName="Hungaroring" raceDate={new Date(2022, 8, 16).getTime()} raceFlag="/hu.png" raceLink="/f1/races/tier-a/hungaroring" videoLink="https://www.youtube.com/watch?v=gee1ZpKVPkk"/>
      <F1RaceBoxComplete raceName="Miami" raceDate={new Date(2022, 8, 23).getTime()} raceFlag="/us.png" raceLink="/f1/races/tier-a/miami" videoLink="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg"/>
      <F1RaceBoxComplete raceName="Mexico" raceDate={new Date(2022, 8, 30).getTime()} raceFlag="/mx.png" raceLink="/f1/races/tier-a/mexico" videoLink="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg"/>
      <F1RaceBoxComplete raceName="Imola (Sprint)" raceDate={new Date(2022, 9, 7).getTime()} raceFlag="/it.png" raceLink="/f1/races/tier-a/imola" videoLink="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg"/>
      <F1RaceBoxComplete raceName="Barcelona" raceDate={new Date(2022, 9, 14).getTime()} raceFlag="/es.png" raceLink="/f1/races/tier-a/spain" videoLink="https://www.youtube.com/watch?v=-F7HoD0nby4&ab_channel=10Controls" />
      <F1RaceBoxComplete raceName="Suzuka" raceDate={new Date(2022, 9, 21).getTime()} raceFlag="/jp.png" raceLink="/f1/races/tier-a/suzuka" videoLink="https://www.youtube.com/watch?v=ffK_BZgOKXA"/>
      <F1RaceBoxComplete raceName="Montreal" raceDate={new Date(2022, 9, 28).getTime()} raceFlag="/ca.png" raceLink="/f1/races/tier-a/montreal" videoLink="https://www.youtube.com/watch?v=KC_EQEd0aQA"/>
      <F1RaceBoxComplete raceName="Bahrain (Sprint)" raceDate={new Date(2022, 10, 4).getTime()} raceFlag="/bh.png" raceLink="/f1/races/tier-a/bahrain" videoLink="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg"/>
      <F1RaceBoxComplete raceName="Yas Marina" raceDate={new Date(2022, 10, 11).getTime()} raceFlag="/ae.png" raceLink="/f1/races/tier-a/abu-dhabi" videoLink="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg"/>
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
