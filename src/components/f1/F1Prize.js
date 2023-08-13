import React from 'react'
import '../../App.css'
import '../../stylesheets/F1Prize.css'
import { Link } from 'react-router-dom'

function F1Prize () {
  return (
    <>
      <section className="next-race-container">
        <h2 className="next-race-heading">Prize Pool</h2>
        <hr className="header-row"></hr>
        <div className="view-all-container">
        </div>
        <div className="next-race-box">
        <p style={{ textAlign: 'left' }}>At the end of every season, THE TOP 3 DRIVERS OF TIER A WILL EARN A SHARE OF THE PRIZE POOL. The top contructor will also win some prize money. The prize pool distribution runs as follows:</p>
          <div className="next-race-tier-container">
            <div className="f1-prize-container">
            <h2>Tier A Drivers</h2>
            <table className="prize-table">
    <tr>
      <th className="prize-header">Place</th>
      <th className="prize-header">$ USD</th>
    </tr>
    <tr className="prize-winner">
      <td className="prize-data">P1</td>
      <td className="prize-data">$100</td>
    </tr>
    <tr className="prize-runner-up">
      <td className="prize-data">P2</td>
      <td className="prize-data">$50</td>
    </tr>
    <tr className="prize-third">
      <td className="prize-data">P3</td>
      <td className="prize-data">$20</td>
    </tr>
  </table>
            </div>
            <div className="f1-prize-container">
            <h2>Tier B Drivers</h2>
            <table className="prize-table">
    <tr>
      <th className="prize-header">Place</th>
      <th className="prize-header">$ USD</th>
    </tr>
    <tr className="prize-winner">
      <td className="prize-data">P1</td>
      <td className="prize-data">$30</td>
    </tr>
    <tr className="prize-runner-up">
      <td className="prize-data">P2</td>
      <td className="prize-data">$20</td>
    </tr>
    <tr className="prize-third">
      <td className="prize-data">P3</td>
      <td className="prize-data">$10</td>
    </tr>
  </table>
            </div>
            <div className="f1-prize-container">
            <h2>Constructors</h2>
            <table className="prize-table">
    <tr>
    <th className="prize-header">Place</th>
      <th className="prize-header">Tier</th>
      <th className="prize-header">$ USD</th>
    </tr>
    <tr className="prize-winner">
    <td className="prize-data">P1</td>
      <td className="prize-data">Tier A</td>
      <td className="prize-data">$20 ($10 each)</td>
    </tr>
    {/* <tr className="prize-winner">
    <td className="prize-data">P1</td>
      <td className="prize-data">Tier B</td>
      <td className="prize-data">$10 ($5 each)</td>
    </tr> */}
  </table>
            </div>
          </div>
          <div>
          <Link to='/f1/register'><button className="tier-button">Register Now</button></Link>
          </div>
        </div>
</section>
</>
  )
}

export default F1Prize
