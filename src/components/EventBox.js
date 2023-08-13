import React from 'react'
import '../stylesheets/UpcomingEvents.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function EventBox ({ game, gameImage, tournamentType, tournamentName, tournamentDate, buttonLink, viewAllLink }) {
  return (
    <div>
        <div className="event-heading-container">
        <h3>{game}</h3>
        <Link to={viewAllLink}><p className="view-all-link">View all</p></Link>
        </div>
        <div className="event-box">
          <div className="event-type-container">
            <div className="event-logo-container">
            <img className="event-logo" src={gameImage}/>
            </div>
            <h6 className="event-type-name">{tournamentType}</h6>
          </div>
          <div className="event-details-container">
            <h4 className="event-main-header">{tournamentName}</h4>
            <h5 className="event-secondary-header">{tournamentDate}</h5>
          </div>
          <div className="event-register-container"><Link to={buttonLink}><button className="tier-button">Register Now</button></Link></div>
        </div>
        </div>
  )
}

EventBox.propTypes = {
  game: PropTypes.string.isRequired,
  gameImage: PropTypes.string.isRequired,
  tournamentType: PropTypes.string.isRequired,
  tournamentName: PropTypes.string.isRequired,
  tournamentDate: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  viewAllLink: PropTypes.string.isRequired
}
