import { useState } from 'react'
import Countdown from 'react-countdown';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'

function ExerciseTwelve() {

    const [input, setInput] = useState<string>('');
    const [time, setTime] = useState<number | null>(null);
    const { width, height } = useWindowSize();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        console.log(input);
    }

    // start countdown
    // mas como fazer para receber segundos também?
    const handleStart = () => {
        const minutes = parseInt(input, 10);
        if (!isNaN(minutes) && minutes > 0) {
            setTime(Date.now() + minutes * 60 * 1000); // convert to ms
        }
    };

    // const handlePause = () => {

    // }

    const renderer = ({ minutes, seconds, completed }: any) => {
        if (completed) {
            return <Confetti width={width} height={height} numberOfPieces={500}/>
        }
        return (
            <span className="text-3xl font-mono text-yellow-300">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
        );
    };


    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 12</h1>
            <p className="text-white text-[14px]">Input a number (seconds), and display a countdown. When it reaches zero, show an alert or
                change the page.</p>
            <input
                type="text"
                min="1"
                value={input}
                onChange={handleInputChange}
                placeholder='insert your countdown'
                className='border-b-white border-b-[1px] text-white focus:outline-none pb-1'
            />
            <button
                onClick={handleStart}
                className='bg-red-400 text-white pt-1 pb-1 pl-2 pr-2'

            >
                Start
            </button>
            {time && (
                <div className="mt-4">
                    <Countdown date={time} renderer={renderer} />
                </div>
            )}
        </div>
    )
}

export default ExerciseTwelve