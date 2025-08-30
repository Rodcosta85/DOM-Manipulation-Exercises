import { useState } from 'react'

function ExerciseSeven() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  }

  const subtract = () => {
    setCount(count - 1);
  }


  return (
    <div className='flex flex-col justify-between gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 7</h1>
            <p className="text-white text-[14px]">A list of items on the page and an input field. Filter the visible items in real-time based on the text
                entered.</p>
            <div className='flex flex-row justify-center gap-4'>
                <button 
                onClick={subtract}
                className='text-white bg-fuchsia-400 rounded-full w-6 cursor-pointer'>-</button>
                <p className='text-white font-semibold'>{count}</p>
                <button 
                onClick={add}
                className='text-white bg-fuchsia-400 rounded-full w-6 cursor-pointer'>+</button>
            </div>
        </div>
  )
}

export default ExerciseSeven