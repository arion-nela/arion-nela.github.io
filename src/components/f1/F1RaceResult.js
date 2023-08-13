import React from 'react'
import PropTypes from 'prop-types'

export default function F1RaceResult ({ teamBackground, teamImage, driverFlag, driverPosition, driverName, driverInterval, driverFastLap, driverGrid, constructorName, driverPoints, arrow, lapColor }) {
  return (
      <tr style={{ background: teamBackground }}>
      <td><h3 className="data-text">{driverPosition}</h3></td>
      <td className="flag-result"><img className="team-image-driver" src={driverFlag} /></td>
      <td className="driver-name-standing"><h4 className="data-text">{driverName}</h4></td>
      <td className="team-image-standing">
        <div className="logo-name-container-2">
        <h6 className="team-name-driver-2">{constructorName}</h6>
        <img className="team-image-2" src={teamImage} />
      </div>
      </td>
      <td className="grid-position"><h6><i className={arrow}></i> {driverGrid}</h6></td>
      <td><h5 className="data-text">{driverInterval}</h5></td>
      <td className="fastest-lap"><h5 style={{ color: lapColor }}>{driverFastLap}</h5></td>
      <td><h4 className="data-text">{driverPoints}</h4></td>
    </tr>
  )
}

F1RaceResult.propTypes = {
  teamBackground: PropTypes.string.isRequired,
  teamImage: PropTypes.string.isRequired,
  constructorName: PropTypes.string.isRequired,
  driverPosition: PropTypes.string.isRequired,
  driverPoints: PropTypes.string.isRequired,
  driverFlag: PropTypes.string.isRequired,
  driverInterval: PropTypes.string.isRequired,
  driverFastLap: PropTypes.string.isRequired,
  driverGrid: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
  lapColor: PropTypes.string.isRequired,
  driverName: PropTypes.string.isRequired
}
