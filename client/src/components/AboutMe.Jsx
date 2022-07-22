import React from 'react';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="topMargin">
        <div className="flexContainer">
          <img src='/DronePhoto/AboutMe.webp' className="aboutMeProfilePic"></img>
          <div className="aboutMeContent">
            <h1>About Me</h1>
            <div>Im Jay. Im a California native currently living near San Francisco. I built this website with React.js as a passion project to show some of the things I am interested in. As a web developer, I have experience building full stack applications. I own several drones and fly them anywhere and everywhere I can. I'm a Tottenham Hotspurs fan, Go Coys! Drop me a message if you'd like to connect. Let's get some coffee.</div>
            
          </div>
        </div>
        <div className="flexContainer topMargin">
            <h1>Connect</h1>
          </div>
          <div className="flexContainer">
            <img onClick={(e)=>{
              window.open('https://www.linkedin.com/in/joel-hench/')
            }}className="connectIcon" src="https://lofrev.net/wp-content/photos/2017/04/linkedin_logo-1007x1007.jpg"/>
            <img onClick={(e)=>{
              window.open('https://github.com/jhench90')
            }}className="connectIcon" src="http://pngimg.com/uploads/github/github_PNG80.png"/>
            <img onClick={(e)=>{
              window.open('https://www.instagram.com/jay.andthesky/')
            }}className="connectIcon" src="https://tse4.mm.bing.net/th?id=OIP.JtmXSh_uyZBaTg1eXd-NtgHaHa&pid=Api&P=0"/>
          </div>
          <div className="flexContainer">
          <span className="softwareEngineering">
            <h1>Software Engineering</h1>
                <p>      Prior to becoming a software engineer, I had spent several years taking pre-requisite work for a
                    Clinical Laboratory Science program, and after a 14 month hospital internship and 1 year in the field, I
                    realized that I had chosen the wrong path. I was working in one of the best hospitals in the state and
                    despite making a good salary, I was not satisfied with my work. Like many people before me, I decided to
                    make a career change and pursue software engineering. It was hard to say goodbye to my old career since it had been my dream
                    , but I knew if I stayed there I wouldn't be happy. Software engineering gave me a chance to regularly be introduced
                    to new and challenging concepts, and more growth opportunities for personal development and advancement.
                </p>
                <p>
                    I spent 1 month self studying JavaScript while continuing to work full time, and after that month was over,
                    I quit my job and began self studying JavaScript full time. I interviewed for and was accepted into Hack Reactor Software Engineering
                    Immersive 12 week program on my first attempt, and 3 months later found myself on the job hunt.
                </p>
                <p>
                    On the front-end, I learned to write with JavaScript and make applications using React, HTML5, and CSS3. I also used libraries such 
                    as MaterialUI and Bootstrap to speed up development time. On the back-end, I used Node.js, Express.js, and several databases such as MySQL2.0, PostgreSQL, MongoDB, 
                    and ArangoDB. I also built one application using Socket.io. I have deployed both to cloud computing services
                    such as AWS as well as on private server computers using my home router. Other back end tools I have worked with include NGINX for load-
                    balancing, and k6 and Loader.io for stress testing.
                </p>
                <p>
                    While I feel I have come so far in my journey, I know that is has only just begun, and I have a long ways to go. I hope that I can make a strong addition to the company
                    I work at, and join a team of individuals who are passionate about their work and about developing applications that are resilient,
                    scalable, and provide a great user experience with every component.
                </p>
            </span>
          </div>

         
      </div>
      
    )
  }
}

export default AboutMe;