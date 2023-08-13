import React, { useState, useEffect } from 'react'
import F1SelectTeamRow from './F1SelectTeamRow'
import '../../stylesheets/F1SelectTeam.css'
import Footer from '../Footer'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

function F1SelectTeam () {
  firebase.initializeApp({
    apiKey: 'AIzaSyBfSvfjxv1YymKUixfE6D2K-H6klFmvcXU',
    authDomain: 'tencontrols2023.firebaseapp.com',
    projectId: 'tencontrols2023',
    storageBucket: 'tencontrols2023.appspot.com',
    messagingSenderId: '424505285535',
    appId: '1:424505285535:web:5420e8f041e976fe707baa',
    measurementId: 'G-5L2LXQS960'
  })

  // const auth = firebase.auth()
  const firestore = firebase.firestore()
  const teamRef = firestore.collection('f1SelectTeam').doc('INkCnUfGi0ZawJqYbJBZ')

  const mercedesSpot = [teamRef]

  useEffect(() => {
    console.log(mercedesSpot)
  }, [])

  const [selectedTeam, setSelectedTeam] = useState('')

  const handleMercedesClick = () => {
    setSelectedTeam('Mercedes')
  }

  return (
    <div className="page-content">
    <h1 className="page-content-heading">SELECT TEAM</h1>
    <p>Type your name here</p>
    <input type="text" />
    <button>Next</button>
    <div className="selectTeam">
    <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="Mercedes" spots={mercedesSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleMercedesClick}>Select</button>
    </div>
    {/* <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="Red Bull" spots={redBullSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleRedBullClick}>Select</button>
    </div>
    <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="Ferrai" spots={ferrariSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleFerrariClick}>Select</button>
    </div>
    <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="Mclaren" spots={mclarenSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleMclarenClick}>Select</button>
    </div>
    <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="Alpine" spots={alpineSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleAlpineClick}>Select</button>
    </div>
    <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="AlphaTauri" spots={alphaTauriSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleAlphaTauriClick}>Select</button>
    </div>
    <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="AstonMartin" spots={astonMartinSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleAstonMartinClick}>Select</button>
    </div>
    <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="Williams" spots={williamsSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleWilliamsClick}>Select</button>
    </div>
    <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="Alfa Romeo" spots={alfaRomeoSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleAlfaRomeoClick}>Select</button>
    </div>
    <div className="selectTeamContainer">
    <F1SelectTeamRow background="rgba(108, 211, 191, 0.2)" team="Haas" spots={haasSpot} />
    <button style={{ display: mercedesSpot !== 0 ? 'block' : 'none' }} onClick={handleHaasClick}>Select</button>
    </div> */}
    </div>
    <p>{selectedTeam}</p>
    <Footer />
    </div>
  )
}

export default F1SelectTeam
