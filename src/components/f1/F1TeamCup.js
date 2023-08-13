import React from 'react'
import '../../stylesheets/F1TeamCup.css'
// import PropTypes from 'prop-types'

export default function F1TeamCup () {
  // ({ teamColor, teamBackground, teamImage, teamName, driver1Name, driver1Number, driver1Flag, driver2Name, driver2Number, driver2Flag, driver3Name, driver3Number, driver3Flag, driver4Name, driver4Number, driver4Flag, teamPrincipal }) {
  return (
    <div className="team-container">
      {/* <div style={{ background: teamBackground }} className="team-member-box">
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
        <div style={{ background: teamBackground }} className="team-member-box">
          <div className="team-details-outer">
          <div className="team-details-container">
          <div style={{ background: teamColor }} className="rectangle"></div>
            <img className="team-image" src={teamImage} />
            <h6 className="team-name">{teamName}</h6>
            </div>
            <h3 className="driver-name">{driver3Name}</h3>
            </div>
            <div className="flag-number-container">
          <h2>{driver3Number}</h2>
          <img className="driver-flag" src={driver3Flag} />
        </div>
        </div>
        <div style={{ background: teamBackground }} className="team-member-box">
          <div className="team-details-outer">
          <div className="team-details-container">
          <div style={{ background: teamColor }} className="rectangle"></div>
            <img className="team-image" src={teamImage} />
            <h6 className="team-name">{teamName}</h6>
            </div>
            <h3 className="driver-name">{driver4Name}</h3>
            </div>
            <div className="flag-number-container">
          <h2>{driver4Number}</h2>
          <img className="driver-flag" src={driver4Flag} />
        </div>
        </div>
        <div style={{ background: teamBackground }} className="team-member-box">
          <div className="team-details-outer">
          <div className="team-details-container">
          <div style={{ background: teamColor }} className="rectangle"></div>
            <img className="team-image" src={teamImage} />
            <h6 className="team-name">{teamName}</h6>
            </div>
            <h3 className="driver-name">{teamPrincipal}</h3>
            </div>
            <div className="flag-number-container">
          <h4>Team Principal</h4>
          <img className="driver-flag" src={teamPrincipal} />
        </div>
  </div> */}
      <section className="gridContainer">
        <div className="team1">
        <img className="team-image" src="/psr.png" />
          <h3 className="team-name">Premier Sim Racing</h3>
          <div className="driver1">Luca Stevens</div>
          <div className="driver2">Veixel</div>
          <div className="driver3">Maxfan</div>
          <div className="driver4">Ricfan</div>
        </div>
        <div className="team2">
        <img className="team-image" src="/fpr.png" />
          <h3 className="team-name">Formula Premiére Racing</h3>
          <div className="driver1">Luca Stevens</div>
          <div className="driver2">Veixel</div>
          <div className="driver3">Maxfan</div>
          <div className="driver4">Ricfan</div>
        </div>
        <div className="team3">
        <img className="team-image" src="/vrl.png" />
          <h3 className="team-name">Virtual Racing League</h3>
          <div className="driver1">Luca Stevens</div>
          <div className="driver2">Veixel</div>
          <div className="driver3">Maxfan</div>
          <div className="driver4">Ricfan</div>
        </div>
        <div className="team4">
        <img className="team-image" src="/amr.png" />
          <h3 className="team-name">Amethyst Racing</h3>
          <div className="driver1">Luca Stevens</div>
          <div className="driver2">Veixel</div>
          <div className="driver3">Maxfan</div>
          <div className="driver4">Ricfan</div>
        </div>
        <div className="team5">
        <img className="team-image" src="/sre.png" />
          <h3 className="team-name">Semi Racing eSports</h3>
          <div className="driver1">Luca Stevens</div>
          <div className="driver2">Veixel</div>
          <div className="driver3">Maxfan</div>
          <div className="driver4">Ricfan</div>
        </div>
        <div className="team6">
        <img className="team-image" src="/vf1.png" />
          <h3 className="team-name">VF1 Racing</h3>
          <div className="driver1">Luca Stevens</div>
          <div className="driver2">Veixel</div>
          <div className="driver3">Maxfan</div>
          <div className="driver4">Ricfan</div>
        </div>
      </section>
    </div>
  )
}
// eslint-disable-next-line no-lone-blocks
{
  /* F1TeamCup.propTypes = {
  teamColor: PropTypes.string.isRequired,
  teamBackground: PropTypes.string.isRequired,
  teamImage: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  driver1Name: PropTypes.string.isRequired,
  driver1Flag: PropTypes.string.isRequired,
  driver1Number: PropTypes.string.isRequired,
  driver2Name: PropTypes.string.isRequired,
  driver2Flag: PropTypes.string.isRequired,
  driver2Number: PropTypes.string.isRequired,
  driver3Name: PropTypes.string.isRequired,
  driver3Flag: PropTypes.string.isRequired,
  driver3Number: PropTypes.string.isRequired,
  driver4Name: PropTypes.string.isRequired,
  driver4Flag: PropTypes.string.isRequired,
  driver4Number: PropTypes.string.isRequired,
  teamPrincipal: PropTypes.string.isRequired
} */
}
