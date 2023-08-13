import React from 'react'
import '../App.css'
import '../stylesheets/LatestVideos.css'

function LatestVideos () {
  return (
    <>
      <section className="video-container">
       <h3>Recent Highlights</h3>
       <br></br>
       <hr></hr>
       <br></br>
       <div className="selected-video-container">
       <iframe className="video-frame"
 src="https://www.youtube.com/embed/l0Hxsk80_qk" >
</iframe>
       <iframe className="video-frame"
 src="https://www.youtube.com/embed/-ZBAOW17QgU">

</iframe>
       <iframe className="video-frame"
 src="https://www.youtube.com/embed/h1uevUf0g80">
</iframe>
       </div>
</section>
</>
  )
}

export default LatestVideos
