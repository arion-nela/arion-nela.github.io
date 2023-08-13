import React from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesTier.css'
import F1RaceBox from './F1RaceBox'
import F1RaceBoxComplete from './F1RaceBoxComplete'

export default function F1RacesTierA2 () {
  const races = [
  ]
  return (
    <div className="race-tier-container">
      <F1RaceBoxComplete raceName="Melbourne" raceDate={new Date(2022, 11, 2).getTime()} raceFlag="/au.png" raceLink="/f1/races/tier-a/melbourne2" videoLink="https://www.youtube.com/watch?v=vIwjRb97EXw"/>
      <F1RaceBoxComplete raceName="Portimão" raceDate={new Date(2022, 11, 9).getTime()} raceFlag="/pt.png" raceLink="/f1/races/tier-a/portimao2" videoLink="https://www.youtube.com/watch?v=Fzu8GGtsgNg"/>
      <F1RaceBoxComplete raceName="Paul Ricard (Sprint)" raceDate={new Date(2022, 11, 16).getTime()} raceFlag="/fr.png" raceLink="/f1/races/tier-a/france2" videoLink="https://www.youtube.com/watch?v=EsIOA2crutc"/>
      <F1RaceBoxComplete raceName="Suzuka" raceDate={new Date(2023, 0, 6).getTime()} raceFlag="/jp.png" raceLink="/f1/races/tier-a/suzuka2" videoLink="https://www.youtube.com/watch?v=PzhicbQGaX4"/>
      <F1RaceBoxComplete raceName="Hungaroring" raceDate={new Date(2023, 0, 13).getTime()} raceFlag="/hu.png" raceLink="/f1/races/tier-a/hungary2" videoLink="https://www.youtube.com/watch?v=ccWjV6nppiY"/>
      <F1RaceBoxComplete raceName="Spielberg (Sprint)" raceDate={new Date(2023, 0, 20).getTime()} raceFlag="/at.png" raceLink="/f1/races/tier-a/austria2" videoLink="https://www.youtube.com/watch?v=8-TlKZYW5h4"/>
      <F1RaceBoxComplete raceName="Baku" raceDate={new Date(2023, 0, 27).getTime()} raceFlag="/az.png" raceLink="/f1/races/tier-a/baku2" videoLink="https://www.youtube.com/watch?v=DCzd0qxRVk0"/>
      <F1RaceBoxComplete raceName="Shanghai" raceDate={new Date(2023, 1, 3).getTime()} raceFlag="/cn.png" raceLink="/f1/races/tier-a/shanghai2" videoLink="https://www.youtube.com/watch?v=VfIok-85HT4"/>
      <F1RaceBoxComplete raceName="Austin (Sprint)" raceDate={new Date(2023, 1, 10).getTime()} raceFlag="/us.png" raceLink="/f1/races/tier-a/austin2" videoLink="https://www.youtube.com/watch?v=9YYJ9Reb0G8"/>
      <F1RaceBoxComplete raceName="Imola" raceDate={new Date(2023, 1, 17).getTime()} raceFlag="/it.png" raceLink="/f1/races/tier-a/imola2" videoLink="https://www.youtube.com/@10controls22"/>
      <F1RaceBoxComplete raceName="Singapore" raceDate={new Date(2023, 1, 24).getTime()} raceFlag="/sg.png" raceLink="/f1/races/tier-a/singapore2" videoLink="https://www.youtube.com/@10controls22" />
      <F1RaceBoxComplete raceName="Interlagos" raceDate={new Date(2023, 2, 3).getTime()} raceFlag="/br.png" raceLink="/f1/races/tier-a/brazil2" videoLink="https://www.youtube.com/@10controls22"/>
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
