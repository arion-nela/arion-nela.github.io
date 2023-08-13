/* eslint-disable no-unused-vars */
import React from 'react'
import '../../App.css'
import '../../stylesheets/F1Main.css'
import HeroImage from '../HeroImage'
import RLTournamentBox from './RLTournamentBox'
import Footer from '../Footer'

function F1Races () {
  return (
    <>
<HeroImage heroBackground="/rl-hero-bg.jpg" heroText="Rocket League Tournaments"/>

<div className="page-content">
<div className="tournament-list">
  <h2 style={{ textAlign: 'center' }}>Upcoming Tournaments</h2>
{/* <RLTournamentBox tournamentName="QUALIFIER EVENT 1" tournamentDate={new Date(2022, 8, 1).getTime()} tournamentPrize="$25 USD Prize Pool" detailsLink="/rl/tournaments/autumn/qualifier-event-1"/> */}
{/* <RLTournamentBox tournamentName="QUALIFIER EVENT 2" tournamentDate={new Date(2022, 8, 29).getTime()} tournamentPrize="$25 USD Prize Pool" detailsLink="/rl/tournaments/autumn/qualifier-event-2"/> */}
<RLTournamentBox tournamentName="QUALIFIER EVENT 3" tournamentDate={new Date(2022, 9, 27).getTime()} tournamentPrize="$25 USD Prize Pool" detailsLink="/rl/tournaments/autumn/qualifier-event-3"/>
<RLTournamentBox tournamentName="PLAYOFFS" tournamentDate={new Date(2022, 10, 24).getTime()} tournamentPrize="$60 USD Prize Pool" detailsLink="/rl/tournaments/autumn/playoffs"/>
</div>
<Footer />
</div>
</>
  )
}

export default F1Races
