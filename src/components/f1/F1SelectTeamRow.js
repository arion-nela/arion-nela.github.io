import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/F1SelectTeamRow.css'

function F1SelectTeamRow ({ team, spots }) {
  return (
    <div className="selectTeamRow">
        <h3 className="selectTeamRow__left">{team}</h3>
        <h4 className="selectTeamRow__right">{spots} seats remaining</h4>
    </div>
  )
}

export default F1SelectTeamRow

F1SelectTeamRow.propTypes = {
  team: PropTypes.string.isRequired,
  spots: PropTypes.array.isRequired
}
