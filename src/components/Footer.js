import React from 'react'
import '../App.css'
import youtubeLogo from '../svg/youtube-logo.svg'
import twitchLogo from '../svg/twitch-logo.svg'
import discordLogo from '../svg/discord-logo.svg'
import instaLogo from '../svg/instagram-logo.svg'
import xLogo from '../svg/x-logo.svg'
import '../stylesheets/Footer.css'

export default function Footer () {
  return (
    <footer>
      <div className="social-icons-footer">
      <a href="https://discord.gg/10controls" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="footer-social" src={discordLogo} alt="Discord Logo" />
        </div>
        </a>
        <a href="https://www.twitch.tv/10controlstv" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="footer-social" src={twitchLogo} alt="Twitch Logo" />
        </div>
        </a>
        <a href="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="footer-social" src={youtubeLogo} alt="YouTube Logo" />
        </div>
        </a>
        <a href="https://www.instagram.com/10controls/" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="footer-social" src={instaLogo} alt="Instagram Logo" />
        </div>
        </a>
        <a href="https://x.com/10Controls" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="footer-social" src={xLogo} alt="X Logo" />
        </div>
        </a>
        </div>
        <div className="copyright-notice">
          <h6>10 Controls 2023, All rights reserved.</h6>
          <h4 id='credits'>Credits</h4>
        </div>
    </footer>
  )
}
