import React from 'react'
import PropTypes from 'prop-types'

export default function F1DriverStanding ({ teamBackground, teamImage, driverFlag, driverPosition, driverName, constructorName, driverPoints }) {
  const teamMemberBoxStyle = {
    padding: '8px 16px',
    display: 'flex',
    flexDirection: 'row',
    columnGap: '24px',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px',
    background: teamBackground
  }

  return (
      <div className="team-container-4">
          <div style={teamMemberBoxStyle} className="team-member-box-4">
            <div className="team-details-outer-4">
            <div className="team-details-container-4">
            <h4 className="team-name-4">{driverPosition}</h4>
              <img className="team-image-driver-4" src={driverFlag} />
              </div>
              <h3 className="driver-name-4">{driverName}</h3>
              </div>
              <div className="team-points-container-4">
                <div className="logo-name-container-4">
              <h6 className="team-name-driver-4">{constructorName}</h6>
              <img className="team-image-4" src={teamImage} />
              </div>
            <h2 className="driver-points-4">{driverPoints}</h2>
          </div>
          </div>
      </div>
  )
}

F1DriverStanding.propTypes = {
  teamColor: PropTypes.string.isRequired,
  teamBackground: PropTypes.string.isRequired,
  teamImage: PropTypes.string.isRequired,
  constructorName: PropTypes.string.isRequired,
  driverPosition: PropTypes.string.isRequired,
  driverPoints: PropTypes.string.isRequired,
  driverFlag: PropTypes.string.isRequired,
  driverName: PropTypes.string.isRequired
}
