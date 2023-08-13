import React from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation'
import Home from './components/Home'
import F1SelectTeam from './components/f1/F1SelectTeam'
import F1Main from './components/f1/F1Main'
import F1Races from './components/f1/F1Races'
import F1Register from './components/f1/F1Register'
import F1Drivers from './components/f1/F1Drivers'
import F1Standings from './components/f1/F1Standings'
import RLMain from './components/rl/RLMain'
import RLTournaments from './components/rl/RLTournaments'
import RLRegister from './components/rl/RLRegister'
import RLQualifier from './components/rl/RLQualifier'
import RLPlayoffs from './components/rl/RLPlayoffs'
import F1RacesMelbourneA from './components/f1/Tier A/Season 1/F1RacesMelbourneA'
import F1RacesMelbourneB from './components/f1/Tier B/Season 1/F1RacesMelbourneB'
import F1RacesSilverstoneA from './components/f1/Tier A/Season 1/F1RacesSilverstoneA'
import F1RacesSilverstoneB from './components/f1/Tier B/Season 1/F1RacesSilverstoneB'
import F1RacesSpaA from './components/f1/Tier A/Season 1/F1RacesSpaA'
import F1RacesSpaB from './components/f1/Tier B/Season 1/F1RacesSpaB'
import F1RacesJeddahA from './components/f1/Tier A/Season 1/F1RacesJeddahA'
import F1RacesJeddahB from './components/f1/Tier B/Season 1/F1RacesJeddahB'
import F1RacesZandvoortA from './components/f1/Tier A/Season 1/F1RacesZandvoortA'
import F1RacesZandvoortB from './components/f1/Tier B/Season 1/F1RacesZandvoortB'
import F1RacesMonzaA from './components/f1/Tier A/Season 1/F1RacesMonzaA'
import F1RacesMonzaB from './components/f1/Tier B/Season 1/F1RacesMonzaB'
import F1RacesMonzaC from './components/f1/F1RacesMonzaC'
import F1RacesHungaroringA from './components/f1/Tier A/Season 1/F1RacesHungaroringA'
import F1RacesHungaroringB from './components/f1/Tier B/Season 1/F1RacesHungaroringB'
import F1RacesHungaroringC from './components/f1/F1RacesHungaroringC'
import F1RacesMiamiA from './components/f1/Tier A/Season 1/F1RacesMiamiA'
import F1RacesMexicoA from './components/f1/Tier A/Season 1/F1RacesMexicoA'
import F1RacesMexicoB from './components/f1/Tier B/Season 1/F1RacesMexicoB'
import F1RacesMiamiB from './components/f1/Tier B/Season 1/F1RacesMiamiB'
import F1RacesImolaA from './components/f1/Tier A/Season 1/F1RacesImolaA'
import F1RacesImolaB from './components/f1/Tier B/Season 1/F1RacesImolaB'
import F1RacesSpainA from './components/f1/Tier A/Season 1/F1RacesSpainA'
import F1RacesSpainB from './components/f1/Tier B/Season 1/F1RacesSpainB'
import F1RacesSuzukaA from './components/f1/Tier A/Season 1/F1RacesSuzukaA'
import F1RacesSuzukaB from './components/f1/Tier B/Season 1/F1RacesSuzukaB'
import F1RacesMontrealA from './components/f1/Tier A/Season 1/F1RacesMontrealA'
import F1RacesMontrealB from './components/f1/Tier B/Season 1/F1RacesMontrealB'
import F1RacesBahrainA from './components/f1/Tier A/Season 1/F1RacesBahrainA'
import F1RacesBahrainB from './components/f1/Tier B/Season 1/F1RacesBahrainB'
import F1RacesAbuDhabiA from './components/f1/Tier A/Season 1/F1RacesAbuDhabiA'
import F1RacesAbuDhabiB from './components/f1/Tier B/Season 1/F1RacesAbuDhabiB'
import Admin from './components/admin/Admin'
// import AdminACC from './components/admin/AdminACC'
import AdminF1 from './components/admin/AdminF1'
import AdminF1Seasons from './components/admin/AdminF1Seasons'
// import AdminRL from './components/admin/AdminRL'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/f1" element={<F1Main />} />
            <Route path="/f1/select-team" element={<F1SelectTeam />} />
            <Route path="/f1/races" element={<F1Races />} />
            <Route path="/f1/races/tier-a/melbourne" element={<F1RacesMelbourneA />} />
            <Route path="/f1/races/tier-b/melbourne" element={<F1RacesMelbourneB />} />
            <Route path="/f1/races/tier-a/silverstone" element={<F1RacesSilverstoneA />} />
            <Route path="/f1/races/tier-b/silverstone" element={<F1RacesSilverstoneB />} />
            <Route path="/f1/races/tier-a/spa-francorchamps" element={<F1RacesSpaA />} />
            <Route path="/f1/races/tier-b/spa-francorchamps" element={<F1RacesSpaB />} />
            <Route path="/f1/races/tier-a/jeddah" element={<F1RacesJeddahA />} />
            <Route path="/f1/races/tier-b/jeddah" element={<F1RacesJeddahB />} />
            <Route path="/f1/races/tier-a/zandvoort" element={<F1RacesZandvoortA />} />
            <Route path="/f1/races/tier-b/zandvoort" element={<F1RacesZandvoortB />} />
            <Route path="/f1/races/tier-a/hungaroring" element={<F1RacesHungaroringA />} />
            <Route path="/f1/races/tier-b/hungaroring" element={<F1RacesHungaroringB />} />
            <Route path="/f1/races/tier-c/hungaroring" element={<F1RacesHungaroringC />} />
            <Route path="/f1/races/tier-a/miami" element={<F1RacesMiamiA />} />
            <Route path="/f1/races/tier-b/miami" element={<F1RacesMiamiB />} />
            <Route path="/f1/races/tier-b/monza" element={<F1RacesMonzaB />} />
            <Route path="/f1/races/tier-c/monza" element={<F1RacesMonzaC />} />
            <Route path="/f1/races/tier-a/monza" element={<F1RacesMonzaA />} />
            <Route path="/f1/races/tier-a/mexico" element={<F1RacesMexicoA />} />
            <Route path="/f1/races/tier-b/mexico" element={<F1RacesMexicoB />} />
            <Route path="/f1/races/tier-a/imola" element={<F1RacesImolaA />} />
            <Route path="/f1/races/tier-b/imola" element={<F1RacesImolaB />} />
            <Route path="/f1/races/tier-a/spain" element={<F1RacesSpainA />} />
            <Route path="/f1/races/tier-a/suzuka" element={<F1RacesSuzukaA />} />
            <Route path="/f1/races/tier-b/suzuka" element={<F1RacesSuzukaB />} />
            <Route path="/f1/races/tier-b/spain" element={<F1RacesSpainB />} />
            <Route path="/f1/races/tier-a/montreal" element={<F1RacesMontrealA />} />
            <Route path="/f1/races/tier-b/montreal" element={<F1RacesMontrealB />} />
            <Route path="/f1/races/tier-a/bahrain" element={<F1RacesBahrainA />} />
            <Route path="/f1/races/tier-b/bahrain" element={<F1RacesBahrainB />} />
            <Route path="/f1/races/tier-a/abu-dhabi" element={<F1RacesAbuDhabiA />} />
            <Route path="/f1/races/tier-b/abu-dhabi" element={<F1RacesAbuDhabiB />} />
            <Route path="/f1/register" element={<F1Register />} />
            <Route path="/f1/drivers" element={<F1Drivers />} />
            <Route path="/f1/standings" element={<F1Standings />} />
            <Route path="/rl" element={<RLMain />} />
            <Route path="/rl/tournaments" element={<RLTournaments />} />
            <Route path="/rl/register" element={<RLRegister />} />
            <Route path="/rl/tournaments/autumn/qualifier-event-1" element={<RLQualifier tournamentName="QUALIFIER EVENT 1 - AUTUMN" tournamentPrize="$25" tournamentDate="THURSDAY, 1ST SEPTEMBER 2022"/>} />
            <Route path="/rl/tournaments/autumn/qualifier-event-2" element={<RLQualifier tournamentName="QUALIFIER EVENT 2 - AUTUMN" tournamentPrize="$25" tournamentDate="THURSDAY, 29th SEPTEMBER 2022"/>} />
            <Route path="/rl/tournaments/autumn/qualifier-event-3" element={<RLQualifier tournamentName="QUALIFIER EVENT 3 - AUTUMN" tournamentPrize="$25" tournamentDate="THURSDAY, 27th October 2022"/>} />
            <Route path="/rl/tournaments/autumn/playoffs" element={<RLPlayoffs tournamentName="Playoffs - AUTUMN" tournamentPrize="$60" tournamentDate="THURSDAY, 24th November 2022" />} />
            <Route path="admin" element={<Admin />} />
            <Route path="/admin/f1" element={<AdminF1 />} />
            <Route path="/admin/f1/seasons" element={<AdminF1Seasons />} />
            {/* <Route path="/admin/rl" element={<AdminACC />} />
            <Route path="/admin/" element={<AdminF1 />} />
            <Route path="/admin/rl" element={<AdminRL />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
