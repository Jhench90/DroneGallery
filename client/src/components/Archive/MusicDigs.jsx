import React from 'react';
import axios from 'axios';

class MusicDigs extends React.Component {
  constructor(props){
    super(props);
  };
  render () {
    return (
      <div style={{zIndex: '-1', position: 'absolute', left:'35%', width: '50%'}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2Yr3sKPi8mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/mmhoLkgGWhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SDNA934EEVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div style={{width: '400px', textAlign: 'center'}}>© 2022 Jay.andthesky. Made possible with React.js, Bootstrap, ArangoDB, and DJI.</div>
      </div>
    )
  }
}

export default MusicDigs;