import React from 'react';

class Drone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'frontpage',
      frontpage: ['Yosemite', 'Maui', 'SanFrancisco'],
      triplinks: ['Yosemite', 'Maui', 'SanFrancisco'
        // 'Kauai', 'Big Island', 'SanFrancisco', 'Lands End', 'Crissy Field', 'Golden Gate Park', 'Marin', 'Monterey', 'Mavericks', 'Berkeley', 'Pinnacles', 'Boston', 'Tahoe', 'Joshua Tree', 'San Clemente', 'Los Angeles', 'Orange County'
      ],
      images: {
        Yosemite: [{ file: '/DronePhoto/DJI_0110.JPG', descr: "Yosemite, April 2021" },
        { file: '/DronePhoto/DJI_0120.JPG', descr: "Tenaya Lodge, April 2021" },],
        Maui: [{ file: '/DronePhoto/DJI_0223.JPG', descr: "ʻĪao Valley State Monument, Maui, October 2021" },
        { file: '/DronePhoto/DJI_0273.JPG', descr: "Hakena Beach, Maui, October 2021" },
        { file: '/DronePhoto/DJI_0357.JPG', descr: "Pīpīwai Trail, Maui, October 2021" },
        { file: '/DronePhoto/DJI_0378.JPG', descr: "Wailua, Kauai, October 2021" },],
        'SanFrancisco': [{ file: '/DronePhoto/DJI_0420.JPG', descr: "Embarcadero, SF, December 2021" },
        { file: '/DronePhoto/DJI_0438.JPG', descr: "SalesForce Park, SF, December 2021" },
        { file: '/DronePhoto/DJI_0444.JPG', descr: "Skyline, SF, December 2021" }]
      }
    }
  };
  setDisplay = (destination) => {
    this.setState({ display: `${destination}` })
  }
  render() {
    var key = 0
    var count = 0
    var myVideoStyle = {
      margin: 'auto',
      right: '0',
      bottom: '0',
      minWidth: '100%',
    }
    return (
      <div>
        {this.state.display == 'frontpage' ?
          <video autoPlay muted loop id="myVideo" style={myVideoStyle}>
            <source src='/DronePhoto/Hero6sec.mp4' type="video/mp4" />
          </video>
          : null}


        <div style={{ margin: 'auto', width: '90%' }}>
          <div id="triplinks" style={{ float: 'left', width: '12%' }}>
            <h4 className="triplinks" style={{ textDecoration: 'underline' }} onClick={(e) => { this.setDisplay('frontpage') }}>Destinations</h4>
            {this.state.triplinks.map((destination) => {
              return (
                <h4 className="triplinks" key={key++} onClick={(e) => { this.setDisplay(`${destination}`) }}>{destination}</h4>
              )
            })}
          </div>
          <div id="contentarea" style={{ float: 'left', width: '80%' }}>
            {this.state.display == 'frontpage' ?
              <>

                <h5 style={{ width: '1650px', textAlign: 'left' }}>This website is powered by Old Town instant coffee.</h5>
                {this.state.frontpage.map((url) => {
                  return (
                    <video autoPlay muted loop id="myVideo" key={key++} className="clickable" onClick={() => { this.setDisplay(`${url}`) }} style={myVideoStyle}>
                      <source src={`/DronePhoto/${url}.mp4`} type="video/mp4" />
                    </video>
                  )
                })}
              </>
              :
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  {this.state.images[this.state.display].map((img) => {
                    if (count === 0) {
                      count++
                      return (
                        <div className="carousel-item active" key={key++}>
                          <img className="d-block w-100" src={img.file} alt="First slide" />
                        </div>
                      )
                    }
                    return (
                      <div className="carousel-item" key={key++}>
                        <img className="d-block w-100" src={img.file} alt="Fourth slide" />
                      </div>
                    )
                  }
                  )}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Drone;