/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../svg/logo.svg'
import discordLogo from '../svg/discord-logo.svg'
import '../stylesheets/SecondaryNav.css'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'

export default function SecondaryNav () {
  return (
    <>
      <nav className="secondary-site-nav">
        <div className="secondary-navigation-content">
          <Link to='/f1/races'>
          <div className="secondary-navigation-link">
            Races
          </div>
          </Link>
          <Link to='/f1/drivers'>
          <div className="secondary-navigation-link">Drivers</div>
          </Link>
          <Link to='/f1/register'>
          <div className="secondary-navigation-link">Register</div>
          </Link>
        </div>
      </nav>
    </>
  )
}
