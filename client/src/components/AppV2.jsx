import React, {useState, useEffect} from 'react';
import Drone from './Drone.jsx';
import AboutMe from './AboutMe.jsx';
import Blogs from './Blogs.jsx';

function AppV2 () {
  const [landingPage, setLandingPage] = useState('home')

  return (
    <div className="appcontainer"
      style={{backgroundColor: 'white', marginBottom: '50px'}}
      >

        <div style={{position: 'relative', textAlign: 'center', color: 'white'}}>
            <img
              src="DronePhoto/jayandtheskybanner.webp" style={{ width: '100%' }} />
            <h1 style={{
              position: 'absolute',
              top: '25%',
              left: '15%',
              size: '20p',
              transform: 'translate(-50%, -50%)',
              width: '40%',
              color: '#white', }}>Jay and the Sky</h1>
          </div>
        <div className="navbar">
          <button onClick={(e)=>{setLandingPage('blogs')}}>Blogs</button>
          <button onClick={(e)=>{setLandingPage('drone')}}>Drone</button>
          <button onClick={(e)=>{setLandingPage('musicdigs')}}>Music Digs</button>
          <button onClick={(e)=>{setLandingPage('experimental')}}>Experimental</button>
          <button onClick={(e)=>{setLandingPage('aboutme')}}>About Me</button>
        </div>
        <div className="content">
          <div>{'drone' == landingPage ? <Drone /> : null}</div>
          <div>{'productivity' == landingPage ? <Productivity /> : null}</div>
          <div>{'aboutme' == landingPage ? <AboutMe /> : null}</div>
          <div>{'blogs' == landingPage ? <Blogs style={{backgroundColor: 'white'}}/> : null}</div>
        </div>
        <br></br>
       </div>
  )
}

export default AppV2;