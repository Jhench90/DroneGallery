import React from 'react';

class AboutMe extends React.Component {
  constructor(props){
    super(props);
  };
  render () {
    return (
      <div id="aboutmecontainer" style={{textAlign: 'center'}}>
        <div style={{float:'left', width:'25%'}}>
          <img src='/DronePhoto/AboutMe.png' height='350x'/>
        </div>
        <div style={{width: '20%', float: 'left'}}>
          Hey! Im Joel! Its nice to meet you. Im a California native currently living near San Francisco. I built this website with React.js as a passion project to show some of the things I am interested in. As a web developer, I have experience building full stack applications and particularly enjoy working with database management systems (this website is powered by ArangoDB). I also own several drones and fly them anywhere and everywhere I can, resulting in some breathtaking photographs and videos which I am proud of. Anything else I should say? I'm a Tottenham Hotspurs fan, Go Coys! Id like to do something meaningful in this world, and thats something I still need to figure out. Drop me a message if you'd like to connect. I'd love to get coffee sometime.
        </div>
      </div>
    )
  }
}

export default AboutMe;