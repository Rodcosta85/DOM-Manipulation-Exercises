import React from 'react'

function ExerciseFifteen() {
    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 15</h1>
            <p className="text-white text-[14px]">Input a number and a currency dropdown; on change, convert the value to another currency
                using static rates.</p>
            <div className='flex flex-col gap-2'>
                <input type="text" placeholder='insert your value here'/>
                <ul className='flex flex-col gap-2 bg-red-300'>
                    <li className='text-white text-[12px] cursor-pointer'>Reais</li>
                    <li className='text-white text-[12px] cursor-pointer'>US Dollars</li>
                    <li className='text-white text-[12px] cursor-pointer'>Pounds</li>
                    <li className='text-white text-[12px] cursor-pointer'>Euros</li>
                    <li className='text-white text-[12px] cursor-pointer'>Yen</li>
                    <li className='text-white text-[12px] cursor-pointer'>Renminbi</li>
                </ul>
            </div>
        </div>
    )
}

export default ExerciseFifteen