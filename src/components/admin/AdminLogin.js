import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/Register.css'
// import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import PropTypes from 'prop-types'
// import discordLogo from '../../svg/discord-logo.svg'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function AdminLogin (props) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBfSvfjxv1YymKUixfE6D2K-H6klFmvcXU',
    authDomain: 'tencontrols2023.firebaseapp.com',
    projectId: 'tencontrols2023',
    storageBucket: 'tencontrols2023.appspot.com',
    messagingSenderId: '424505285535',
    appId: '1:424505285535:web:5420e8f041e976fe707baa',
    measurementId: 'G-5L2LXQS960'
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const [loggedIn, setLoggedIn] = useState(false)

  const auth = getAuth()

  const sendSubmission = async (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
        console.log(user)
        props.setLoggedIn(true)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
<form onSubmit={sendSubmission}>
    <input
     value={email}
     onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      type="email"
      id="email"
    />
    <input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      type="password"
      id="password"
    />
    <button className="submit-button" type="submit">
      Login
    </button>
  </form>
  )
}

AdminLogin.propTypes = {
  setLoggedIn: PropTypes.string.isRequired
}
