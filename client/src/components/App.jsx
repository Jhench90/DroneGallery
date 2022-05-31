import React from 'react';
import Drone from './Drone.jsx';
import FirstWebsite from './FirstWebsite.jsx';
import Leagues from './Leagues.jsx';
import NatureBreak from './NatureBreak.jsx';
import Productivity from './Productivity.jsx';
import Ukulele from './Ukulele.jsx';
import AboutMe from './AboutMe.jsx';
import Blogs from './Blogs.jsx';

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
      <div className="appcontainer">
        <div className="navbar">
          {/* <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'firstwebsite')}}>First Website</button>
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'leagues')}}>Leagues</button>
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'productivity')}}>Productivity</button> */}
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'blogs')}}>Blogs</button>
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'drone')}}>Drone</button>
          {/* <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'naturebreak')}}>Nature Break</button>
          <button style={btnStyle} onClick={(e)=>{this.ups('landingpage', 'ukulele')}}>Ukulele</button> */}
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
          <div>{'blogs' == this.state.landingpage ? <Blogs /> : null}</div>
        </div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/2Yr3sKPi8mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <br></br>
        <div style={{width: '100%', textAlign: 'center'}}>© 2022 Jay.andthesky. Made possible with React.js, Bootstrap, ArangoDB, and DJI.</div>


      </div>
    );
  };
};

export default App;