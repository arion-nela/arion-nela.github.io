import React, { useState, useEffect } from 'react'
import logo from '../svg/logo.svg'
import youtubeLogo from '../svg/youtube-logo.svg'
import twitchLogo from '../svg/twitch-logo.svg'
import discordLogo from '../svg/discord-logo.svg'
import instaLogo from '../svg/instagram-logo.svg'
import xLogo from '../svg/x-logo.svg'
// import Menu from './Menu'
import '../stylesheets/Menu.css'
import '../stylesheets/Navigation.css'
import Hamburger from 'hamburger-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation () {
  const [isOpen, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    console.log('Location changed')
    setOpen(false)
  }, [location])

  return (
    <>
      <nav className="main-site-nav">
        <div className="border-box border-box-left">
          <Link to="/">
          <img className="navigation-logo" src={logo} alt="10 Controls Logo" />
          </Link>
        </div>
        <div className="main-navigation-content">
          <Link to='f1'>
          <div className="main-navigation-link">F1 23</div>
          </Link>
          <Link to='https://10circuit.com/'>
          <div className="main-navigation-link">Assetto Corsa</div>
          </Link>
        </div>
        <div
          className="border-box border-box-right"

        >
          <Hamburger
            className="hamburger-icon"
            toggled={isOpen}
            toggle={setOpen}
            color="#ffffff"
          />
          { isOpen &&
            <div className="menu-container">
            <div className="menu-outer-container">
              <div className="menu-inner-container">
                  <nav className="category-content ">
                  <div className="category-heading"><Link to="/f1" className="category-item">f1 23</Link></div>
                      <hr className="menu-hr"></hr>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="/f1/races" className="category-item">Races</Link></div>
                      {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      </div>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="/f1/standings" className="category-item">Standings</Link></div>
                      {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      </div>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="/f1/drivers" className="category-item">Drivers</Link></div>
                      </div>
                      <div className="category-list">
                      {/* <div className="category-link"><a className="category-item">Tier A</a></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      <div className="category-subheading"><Link to="/f1/register" className="category-item">Register</Link></div>
                      </div>
                  </nav>
                  <nav className="category-content ">
                  <div className="category-heading"><Link to="https://10circuit.com/" className="category-item">assetto corsa</Link></div>
                      <hr className="menu-hr"></hr>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="https://10circuit.com/schedule" className="category-item">Races</Link></div>
                      {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      </div>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="https://10circuit.com/results" className="category-item">Results</Link></div>
                      {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      </div>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="https://10circuit.com/standings" className="category-item">Standings</Link></div>
                      </div>
                      <div className="category-list">
                      {/* <div className="category-link"><a className="category-item">Tier A</a></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      <div className="category-subheading"><Link to="https://10circuit.com/servers" className="category-item">Servers</Link></div>
                      </div>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="https://10circuit.com/register" className="category-item">Register</Link></div>
                      {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      </div>
                  </nav>
              </div>
              </div>
          </div>
          }
          <div>

          </div>

        </div>
      </nav>
      <nav className="side-nav side-nav-left">
      {/* <a href="https://discord.gg/jKeXr7mcv5" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-left">
          <img className="discord-logo" src={discordLogo} alt="Discord Logo" />
        </div>
        </a> */}
      </nav>
      <nav className="side-nav side-nav-right">
        <div className="social-icons-container">
      <a href="https://discord.gg/10controls" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="discord-logo" src={discordLogo} alt="Discord Logo" />
        </div>
        </a>
        <a href="https://www.twitch.tv/10controlstv" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="discord-logo" src={twitchLogo} alt="Twitch Logo" />
        </div>
        </a>
        <a href="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="discord-logo" src={youtubeLogo} alt="YouTube Logo" />
        </div>
        </a>
        <a href="https://www.instagram.com/10controls/" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="discord-logo" src={instaLogo} alt="Instagram Logo" />
        </div>
        </a>
        <a href="https://x.com/10Controls" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="discord-logo" src={xLogo} alt="X Logo" />
        </div>
        </a>
        </div>
      </nav>
    </>
  )
}
