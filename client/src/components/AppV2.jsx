import React, { useState, useEffect } from 'react';

import AboutMe from './AboutMe.jsx';
import Blogs from './Blogs.jsx';
import BlogsV2 from './BlogsV2.jsx';
import Drone from './Drone.jsx';
import Home from './Home.jsx';
import Productivity from './Productivity.jsx';
import SocialMedia from './SocialMedia.jsx';

function AppV2() {
  const [page, setPage] = useState('home')
  const [hamburger, setHamburger] = useState(false)
  return (
    <div className="appContainer" id="appContainer">
      <div className="content">
        <div>{'home' == page ? <Home setPage={setPage} /> : null}</div>
        <div>{'drone' == page ? <Drone setPage={setPage} /> : null}</div>
        <div>{'aboutMe' == page ? <AboutMe setPage={setPage} /> : null}</div>
        <div>{'blogs' == page ? <BlogsV2 setPage={setPage} /> : null}</div>
        <div>{'socialMedia' == page ? <SocialMedia setPage={setPage} /> : null}</div>
        <div>{'productivity' == page ? <Productivity setPage={setPage} /> : null}</div>
      </div>
      <br></br>
      {/* <div className="copyrightApp" style={{ margin: 'auto' }}>© 2022 Jay.andthesky. Made possible with React.js, ArangoDB, and DJI.</div> */}
      <img src="DronePhoto/Hamburger_icon.svg" className="hamburgerIcon" onClick={(e) => {
        if (hamburger) {
          setHamburger(false)
          return
        }
        setHamburger(true)
      }} />
      {hamburger ?
        <div className="hamburgerMenu">
          <div className="hamburgerMenuButton x" onClick={(e) => {
            setHamburger(false)
          }}>X</div>
          <div className="hamburgerMenuButton" onClick={(e) => {
            setPage('home')
            setHamburger(false)
          }}>Home</div>
          <div className="hamburgerMenuButton" onClick={(e) => {
            setPage('drone')
            setHamburger(false)
          }}>Aerial Drone</div>
          <div className="hamburgerMenuButton" onClick={(e) => {
            setPage('blogs')
            setHamburger(false)
          }}>Blog</div>
          <div className="hamburgerMenuButton" onClick={(e) => {
            setPage('productivity')
            setHamburger(false)
          }}>Productivity</div>
          
          <div className="hamburgerMenuButton" onClick={(e) => {
            setPage('socialMedia')
            setHamburger(false)
          }}>Social Media</div>
          <div className="hamburgerMenuButton" onClick={(e) => {
            setPage('aboutMe')
            setHamburger(false)
          }}>Software Engineering</div>
          {/* <div className="hamburgerMenuButton" onClick={(e) => {
            window.open('CV_2022_06_01_Joel_Hench.pdf');
          }}>Resume</div> */}
        </div>
        : null}
    </div>
  )
}

export default AppV2;