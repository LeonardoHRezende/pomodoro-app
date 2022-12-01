import '../styles/main.css';

import React, { useState } from "react";

import Pomodoro from '../components/Pomodoro';
import ShortBreak from '../components/ShortBreak';
import LongBreak from '../components/LongBreak';

import { BsCodeSlash } from "react-icons/bs";


const App = () => {

  const [type, setStype] = useState('pomodoro');


  return (
    <>
      <div className="max-w-[1344px] min-h-screen mx-auto items-center flex flex-col gap-5">

        <div className='mt-10 flex flex-row gap-3'>
          <BsCodeSlash className="font-semibold text-gray-200" size={30} />
          <h1 className='text-2xl font-semibold text-gray-200'>PomodoroApp</h1>
        </div>

        <div className="flex flex-col gap-20 items-center rounded-lg shadow-md bg-[#7a55ce] bg-opacity-60  w-[900px] h-[500px]">

          <div className="flex flex-row gap-6 justify-between items-stretch rounded-lg shadow-md bg-[#8a6dcc] w-3/4 py-3 px-2 my-5">

            <button className={type === 'pomodoro' ? 'text-2xl font-semibold text-gray-200 bg-[#8162c9] p-2 rounded-md hover:text-white'
              : 'text-2xl font-semibold text-gray-200 hover:text-white p-2 rounded-md'}
              onClick={() => setStype('pomodoro')}>
              Pomodoro
            </button>

            <button className={type === 'short-break' ? 'text-2xl font-semibold text-gray-200 bg-[#8162c9] p-2 rounded-md hover:text-white'
              : 'text-2xl font-semibold text-gray-200 hover:text-white p-2 rounded-md'}
              onClick={() => setStype('short-break')}>
              Short Break
            </button>

            <button className={type === 'long-break' ? 'text-2xl font-semibold text-gray-200 bg-[#8162c9] p-2 rounded-md hover:text-white'
              : 'text-2xl font-semibold text-gray-200 hover:text-white p-2 rounded-md'}
              onClick={() => setStype('long-break')}>
              Long Break
            </button>

          </div>
          {type === 'pomodoro' ? <Pomodoro /> : type === 'short-break' ? <ShortBreak /> : <LongBreak />}
        </div>

      </div>
    </>
  );
};

export default App