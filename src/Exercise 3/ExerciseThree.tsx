import { useState } from 'react'

function ExerciseThree() {

    // estado que vai controlar o valor do input, ou seja, o que o usuário escolher dentre as opções
    const [selectedOption, setSelectedOption] = useState('blue');

    const handleOptionChosen = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    }

    const colorClasses: Record<string, string> = {
        blue: 'bg-blue-500',
        red: 'bg-red-500',
        yellow: 'bg-yellow-500',
        green: 'bg-green-500',
        purple: 'bg-purple-500'
    }

    return (
        <div className={`flex flex-col justify-between gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4 ${colorClasses[selectedOption]}`}>
            <h1 className="font-semibold text-white">Exercise 3</h1>
            <p className="text-white text-[14px]">Dropdown/select input to choose a color. Change the page background color accordingly.</p>
            <p className="text-white text-[14px]">The selected color is: <b>{selectedOption}</b></p>
            <select
                name=""
                id=""
                value={selectedOption}
                onChange={handleOptionChosen}
                className={`focus:outline-none p-3 border-2 border-white ${colorClasses[selectedOption]} appearance-none`}>
                <option value="blue" className='text-white'>Blue 500</option>
                <option value="red" className='text-white'>Red 500</option>
                <option value="yellow" className='text-white'>Yellow 500</option>
                <option value="green" className='text-white'>Green 500</option>
                <option value="purple" className='text-white'>Purple 500</option>
            </select>
        </div>
    )
}

export default ExerciseThree