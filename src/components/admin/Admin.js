import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/Register.css'
import AdminDashboard from './AdminDashboard'
import AdminLogin from './AdminLogin'
import Footer from '../Footer'
// import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import discordLogo from '../../svg/discord-logo.svg'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getAuth, signOut } from 'firebase/auth'

export default function Admin () {
  firebase.initializeApp({
    apiKey: 'AIzaSyBfSvfjxv1YymKUixfE6D2K-H6klFmvcXU',
    authDomain: 'tencontrols2023.firebaseapp.com',
    projectId: 'tencontrols2023',
    storageBucket: 'tencontrols2023.appspot.com',
    messagingSenderId: '424505285535',
    appId: '1:424505285535:web:5420e8f041e976fe707baa',
    measurementId: 'G-5L2LXQS960'
  })

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const [loggedIn, setLoggedIn] = useState(false)

  const auth = getAuth()

  // const sendSubmission = async (e) => {
  //   e.preventDefault()
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user
  //       // ...
  //       console.log(user)
  //       setLoggedIn(true)
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       console.log(errorCode, errorMessage)
  //     })
  // }

  const handleClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('You signed out')
      setLoggedIn(false)
    }).catch((error) => {
      // An error happened.
      console.log(error.code, error.message)
    })
  }

  return (
    <div>
<div className="page-content">
{loggedIn
  ? <>
  <AdminDashboard />
  <button onClick={handleClick}>LogOut</button>
  </>
  : <AdminLogin setLoggedIn={setLoggedIn}/>
}

<Footer />
</div>
</div>
  )
}
