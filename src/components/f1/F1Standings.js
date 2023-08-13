/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/F1Standings.css'
import F1DriversA from './Tier A/Season 1/F1DriversA'
import F1ConstructorsA from './Tier A/Season 1/F1ConstructorsA'
import F1DriversB from './Tier B/Season 1/F1DriversB'
import F1ConstructorsB from './Tier B/Season 1/F1ConstructorsB'
import F1DriversA2 from './Tier A/Season 2/F1DriversA'
import F1ConstructorsA2 from './Tier A/Season 2/F1ConstructorsA'
import F1DriversB2 from './Tier B/Season 2/F1DriversB'
import F1ConstructorsB2 from './Tier B/Season 2/F1ConstructorsB'
import F1DriversC2 from './Tier C/Season 2/F1DriversC'
import F1ConstructorsC2 from './Tier C/Season 2/F1ConstructorsC'
import F1DriversA3 from './Tier A/Season 3/F1DriversA'
import F1ConstructorsA3 from './Tier A/Season 3/F1ConstructorsA'
import F1DriversB3 from './Tier B/Season 3/F1DriversB'
import F1ConstructorsB3 from './Tier B/Season 3/F1ConstructorsB'
import F1DriversC3 from './Tier C/Season 3/F1DriversC'
import F1ConstructorsC3 from './Tier C/Season 3/F1ConstructorsC'
import F1DriversA4 from './Tier A/Season 4/F1DriversA'
import F1ConstructorsA4 from './Tier A/Season 4/F1ConstructorsA'
import Footer from '../Footer'

export default function F1Standings () {
  const [selectedDivision, setSelectedDivision] = useState('Tier A')
  const [selectedSeason, setSelectedSeason] = useState('Season 4')
  const [selectedCategory, setSelectedCategory] = useState('Drivers')
  return (
    <>
    <div className="page-content">
    <h1 className="page-content-heading">Standings</h1>
    <div className="division-menu-container">
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 1' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 1')}>Season 1</h4>
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 2' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 2')}>Season 2</h4>
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 3' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 3')}>Season 3</h4>
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 4' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 4')}>Season 4</h4>
    </div>
    <div className="division-menu-container">
        {
        selectedSeason === 'Season 1'
          ? <>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B</h4>
        </>
          : selectedSeason === 'Season 2'
            ? <>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier C' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier C')}>Tier C</h4>
          </>
            : <>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier C' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier C')}>Tier C</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'The Cup' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('The Cup')}>THE CUP</h4>
        </>
        }
    </div>
    <div className="division-menu-container">
        <h4 className="division-menu-item" style={{ color: selectedCategory === 'Drivers' ? 'white' : '#C18794' }} onClick={() => setSelectedCategory('Drivers')}>Drivers</h4>
        <h4 className="division-menu-item" style={{ color: selectedCategory === 'Constructors' ? 'white' : '#C18794' }} onClick={() => setSelectedCategory('Constructors')}>Constructors</h4>
    </div>
    <div className="drivers-list">
        {(selectedDivision === 'Tier A' && selectedCategory === 'Drivers' && selectedSeason === 'Season 1') &&
       <F1DriversA />
        }
        {(selectedDivision === 'Tier A' && selectedCategory === 'Constructors' && selectedSeason === 'Season 1') &&
       <F1ConstructorsA />
        }
        {(selectedDivision === 'Tier B' && selectedCategory === 'Drivers' && selectedSeason === 'Season 1') &&
       <F1DriversB />
        }
        {(selectedDivision === 'Tier B' && selectedCategory === 'Constructors' && selectedSeason === 'Season 1') &&
       <F1ConstructorsB />
        }
        {(selectedDivision === 'Tier A' && selectedCategory === 'Drivers' && selectedSeason === 'Season 2') &&
        <F1DriversA2/>
        }
        {(selectedDivision === 'Tier A' && selectedCategory === 'Constructors' && selectedSeason === 'Season 2') &&
        <F1ConstructorsA2/>
        }
        {(selectedDivision === 'Tier B' && selectedCategory === 'Drivers' && selectedSeason === 'Season 2') &&
        <F1DriversB2/>
        }
        {(selectedDivision === 'Tier B' && selectedCategory === 'Constructors' && selectedSeason === 'Season 2') &&
        <F1ConstructorsB2/>
        }
        {(selectedDivision === 'Tier C' && selectedCategory === 'Drivers' && selectedSeason === 'Season 2') &&
        <F1DriversC2/>
        }
        {(selectedDivision === 'Tier C' && selectedCategory === 'Constructors' && selectedSeason === 'Season 2') &&
        <F1ConstructorsC2/>
        }
        {(selectedDivision === 'Tier A' && selectedCategory === 'Drivers' && selectedSeason === 'Season 3') &&
        <F1DriversA3/>
        }
        {(selectedDivision === 'Tier A' && selectedCategory === 'Constructors' && selectedSeason === 'Season 3') &&
        <F1ConstructorsA3/>
        }
        {(selectedDivision === 'Tier B' && selectedCategory === 'Drivers' && selectedSeason === 'Season 3') &&
       <F1DriversB3 />
        }
        {(selectedDivision === 'Tier B' && selectedCategory === 'Constructors' && selectedSeason === 'Season 3') &&
       <F1ConstructorsB3 />
        }
        {(selectedDivision === 'Tier C' && selectedCategory === 'Drivers' && selectedSeason === 'Season 3') &&
       <F1DriversC3 />
        }
        {(selectedDivision === 'Tier C' && selectedCategory === 'Constructors' && selectedSeason === 'Season 3') &&
       <F1ConstructorsC3 />
        }
        {(selectedDivision === 'Tier A' && selectedCategory === 'Drivers' && selectedSeason === 'Season 4') &&
        <F1DriversA4/>
        }
        {(selectedDivision === 'Tier A' && selectedCategory === 'Constructors' && selectedSeason === 'Season 4') &&
        <F1ConstructorsA4/>
        }
    </div>
    <Footer />
    </div>
    </>
  )
}
