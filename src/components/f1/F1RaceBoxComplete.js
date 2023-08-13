import React from 'react'
import '../../App.css'
import '../../stylesheets/F1RaceBox.css'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { Link } from 'react-router-dom'

dayjs.extend(advancedFormat)

export default function F1RaceBoxComplete (props) {
  const dayObject = dayjs(props.raceDate)
  const dayString = dayObject.format('D')
  const ordinalDay = dayObject.format('Do').slice(-2)
  const dateString = dayObject.format('MMMM YYYY')
  return (
    <div className="race-box-container" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.8015581232492998) 0%, rgba(0,0,0,0.8015581232492998) 100%), url(${props.raceFlag})` }}>
      <div className="race-box-content">
        <div className="race-box-title">{props.raceName}</div>
        <div className="race-box-date">{dayString}<sup>{ordinalDay}</sup> {dateString}</div>
        <div className="race-box-button-container">
        <Link to={props.raceLink}><button className="race-box-button">Results</button></Link>
        <a href={props.videoLink} target="_blank" rel="noreferrer"><button className="race-box-button">Highlights</button></a>
        </div>
      </div>
    </div>
  )
}

F1RaceBoxComplete.propTypes = {
  raceName: PropTypes.string.isRequired,
  raceDate: PropTypes.number.isRequired,
  raceFlag: PropTypes.string.isRequired,
  raceLink: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired
}
