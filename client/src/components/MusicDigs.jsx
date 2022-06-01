import React from 'react';
import axios from 'axios';

class MusicDigs extends React.Component {
  constructor(props){
    super(props);
  };
  render () {
    return (
      <div>
        <div>Curtis Harding ft. Jazmine Sullivan - Our Love </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2Yr3sKPi8mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div>Nina Simone - Sinnerman (Sofi Tukker Remix)</div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MubdXpjydqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }
}

export default MusicDigs;