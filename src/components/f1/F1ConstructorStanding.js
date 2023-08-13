import React from 'react'
import PropTypes from 'prop-types'

export default function F1ConstructorStanding ({ teamColor, teamBackground, teamImage, constructorPosition, constructorName, constructorPoints }) {
  const teamMemberBoxStyle = {
    padding: '8px 16px',
    display: 'flex',
    flexDirection: 'row',
    columnGap: '24px',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `3px solid ${teamColor}`,
    borderRadius: '15px',
    background: teamBackground
  }

  const rectangleStyle = {
    background: teamColor
  }

  return (
    <div className="team-container-4">
      <div style={ teamMemberBoxStyle } className="team-member-box-4">
        <div className="team-details-outer-4">
          <div className="team-details-container-4">
            <h4 className="team-name-4">{constructorPosition}</h4>
            <img className="team-image-4" src={teamImage} alt={constructorName} />
          </div>
          <h3 className="driver-name-4">{constructorName}</h3>
        </div>
        <div className="flag-number-container-4">
          <div className="rectangle-4" style={rectangleStyle}></div>
          <h2 className="driver-points-4">{constructorPoints}</h2>
        </div>
      </div>
    </div>
  )
}

F1ConstructorStanding.propTypes = {
  teamColor: PropTypes.string.isRequired,
  teamBackground: PropTypes.string.isRequired,
  teamImage: PropTypes.string.isRequired,
  constructorName: PropTypes.string.isRequired,
  constructorPosition: PropTypes.string.isRequired,
  constructorPoints: PropTypes.string.isRequired
}
