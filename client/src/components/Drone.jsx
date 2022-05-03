import React from 'react';

class Drone extends React.Component {
  constructor(props){
    super(props);
  };
  render () {
    return (
      <div>
        <div>Drone Work here</div>
        <img src="../../../dist/assets/cat.jpeg"/>
      </div>
    )
  }
}

export default Drone;