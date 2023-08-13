import React from 'react'
import '../../App.css'
import '../../stylesheets/F1MainButtons.css'
import { Link } from 'react-router-dom'

function F1MainButtons () {
  return (
    <>
<div className="tier-grid-container-2">
          <Link to='/f1/races'>
          <div className="main-button-link">
            Races
          </div>
          </Link>
          <Link to='/f1/standings'>
          <div className="main-button-link">Standings</div>
          </Link>
          <Link to='/f1/drivers'>
          <div className="main-button-link">Drivers</div>
          </Link>
          <Link to='/f1/register'>
          <div className="main-button-link">Register</div>
          </Link>
        </div>
</>
  )
}

export default F1MainButtons
