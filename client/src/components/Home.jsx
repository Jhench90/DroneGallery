import React, { useState, useEffect } from 'react';

function Home({setPage}) {

    return (
        <div className="homeContainer" style={{ height: window.innerHeight }}>
            <img src="DronePhoto/DJI_0224.jpg" className="homePageBanner" />
            <div className="logo">
                <div className="title">Jay and the Sky</div>
                <div className="homeButton" onClick={(e)=>{

                }}>Software Engineering</div>
                <br></br>
                <div className="homeButton" onClick={(e)=>{

                }}>Social Media</div>
                <br></br>
                <div className="homeButton" onClick={(e)=>{
                    setPage('aboutme')
                }}>About Me</div>
            </div>
        </div>
    )
}

export default Home;