import React from 'react'
import PropTypes from 'prop-types'

export default function F1Team ({ teamColor, teamBackground, teamImage, teamName, driver1Name, driver1Number, driver1Flag, driver2Name, driver2Number, driver2Flag }) {
  return (
    <div className="team-container">
        <div style={{ background: teamBackground }} className="team-member-box">
          <div className="team-details-outer">
          <div className="team-details-container">
          <div style={{ background: teamColor }} className="rectangle"></div>
            <img className="team-image" src={teamImage} />
            <h6 className="team-name">{teamName}</h6>
            </div>
            <h3 className="driver-name">{driver1Name}</h3>
            </div>
            <div className="flag-number-container">
          <h2>{driver1Number}</h2>
          <img className="driver-flag" src={driver1Flag} />
        </div>
        </div>
        <div style={{ background: teamBackground }} className="team-member-box">
          <div className="team-details-outer">
          <div className="team-details-container">
          <div style={{ background: teamColor }} className="rectangle"></div>
            <img className="team-image" src={teamImage} />
            <h6 className="team-name">{teamName}</h6>
            </div>
            <h3 className="driver-name">{driver2Name}</h3>
            </div>
            <div className="flag-number-container">
          <h2>{driver2Number}</h2>
          <img className="driver-flag" src={driver2Flag} />
        </div>
        </div>
    </div>
  )
}

F1Team.propTypes = {
  teamColor: PropTypes.string.isRequired,
  teamBackground: PropTypes.string.isRequired,
  teamImage: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  driver1Name: PropTypes.string.isRequired,
  driver1Flag: PropTypes.string.isRequired,
  driver1Number: PropTypes.string.isRequired,
  driver2Name: PropTypes.string.isRequired,
  driver2Flag: PropTypes.string.isRequired,
  driver2Number: PropTypes.string.isRequired
}
