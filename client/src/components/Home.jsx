import React, { useState, useEffect } from 'react';

function Home({setPage}) {

    return (
        <div className="homeContainer" style={{ height: window.innerHeight }}>
            <img src="DronePhoto/DJI_0224.jpg" className="homePageBanner" />
            <div className="logo">
                <div className="title">Jay and the Sky</div>
                <div className="homeButton" onClick={(e)=>{
                    setPage('softwareEngineering')
                }}>Software Engineering</div>
                <br></br>
                <div className="homeButton" onClick={(e)=>{
                    setPage('socialMedia')
                }}>Social Media</div>
                <br></br>
                <div className="homeButton" onClick={(e)=>{
                    window.open('DronePhoto/CV_2022_06_01_Joel_Hench.pdf');
                }}>Resume</div>
            </div>
        </div>
    )
}

export default Home;