import React, { useState, useEffect } from 'react';

function Home({setPage}) {

    return (
        <div className="homeContainer" style={{ height: window.innerHeight }}>
            <img src="DronePhoto/DJI_0224.jpg" className="homePageBanner" />
            <div className="logo">
                <div className="title">Jay and the Sky</div>
                <div className="homeButton" onClick={(e)=>{
                    setPage('aboutMe')
                    // let elem = document.getElementById('appContainer')
                    // console.log('exec')
                    // elem.style.backgroundColor='rgb(157,152,255)';
                    // elem.style.linearGradient='(90deg, rgba(157,152,255,1) 0%, rgba(116,232,255,1) 88%)';
                }}>Software Engineering</div>
                <br></br>
                <div className="homeButton" onClick={(e)=>{
                    setPage('socialMedia')
                }}>Social Media</div>
                <br></br>
                <div className="homeButton" onClick={(e)=>{
                    window.open('CV_2022_06_01_Joel_Hench.pdf');
                }}>Resume</div>
            </div>
            
        </div>
    )
}

export default Home;