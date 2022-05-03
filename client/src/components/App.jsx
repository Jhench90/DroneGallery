import React from 'react';
import Drone from './Drone.jsx';
import FirstWebsite from './FirstWebsite.jsx';
import Leagues from './Leagues.jsx';
import NatureBreak from './NatureBreak.jsx';
import Productivity from './Productivity.jsx';
import Ukulele from './Ukulele.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      landingpage: "leagues"
    }
  };
  ups = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  render () {
    return (
      <div className="appcontainer">
        <div className="navbar">
          <button onClick={(e)=>{this.ups('landingpage', 'firstwebsite')}}>First Website</button>
          <button onClick={(e)=>{this.ups('landingpage', 'leagues')}}>Leagues</button>
          <button onClick={(e)=>{this.ups('landingpage', 'productivity')}}>Productivity</button>
          <button onClick={(e)=>{this.ups('landingpage', 'drone')}}>Drone</button>
          <button onClick={(e)=>{this.ups('landingpage', 'ukulele')}}>Ukulele</button>
          <button onClick={(e)=>{this.ups('landingpage', 'naturebreak')}}>Nature Break</button>
        </div>
          <div>{'firstwebsite' == this.state.landingpage ? <FirstWebsite /> : null}</div>
          <div>{'leagues' == this.state.landingpage ? <Leagues /> : null}</div>
          <div>{'drone' == this.state.landingpage ? <Drone /> : null}</div>
          <div>{'ukulele' == this.state.landingpage ? <Ukulele /> : null}</div>
          <div>{'productivity' == this.state.landingpage ? <Productivity /> : null}</div>
          <div>{'naturebreak' == this.state.landingpage ? <NatureBreak /> : null}</div>
      </div>
    );
  };
};

export default App;