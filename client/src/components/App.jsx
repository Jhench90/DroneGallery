import React from 'react';
// import Drone from './Drone.jsx';
// import FirstWebsite from './FirstWebsite.jsx';
// import Leagues from './Leagues.jsx';
// import NatureBreak from './NatureBreak.jsx';
import Productivity from './productivity/Productivity.jsx';
// import Ukulele from './Ukulele.jsx';
// import AboutMe from './AboutMe.jsx';
// import Blogs from './Blogs.jsx';
// import MusicDigs from './MusicDigs.jsx';
// import Experimental from './Experimental.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      landingpage: "blogs"
    }
  };
  ups = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render () {
    var btnStyle = {
      border: 'none',
      color: 'white',
      padding: '16px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      transitionDuration: '0.4s',
      cursor: 'pointer',
      backgroundColor: 'white',
      color: 'black',
      border: '2px solid #555555'
    }
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
          {/* <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'firstwebsite')}}>First Website</button>
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'leagues')}}>Leagues</button> */}
          {/* <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'productivity')}}>Productivity</button> */}
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'blogs')}}>Blogs</button>
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'drone')}}>Drone</button>
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'musicdigs')}}>Music Digs</button>
          {/* <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'naturebreak')}}>Nature Break</button>
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'ukulele')}}>Ukulele</button> */}
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'experimental')}}>Experimental</button>
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'aboutme')}}>About Me</button>
        </div>
        <div className="content">


          <div>{'firstwebsite' == this.state.landingpage ? <FirstWebsite /> : null}</div>
          <div>{'leagues' == this.state.landingpage ? <Leagues /> : null}</div>
          <div>{'drone' == this.state.landingpage ? <Drone /> : null}</div>
          <div>{'ukulele' == this.state.landingpage ? <Ukulele /> : null}</div>
          <div>{'productivity' == this.state.landingpage ? <Productivity /> : null}</div>
          <div>{'naturebreak' == this.state.landingpage ? <NatureBreak /> : null}</div>
          <div>{'aboutme' == this.state.landingpage ? <AboutMe /> : null}</div>
          <div>{'blogs' == this.state.landingpage ? <Blogs style={{backgroundColor: 'white'}}/> : null}</div>
          <div>{'experimental' == this.state.landingpage ? <Experimental /> : null}</div>
          <MusicDigs />
        </div>
        <br></br>
        {'musicdigs' === this.state.landingpage ? null :
        <div style={{width: '400px',
        margin: 'auto',
         textAlign: 'center', backgroundColor: 'white', paddingBottom: '100px'}}>© 2022 Jay.andthesky. Made possible with React.js, Bootstrap, ArangoDB, and DJI.</div>
        }


      </div>
    );
  };
};

export default App;