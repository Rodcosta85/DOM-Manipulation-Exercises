import { useState } from 'react'
import Eye from './eye.png';
import EyeClosed from './hidden.png';

function ExerciseFive() {

    const [inputType, setInputType] = useState<string>('password');
    const [inputVal, setInputVal] = useState('');
    const [eye, setEye] = useState<string>(EyeClosed);

    const handleEye = () => {
        if (inputType === 'password') {
            setInputType('text');
            setEye(Eye);
        } else {
            setInputType('password');
            setEye(EyeClosed);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    }




    return (
        <div className='flex flex-col justify-between gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 5</h1>
            <p className="text-white text-[14px]">Input type password + checkbox that toggles between showing or hiding the password.</p>
            <p className="text-white text-[14px]">You can hide the password by clicking on the eye button.</p>
            <div className='flex flex-row justify-between items-center gap-[8px] bg-white rounded-[6px] p-2'>
                <input
                    type={inputType}
                    className="w-[100%] h-5 p-2 bg-white rounded-[6px] focus:outline-none"
                    value={inputVal}
                    onChange={handleInputChange}
                    placeholder='Password'
                />
                <button
                    onClick={handleEye}
                    className='min-w text-[12px] cursor-pointer pr-2 pl-2 rounded-[6px]'>
                        <img 
                        src={eye} 
                        alt='the image of an eye closed or open'
                        className='w-7 h-5'
                        />
                </button>
            </div>
        </div>
    )
}

export default ExerciseFive