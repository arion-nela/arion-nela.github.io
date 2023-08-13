import React, { useState, useEffect } from 'react'
import '../../App.css'
import '../../stylesheets/Register.css'
// import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import discordLogo from '../../svg/discord-logo.svg'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
// import { dblClick } from '@testing-library/user-event/dist/click'

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

export default function AdminF1Seasons () {
  const f1EntryRef = firestore.collection('f1Database').doc('test')
  // .doc('test')
  const [seasonNumber, setSeasonNumber] = useState('')

  const createSeason = async (e) => {
    e.preventDefault()

    if (f1EntryRef.collection(`Season ${seasonNumber}`).doc()) {
      console.log('already exists')
    } else {
      f1EntryRef.collection(`Season ${seasonNumber}`).doc().set({
        seasonNumber
      })
      console.log('data sent')
      setSeasonNumber('')
    }
  }

  useEffect(() => {
    f1EntryRef.get().then((doc) => {
      if (doc.exists) {
        console.log('Document data:', doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }).catch((error) => {
      console.log('Error getting document:', error)
    })
  }, [])

  return (
    <div className="page-content">
<p>Add Season</p>
<form onSubmit={createSeason}>
<input
  value={seasonNumber}
  onChange={(e) => setSeasonNumber(e.target.value)}
  placeholder="Season Number"
  type="number"
  min="1"
  required/>
  <button type="submit">Save</button>
  </form>
<p>All Seasons</p>
</div>

  )
}
