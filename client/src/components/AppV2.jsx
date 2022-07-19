import React, { useState, useEffect } from 'react';

import AboutMe from './AboutMe.jsx';
import Blogs from './Blogs.jsx';
import Drone from './Drone.jsx';
import Home from './Home.jsx';

function AppV2() {
  const [page, setPage] = useState('home')
  const [hamburger, setHamburger] = useState(false)
  return (
    <div className="appContainer">
      {/* <div className="navbar">
        <button onClick={(e) => { setPage('blogs') }}>Blogs</button>
        <button onClick={(e) => { setPage('drone') }}>Drone</button>
        <button onClick={(e) => { setPage('aboutme') }}>About Me</button>
      </div> */}
      <div className="content">
        <div>{'home' == page ? <Home setPage={setPage} /> : null}</div>
        <div>{'drone' == page ? <Drone setPage={setPage} /> : null}</div>
        <div>{'aboutme' == page ? <AboutMe setPage={setPage} /> : null}</div>
        <div>{'blogs' == page ? <Blogs setPage={setPage} /> : null}</div>
      </div>
      <br></br>
      <div className="copyrightApp" style={{ margin: 'auto' }}>© 2022 Jay.andthesky. Made possible with React.js, Bootstrap, ArangoDB, and DJI.</div>
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
          }}>Home</div>
          <div className="hamburgerMenuButton" onClick={(e) => {
            
          }}>Software Engineering</div>
          <div className="hamburgerMenuButton" onClick={(e) => {
setPage()
          }}>Drone</div>
          <div className="hamburgerMenuButton" onClick={(e) => {
setPage()
          }}>Social Media</div>
          <div className="hamburgerMenuButton" onClick={(e) => {
            setPage('aboutme')
          }}>About Me</div>
        </div>
        : null}
    </div>
  )
}

export default AppV2;