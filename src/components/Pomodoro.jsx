import '../styles/main.css';
import React, { useState, useEffect } from "react";


const Pomodoro = () => {
    const [time, setTime] = useState(0);
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    useEffect(() => {

        const timer = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        if (time === 0) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    });
    return (
        <>
            <h1 className="font-bold text-9xl text-white">
                {minutes == 0 && seconds == 0 ?
                    <span>
                        25:00
                    </span>

                    :
                    <span>{minutes}:{seconds == 0 ? `00` : seconds.length < 2 ? <span>0{seconds}</span> : seconds}</span>}
            </h1>

            <button
                className="p-4 bg-violet-900 text-white font-bold rounded-md shadow-md text-4xl hover:bg-violet-700"
                onClick={() => setTime(1500)}>
                Começar
            </button>
        </>
    )

}


export default Pomodoro;