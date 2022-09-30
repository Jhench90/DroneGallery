import React, { useState, useEFfect, startTransition } from 'react';

function Timer() {
    const [time, setTime] = useState({ minutes: 1, seconds: 0 })
    const [batch, setBatch] = useState(0)

    function changeColor(color) {
        let background = document.getElementById('pomodoroTimerContainer')
        if (color === 'green') {
            background.style.backgroundColor = '#66cc80'
        } else if (color === 'red') {
            background.style.backgroundColor = 'rgb(255, 95, 95)'
        } else {
            background.style.backgroundColor = '#ffc04c'
        }
    }
    function start() {
        let counter = 0
        let seconds = 60
        let minutes = time.minutes
        let max = time.minutes * 60
        function incrementCounter() {
            counter += 1
            seconds -= 1
            if (seconds === -1) {
                minutes -= 1
                seconds = 59
            }
            if (counter === 1) {
                minutes -= 1
            }
            setTime({ minutes: minutes, seconds: seconds })
            let newBatch = batch + 1
            setBatch(newBatch)
            if (counter === max) {
                document.getElementById('alarm').play()
                clearInterval(interval)
            }
        }
        const interval = setInterval(incrementCounter, 1000)
    }

    return (
        <div className="pomodoroTimerContainer" id="pomodoroTimerContainer">
            <audio src="alarm.mp3" type='audio/mp3' id="alarm"/>
            <div className="flexContainer">
                <div className="pomodoroTitle">Pomodoro Timer</div>
            </div>

            <div className="pomodoroTimer">
                <div className="flexContainer">
                    <div className="pomodoroDisplay">{`${time.minutes}:${time.seconds < 10 ? `0` : ``}${time.seconds}
                    minutes`}</div>
                </div>
                <div className="flexContainer">
                    <span className="pomodoroButtons" onClick={(e) => {
                        setTime({ minutes: 25, seconds: 0 })
                        changeColor('red')
                    }}>25 Minutes</span>
                    <span className="pomodoroButtons" onClick={(e) => {
                        setTime({ minutes: 3, seconds: 0 })
                        changeColor('green')
                    }}>Short Break</span>
                    <span className="pomodoroButtons" onClick={(e) => {
                        setTime({ minutes: 10, seconds: 0 })
                        changeColor('blue')
                    }}>Long Break</span>
                </div>
                <div className="flexContainer">
                    <span className="pomodoroButtons" onClick={(e) => {
                        start()
                    }}>Start</span>
                </div>
            </div>

        </div>
    )
}

export default Timer;