import { useState } from 'react'
import TrekThumb from './SpeedConceptSLR7eTap-24-41499-E-Portrait.png';

function ExerciseNine() {

    const [showGallery, setShowGallery] = useState<boolean>(false);

    const changeDisplay = () => {
        setShowGallery(prevState => !prevState);

    }


    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 9</h1>
            <p className="text-white text-[14px]">Click an image thumbnail to open a larger version in a modal popup with a close button.</p>
            <button
                onClick={changeDisplay}
                className='w-[150px] h-[100px] self-center cursor-pointer border-white border-[1px] rounded-[6px]'
            >
                <img
                    src={TrekThumb}
                    alt="a trek speed concept time-trial bike"
                    className='w-[150px] h-[98px] rounded-[6px]'
                />
            </button>
            <div className={showGallery ? 'flex justify-center items-center w-full h-full' : 'hidden'}>
                <div className='bg-black fixed top-0 left-0 opacity-80 w-full h-full'></div>
                <div className='bg-white min-w p-4 fixed top-[10%] left-[30%]'>
                    <div className='flex justify-end pr-4'>
                        <button
                            className='self-end cursor-pointer bg-red-400 rounded-full w-6 h-6 text-white'
                            onClick={changeDisplay}>
                            x
                        </button>
                    </div>

                    <div className={'grid grid-cols-3 grid-rows-3 gap-1 w-[50vw] min-h p-4 rounded-[6px]'}>
                        <img src={TrekThumb} alt="" className='' />
                        <img src={TrekThumb} alt="" />
                        <img src={TrekThumb} alt="" />
                        <img src={TrekThumb} alt="" />
                        <img src={TrekThumb} alt="" />
                        <img src={TrekThumb} alt="" />
                        <img src={TrekThumb} alt="" />
                        <img src={TrekThumb} alt="" />
                        <img src={TrekThumb} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExerciseNine