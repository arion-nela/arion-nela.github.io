import React from 'react'
import '../App.css'
import '../stylesheets/Home.css'
// import UpcomingEvents from './UpcomingEvents'
import LatestVideos from './LatestVideos'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import F1NextRace from './f1/F1NextRace'

export default function Home () {
  return (
    <div>
    <div className="page-content">
      <div className="home-page-content">
      <h6>This is</h6>
      <h1>10 Controls</h1>
      <h6>COMPETITIVE ONLINE RACING LEAGUES FOR F1 23 AND ASSETTO CORSA</h6>
      </div>
      <Link to="f1">
      <div className="home-page-hero-container">
<img className="home-page-hero" src="/bahrain-night.png"/>
<h2>10 CONTROLS RETURNS FOR SEASON 4 ON F1 23</h2>
<button className="home-page-hero-button">Register Now</button>
</div>
</Link>
<div className="featured-section-container">
<Link to="https://10circuit.com/" className="featured-content">
<img className="featured-image-box" src="/porsche-cup-news.png"/>
<h2>PORSCHE CUP LAUNCHES FIRST SEASON ON ASSETTO CORSA</h2>
{/* <a className="featured-link">Watch now</a> */}
</Link>

<Link to="https://10circuit.com/" className="featured-content">
<img className="featured-image-box" src="/ac-cadillac.png"/>
<h2>AC CHAMPIONSHIP CIRCUIT SECOND SEASON BOUND TO START IN SEPTEMBER</h2>
{/* <a className="featured-link">Watch now</a> */}
</Link>
</div>
</div>
{/* <div className="page-content-full">
<UpcomingEvents />
</div> */}
<div className="page-content">
  <F1NextRace />
  <LatestVideos />
<Footer />
</div>
</div>
  )
}
