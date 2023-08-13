import React from 'react'
import '../../App.css'
import '../../stylesheets/RLRaceBox.css'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { Link } from 'react-router-dom'

dayjs.extend(advancedFormat)

export default function RLTournamentBox (props) {
  const dayObject = dayjs(props.tournamentDate)
  const weekDay = dayObject.format('dddd')
  const dayString = dayObject.format('D')
  const ordinalDay = dayObject.format('Do').slice(-2)
  const dateString = dayObject.format('MMMM YYYY')
  return (
    <div className="tournament-box-container" >
      {/* <div className="tournament-image">
        <img className="tournament-image" src="/rl-hero.jpg" />
      </div> */}
      <div className="tournament-box-content">
      <div className="tournament-box-title">2022-2023 Open Challenge</div>
        <div className="tournament-box-title">{props.tournamentName} - Autumn</div>

        <br></br>
        <div className="tournament-box-date">{props.tournamentPrize}</div>
        <br></br>
        <div className="tournament-box-date">{weekDay}, {dayString}<sup>{ordinalDay}</sup> {dateString}<br></br>19:30 UK TIME</div>
        <Link to={props.detailsLink}><button className="tournament-box-button">Find out More</button></Link>
      </div>
    </div>
  )
}

RLTournamentBox.propTypes = {
  tournamentName: PropTypes.string.isRequired,
  tournamentPrize: PropTypes.string.isRequired,
  detailsLink: PropTypes.string.isRequired,
  tournamentDate: PropTypes.number.isRequired
}
