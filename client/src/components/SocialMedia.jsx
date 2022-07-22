import React, { useState } from 'react';

function SocialMedia({setPage}) {
    const [posts, setPosts] = useState([
        {
            photo: 'IGphoto/1.png',
            url: 'https://www.instagram.com/p/CaKsMdRJ-WO/'
        },
        {
            photo: 'IGphoto/2.png',
            url: 'https://www.instagram.com/p/CaKo6YGJYeS/'
        },
        {
            photo: 'IGphoto/3.png',
            url: 'https://www.instagram.com/p/CZ7fMPKDGqv/'
        },
        {
            photo: 'IGphoto/4.png',
            url: 'https://www.instagram.com/p/CWtIt0bjNAL/'
        },
        {
            photo: 'IGphoto/5.png',
            url: 'https://www.instagram.com/p/CWi1zejj4Bx/'
        },
        {
            photo: 'IGphoto/6.png',
            url: 'https://www.instagram.com/p/CWd0GNgvhoE/'
        },
        {
            photo: 'IGphoto/7.png',
            url: 'https://www.instagram.com/p/CWTXP4XjuWc/'
        },
        {
            photo: 'IGphoto/8.png',
            url: 'https://www.instagram.com/p/CWLoaJTJ0-Y/'
        },
        {
            photo: 'IGphoto/9.png',
            url: 'https://www.instagram.com/p/CWAkW9SlASU/'
        }])
    const [display, setDisplay] = useState(4)

    function incrementDisplay() {
        let count = display + 4
        setDisplay(count)
    }
    let i = 0

    return (
        <>
            <img src="DronePhoto/Jayandtheskybanner.webp" width='100%' />
            <div className="socialMediaTitle" onClick={()=>{
                setPage('home')
            }}>Jay and the Sky</div>
            <div className="socialMediaPostsContainer">
                <div className="postsContainer">
                    {posts.map((post) => {
                        if (i !== display) {
                            i += 1
                            return <img className="imgPost" src={`${post.photo}`} onClick={(e) => {
                                window.open(post.url)
                            }} />
                        }
                    })}
                </div>
                <div className="buttonsContainer">
                    <span className="socialMediaButton" onClick={(e) => {
                        incrementDisplay()
                    }}>Load More</span>
                    <span className="socialMediaButton" onClick={(e)=>{
                        window.open('https://www.instagram.com/jay.andthesky/')
                    }}>Instagram</span>
                </div>
            </div>
        </>
    )
}

export default SocialMedia