import { useState } from 'react'
import { HexColorPicker, HexColorInput } from "react-colorful";
import './stylesEleven.css';

function ExerciseEleven() {
    const [color, setColor] = useState<string>('#aabbcc');



    return (
        <div
            className={`flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4 transition-colors duration-300`}
            style={{ backgroundColor: color }}
        >
            <h1 className="font-semibold text-white">Exercise 11</h1>
            <p className="text-white text-[14px]">Create RGB sliders to control the background color of a div. Update the color live as sliders
                move.</p>
            <HexColorPicker
                color={color}
                onChange={setColor}
                className='custom-color-picker'
            />
            <HexColorInput
                color={color}
                onChange={setColor}
                className='input-color-picker'
            />
        </div>
    )
}

export default ExerciseEleven