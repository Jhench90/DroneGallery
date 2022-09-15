import React, { useState, useEFfect } from 'react';
import Timer from './Timer.jsx';
import Flashcard from './Flashcard.jsx';

function Productivity() {
    return (
        <>
            <div style={{alignItems: 'center', margin: 'auto'}}>
                <Timer />
                <Flashcard />
            </div>
        </>
    )
}

export default Productivity;