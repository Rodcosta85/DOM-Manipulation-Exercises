import { useState } from 'react'

function ExerciseFifteen() {

    const [input, setInput] = useState('');
    const [currencies] = useState<string[]>([
        'Brasil(R$)',
        'USA($)',
        'Europe(€)',
        'Russia(₽)',
        'Japan(¥)',
        'UK(£)'
    ]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }



    return (
        <div className='col-span-2 flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 15</h1>
            <p
                className="text-white text-[14px]">Input a number and a currency dropdown; on change, convert the value to another currency
                using static rates.</p>
            <div className='flex flex-row gap-10 w-full'>
                <input
                    value={input}
                    onChange={handleInput}
                    type="number"
                    placeholder='insert your value here' 
                    className='focus:outline-none text-white border-b-white border-b-[1px]'
                    />
                <select name="" id="" className='focus:outline-none'>
                    {currencies.map((currency) => (
                        <option key={currency} value="">{currency}</option>
                    ))}
                </select>
            </div>
            <p><b>RESULTADO:</b></p>
        </div>
    )
}

export default ExerciseFifteen