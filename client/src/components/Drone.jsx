import React from 'react';
import DJI_0110 from './DronePhoto/DJI_0110.jpg';
import DJI_0120 from './DronePhoto/DJI_0120.jpg';
import DJI_0223 from './DronePhoto/DJI_0223.jpg';
import DJI_0273 from './DronePhoto/DJI_0273.jpg';
import DJI_0357 from './DronePhoto/DJI_0357.jpg';
import DJI_0378 from './DronePhoto/DJI_0378.jpg';
import DJI_0420 from './DronePhoto/DJI_0420.jpg';
import DJI_0438 from './DronePhoto/DJI_0438.jpg';
import DJI_0444 from './DronePhoto/DJI_0444.jpg';

class Drone extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: [{file: DJI_0110, descr: "Yosemite, April 2021"},
      {file: DJI_0120, descr: "Tenaya Lodge, April 2021"},
      {file: DJI_0110, descr: "Yosemite, April 2021"},
      {file: DJI_0120, descr: "Tenaya Lodge, April 2021"},
      {file: DJI_0223, descr: "ʻĪao Valley State Monument, Maui, October 2021"},
      {file: DJI_0273, descr: "Hakena Beach, Maui, October 2021"},
      {file: DJI_0357, descr: "Pīpīwai Trail, Maui, October 2021"},
      {file: DJI_0378, descr: "Wailua, Kauai, October 2021"},
      {file: DJI_0420, descr: "Embarcadero, SF, December 2021"},
      {file: DJI_0438, descr: "SalesForce Park, SF, December 2021"},
      {file: DJI_0444, descr: "Skyline, SF, December 2021"}]
    }
  };
  render () {
    var i = this.state.images
    return (
      <div>Gallery
        {this.state.images.map((img)=>{
          return (
          <div>
            <img src={img.file} height='700px'/>
            <div>{img.descr}</div>
          </div>
          )}
        )}
        </div>
    )
  }
}

export default Drone;