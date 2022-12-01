import '../styles/main.css';

import React, { useState, useEffect } from "react";

import { Helmet } from "react-helmet";


const Pomodoro = () => {

    const [time, setTime] = useState(1500);
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const [paused, setPaused] = useState(true)

    useEffect(() => {

        if (!paused) {
            const timer = setInterval(() => {
                setTime(time - 1);
            }, 1000);

            if (time === 0) {

                clearInterval(timer);

                var context = new AudioContext();
                var oscillator = context.createOscillator();
                oscillator.type = "sine";
                oscillator.frequency.value = 800;
                oscillator.connect(context.destination);
                oscillator.start();
                // Beep for 500 milliseconds
                setTimeout(function () {
                    oscillator.stop();
                }, 100);

                setPaused(true)
                setTime(1500)

            }

            return () => {
                clearInterval(timer);
            };
        }

    });

    function iniciaTimer() {

        if (!paused) {
            setPaused(true)
        }
        else {
            setPaused(false)
        }

    }

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat-one-color/128/dev-icon.png" />
                <title>{`${minutes == 0 ? `00` : minutes < 10 ? `0${minutes}` : minutes}:${seconds == 0 ? `00` : seconds < 10 ? `0${seconds}` : seconds} Hora de focar!`}</title>
            </Helmet>

            <h1 className="font-bold text-9xl text-white">
                <span>{minutes == 0 ? `00` : minutes < 10 ? `0${minutes}` : minutes}:{seconds == 0 ? `00` : seconds < 10 ? `0${seconds}` : seconds}</span>
            </h1>

            <button
                className="p-4 bg-violet-900 text-white font-bold rounded-md shadow-md text-4xl hover:bg-violet-700"
                onClick={() => iniciaTimer()}>
                {paused ? `Começar` : `Pausar`}
            </button>
        </>
    )

}

export default Pomodoro;
