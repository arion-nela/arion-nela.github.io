import React from 'react'
import '../../App.css'
import '../../stylesheets/Register.css'
import { Link } from 'react-router-dom'
// import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import discordLogo from '../../svg/discord-logo.svg'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function AdminDashboard () {
  // const games = [
  //   { name: 'F1 22', id: 'f1' },
  //   { name: 'Rocket League', id: 'rl' },
  //   { name: 'ASSETTO CORSA COMPETIZIONE', id: 'acc' }
  // ]

  return (
    <div>
  <Link to="/admin/acc"><button>ACC</button></Link>
  <Link to="/admin/f1"><button>F1</button></Link>
  <Link to="/admin/rl"><button>Rocket League</button></Link>
  {/* {
    games.map((game) =>
    <div key={game.id}><Link to={'/admin/' + game.id}>{game.name}</Link></div>)
  } */}
</div>

  )
}
