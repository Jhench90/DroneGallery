import React from 'react';
// import DJI_0110 from './DronePhoto/DJI_0110.jpg';
// import DJI_0120 from './DronePhoto/DJI_0120.jpg';
// import DJI_0223 from './DronePhoto/DJI_0223.jpg';
// import DJI_0273 from './DronePhoto/DJI_0273.jpg';
// import DJI_0357 from './DronePhoto/DJI_0357.jpg';
// import DJI_0378 from './DronePhoto/DJI_0378.jpg';
// import DJI_0420 from './DronePhoto/DJI_0420.jpg';
// import DJI_0438 from './DronePhoto/DJI_0438.jpg';
// import DJI_0444 from './DronePhoto/DJI_0444.jpg';
// import Herowebsitev2 from './DronePhoto/Herowebsitev2.mp4';
// import Herowebsitev3 from './DronePhoto/Herowebsitev3.mp4';

//axios.get('/cat.jpeg')

class Drone extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'frontpage',
      images: {
        frontpage: [],
        Yosemite: [{file: '/DronePhoto/DJI_0110.JPG', descr: "Yosemite, April 2021"},
        {file: '/DronePhoto/DJI_0120.JPG', descr: "Tenaya Lodge, April 2021"},],
        Maui: [{file: '/DronePhoto/DJI_0223.JPG', descr: "ʻĪao Valley State Monument, Maui, October 2021"},
        {file: '/DronePhoto/DJI_0273.JPG', descr: "Hakena Beach, Maui, October 2021"},
        {file: '/DronePhoto/DJI_0357.JPG', descr: "Pīpīwai Trail, Maui, October 2021"},
        {file: '/DronePhoto/DJI_0378.JPG', descr: "Wailua, Kauai, October 2021"},],
        SanFrancisco: [{file: '/DronePhoto/DJI_0420.JPG', descr: "Embarcadero, SF, December 2021"},
        {file: '/DronePhoto/DJI_0438.JPG', descr: "SalesForce Park, SF, December 2021"},
        {file: '/DronePhoto/DJI_0444.JPG', descr: "Skyline, SF, December 2021"}]
      }
    }
  };
  setDisplay=(destination)=>{
    this.setState({display: `${destination}`})
  }
  render () {
    var key = 0
    var count = 0
    var myVideoStyle = {
      margin: 'auto',
      right: '0',
      bottom: '0',
      minWidth: '80%',
      // minHeight: '100%',
    }
    return (
      <div style={{margin: 'auto', width: '90%'}}>
        <div id="triplinks" style={{float:'left', width: '12%'}}>
          <h4 className="triplinks" style={{textDecoration: 'underline'}} onClick={(e)=>{this.setDisplay('frontpage')}}>Destinations</h4>
          <h4 className="triplinks" onClick={(e)=>{this.setDisplay('Yosemite')}}>Yosemite</h4>
          <h4 className="triplinks" onClick={(e)=>{this.setDisplay('Maui')}}>Maui</h4>
          <h4 className="triplinks" onClick={(e)=>{this.setDisplay('SanFrancisco')}}>San Francisco</h4>
          <h4 className="triplinks" onClick={(e)=>{this.setDisplay('Pinnacles')}}>Pinnacles</h4>
          <h4 className="triplinks" onClick={(e)=>{this.setDisplay('Boston')}}>Boston</h4>
          <h4 className="triplinks" onClick={(e)=>{this.setDisplay('Tahoe')}}>Tahoe</h4>
          <h4 className="triplinks" onClick={(e)=>{this.setDisplay('Joshua Tree')}}>Joshua Tree</h4>
        </div>
        <div id="contentarea" style={{float:'left', width: '80%'}}>
        {this.state.display == 'frontpage' ?
        <>
        <video autoPlay muted loop id="myVideo" style={myVideoStyle}>
          <source src='/DronePhoto/Herov4.mp4' type="video/mp4"/>
        </video>
        <h5>This website powered by Decaf coffee.</h5>
        <video autoPlay muted loop id="myVideo" className="clickable" onClick={()=>{this.setDisplay('Yosemite')}}style={myVideoStyle}>
          <source src='/DronePhoto/Yosemite.mp4' type="video/mp4"/>
        </video>
        <video autoPlay muted loop id="myVideo" className="clickable" onClick={()=>{this.setDisplay('Maui')}} style={myVideoStyle}>
          <source src='/DronePhoto/Maui.mp4' type="video/mp4"/>
        </video>
        <video autoPlay muted loop id="myVideo" className="clickable" onClick={()=>{this.setDisplay('SanFrancisco')}} style={myVideoStyle}>
          <source src='/DronePhoto/SanFrancisco.mp4' type="video/mp4"/>
        </video>
        </>
        :
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            {this.state.images[this.state.display].map((img)=>{
              if (count===0) {
                count++
                return (
                  <div class="carousel-item active">
                    <img class="d-block w-100" src={img.file} alt="First slide"/>
                  </div>
                )
              }
              return (
                <div class="carousel-item" key={key++}>
                  <img class="d-block w-100" src={img.file} alt="Fourth slide"/>
                </div>
              )}
            )}
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        }


        </div>
        </div>
    )
  }
}

export default Drone;