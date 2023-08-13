import React from 'react'
import '../stylesheets/Menu.css'
import { Link } from 'react-router-dom'

export default function Menu () {
  return (
    <div className="menu-container">
      <div className="menu-outer-container">
        <div className="menu-inner-container">
          {/* <nav className="category-content">
            <div className="category-heading">
              <Link to="/rl" className="category-item">
                Rocket League
              </Link>
            </div>
            <hr className="menu-hr"></hr>
            <div className="category-list">
              <div className="category-subheading">
                <Link to="/rl" className="category-item">
                  Tournaments
                </Link>
              </div>
            </div>
            <div className="category-list">
              <div className="category-subheading">
                <Link to="rl" className="category-item">
                  Register
                </Link>
              </div>
            </div>
            <div className="category-list">
              <div className="category-subheading">
                <a
                  href="https://rlcsle.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="category-item"
                >
                  Wordle For Rocket League
                </a>
              </div>
            </div>
          </nav> */}
          <nav className="category-content ">
            <div className="category-heading">
              <Link to="/f1" className="category-item">
                f1 22
              </Link>
            </div>
            <hr className="menu-hr"></hr>
            <div className="category-list">
              <div className="category-subheading">
                <Link to="/f1/races" className="category-item">
                  Races
                </Link>
              </div>
              {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                <div className="category-link"><a className="category-item">Tier B</a></div> */}
            </div>
            <div className="category-subheading">
              <Link to="/f1/races" className="category-item">
                Standings
              </Link>
            </div>
            {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                <div className="category-link"><a className="category-item">Tier B</a></div> */}
            {/* </div> */}
            <div className="category-list">
              <div className="category-subheading">
                <Link to="/f1/drivers" className="category-item">
                  Drivers
                </Link>
              </div>
            </div>
            <div className="category-list">
              {/* <div className="category-link"><a className="category-item">Tier A</a></div>
                <div className="category-link"><a className="category-item">Tier B</a></div> */}
              <div className="category-subheading">
                <Link to="/f1/register" className="category-item">
                  Register
                </Link>
              </div>
            </div>
          </nav>
          <nav className="category-content ">
            <div className="category-heading">
              <Link to="https://10circuit.com/" className="category-item">
                assetto corsa
              </Link>
            </div>
            <hr className="menu-hr"></hr>
            <div className="category-list">
              <div className="category-subheading">
                <Link to="https://10circuit.com/schedule" className="category-item">
                  Races
                </Link>
              </div>
              {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                <div className="category-link"><a className="category-item">Tier B</a></div> */}
            </div>
            <div className="category-subheading">
              <Link to="https://10circuit.com/results" className="category-item">
                Results
              </Link>
            </div>
            {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                <div className="category-link"><a className="category-item">Tier B</a></div> */}
            {/* </div> */}
            <div className="category-list">
              <div className="category-subheading">
                <Link to="https://10circuit.com/standings" className="category-item">
                  Standings
                </Link>
              </div>
            </div>
            <div className="category-list">
              <div className="category-subheading">
                <Link to="https://10circuit.com/servers" className="category-item">
                  Servers
                </Link>
              </div>
            </div>
            <div className="category-list">
              {/* <div className="category-link"><a className="category-item">Tier A</a></div>
                <div className="category-link"><a className="category-item">Tier B</a></div> */}
              <div className="category-subheading">
                <Link to="https://10circuit.com/register" className="category-item">
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
