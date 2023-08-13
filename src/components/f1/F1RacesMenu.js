import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesMenu.css'
import F1RacesTierA from './F1RacesTierA'
import F1RacesTierB from './F1RacesTierB'
import F1RacesTierA2 from './F1RacesTierA2'
import F1RacesTierB2 from './F1RacesTierB2'
import F1RacesTierC2 from './F1RacesTierC2'
import F1RacesTierA3 from './F1RacesTierA3'
import F1RacesTierB3 from './F1RacesTierB3'
import F1RacesTierC3 from './F1RacesTierC3'
import F1RacesCup3 from './F1RacesCup3'
import F1RacesTierA4 from './F1RacesTierA4'
import F1RacesTierB4 from './F1RacesTierB4'
import F1RacesTierC4 from './F1RacesTierC4'
import F1RacesCup4 from './F1RacesCup4'

export default function F1RacesMenu () {
  const [selectedSeason, setSelectedSeason] = useState('Season 4')
  const [selectedTier, setSelectedTier] = useState('Tier A')

  return (
    <div className="races-menu-container">
        <div className="tier-container">
        <div style={{ color: selectedSeason === 'Season 1' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedSeason('Season 1')}>Season 1</div>
        <div style={{ color: selectedSeason === 'Season 2' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedSeason('Season 2')}>Season 2</div>
        <div style={{ color: selectedSeason === 'Season 3' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedSeason('Season 3')}>Season 3</div>
        <div style={{ color: selectedSeason === 'Season 4' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedSeason('Season 4')}>Season 4</div>
        </div>
        <div className="tier-container">
        {
        selectedSeason === 'Season 1'
          ? <>
        <h4 className="division-menu-item" style={{ color: selectedTier === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedTier('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedTier === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedTier('Tier B')}>Tier B</h4>
        </>
          : selectedSeason === 'Season 2'
            ? <>
        <h4 className="division-menu-item" style={{ color: selectedTier === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedTier('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedTier === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedTier('Tier B')}>Tier B</h4>
        <h4 className="division-menu-item" style={{ color: selectedTier === 'Tier C' ? 'white' : '#C18794' }} onClick={() => setSelectedTier('Tier C')}>Tier C</h4>
          </>
            : <>
        <h4 className="division-menu-item" style={{ color: selectedTier === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedTier('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedTier === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedTier('Tier B')}>Tier B</h4>
        <h4 className="division-menu-item" style={{ color: selectedTier === 'Tier C' ? 'white' : '#C18794' }} onClick={() => setSelectedTier('Tier C')}>Tier C</h4>
        <h4 className="division-menu-item" style={{ color: selectedTier === 'The Cup' ? 'white' : '#C18794' }} onClick={() => setSelectedTier('The Cup')}>THE CUP</h4>
        </>
        }
        </div>
        <div>
        {selectedSeason === 'Season 1' && selectedTier === 'Tier A'
          ? <F1RacesTierA />
          : selectedSeason === 'Season 1' && selectedTier === 'Tier B'
            ? <F1RacesTierB />
            : selectedSeason === 'Season 1' && selectedTier === 'Tier C'
              ? <F1RacesTierA />
              : selectedSeason === 'Season 1' && selectedTier === 'The Cup'
                ? <F1RacesTierA />
                : selectedSeason === 'Season 2' && selectedTier === 'Tier A'
                  ? <F1RacesTierA2 />
                  : selectedSeason === 'Season 2' && selectedTier === 'Tier B'
                    ? <F1RacesTierB2 />
                    : selectedSeason === 'Season 2' && selectedTier === 'Tier C'
                      ? <F1RacesTierC2 />
                      : selectedSeason === 'Season 2' && selectedTier === 'The Cup'
                        ? <F1RacesTierA2 />
                        : selectedSeason === 'Season 3' && selectedTier === 'Tier A'
                          ? <F1RacesTierA3 />
                          : selectedSeason === 'Season 3' && selectedTier === 'Tier B'
                            ? <F1RacesTierB3 />
                            : selectedSeason === 'Season 3' && selectedTier === 'Tier C'
                              ? <F1RacesTierC3 />
                              : selectedSeason === 'Season 3' && selectedTier === 'The Cup'
                                ? <F1RacesCup3 />
                                : selectedSeason === 'Season 4' && selectedTier === 'Tier A'
                                  ? <F1RacesTierA4 />
                                  : selectedSeason === 'Season 4' && selectedTier === 'Tier B'
                                    ? <F1RacesTierB4 />
                                    : selectedSeason === 'Season 4' && selectedTier === 'Tier C'
                                      ? <F1RacesTierC4 />
                                      : selectedSeason === 'Season 4' && selectedTier === 'The Cup'
                                        ? <F1RacesCup4 />
                                        : <h4>Something broke</h4>
        }
        </div>
        </div>
  )
}
