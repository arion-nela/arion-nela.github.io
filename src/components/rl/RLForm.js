/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/Register.css'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import discordLogo from '../../svg/discord-logo.svg'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function RLForm () {
  firebase.initializeApp({
    apiKey: 'AIzaSyBfSvfjxv1YymKUixfE6D2K-H6klFmvcXU',
    authDomain: 'tencontrols2023.firebaseapp.com',
    projectId: 'tencontrols2023',
    storageBucket: 'tencontrols2023.appspot.com',
    messagingSenderId: '424505285535',
    appId: '1:424505285535:web:5420e8f041e976fe707baa',
    measurementId: 'G-5L2LXQS960'
  })

  const auth = firebase.auth()
  const firestore = firebase.firestore()

  const rlEntryRef = firestore.collection('rl-entry')

  const [name, setName] = useState('')
  const [discordTag, setDiscordTag] = useState('')
  const [nationality, setNationality] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)

  const sendSubmission = async (e) => {
    e.preventDefault()
    await rlEntryRef.add({
      name,
      discord_tag: discordTag,
      nationality,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })

    setName('')
    setDiscordTag('')
    setNationality('')
    setShowConfirmation(true)
  }
  return (
    <>
      <div className="form-container">
        <div className="form-heading-container">
          <h3 className="form-step">Step 1. Fill out the form</h3>
          <h4 className="form-step-description">
            To get a spot in a Rocket League Tournament
          </h4>
        </div>
        <div>
        {showConfirmation === false
          ? <form onSubmit={sendSubmission}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="In Game Name"
            required
          />
          <h6 style={{ textAlign: 'left' }}>Your in game name can be found in the bottom left of the Rocket League Main Menu as seen in the image below.</h6>
          <img className="form-image" src="/rl-in-game-name-2.png"/>
          <input
            value={discordTag}
            onChange={(e) => setDiscordTag(e.target.value)}
            placeholder="Discord Tag"
            required
          />
          <input
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            placeholder="nationality"
            required
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
          : <p className="confirmation-message">Thank you for registering. Make sure you join our discord server to complete your registration.</p>
        }
        </div>
      </div>
      <div className="form-container">
        <div className="form-heading-container">
          <h3 className="form-step">Step 2. Join our discord server</h3>
          <h4 className="form-step-description">
            To confirm your registration and be eligible for competing in Rocket Leage Tournaments
          </h4>
        </div>
        <div className="discord-info-container">
            <img
              className="discord-logo-reg"
              src={discordLogo}
              alt="Discord Logo"
            />
          <div className="discord-content-container">
            <h3>10 Controls Community</h3>
            <a href="https://discord.gg/10controls" target="_blank" rel="noreferrer"><button className="discord-join-button">Join</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
