import { useState } from 'react'

function ExerciseFifteen() {

    // estado para controlar o valor das moedas
    const [currency, setCurrency] = useState('');

    // estado para o resultado
    const [resultado, setResultado] = useState(0);

    // estado para o input
    const [input, setInput] = useState('');

    // array que guarda as moedas
    const currencies = [
        {
            label: "USA($)",
            value: "usa"
        },
        {
            label: "Europe(€)",
            value: "euro"
        },
        {
            label: "Russia(₽)",
            value: "rus"
        },
        {
            label: "Japan(¥)",
            value: "jpn"
        },
        {
            label: "UK(£)",
            value: "uk"
        },
    ]

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleConvert = () => {
        const value = Number(input);
        if (currency === "usa") {
            // operação de acordo com o valor da moeda de acordo com o real brasileiro
            setResultado(value / 5);
        }
        if (currency === "euro") {
            setResultado(value / 6);
        }
        if (currency === "uk") {
            setResultado(value / 6);
        }
        if (currency === "rus") {
            setResultado(value * 14);
        }
        if (currency === "jpn") {
            setResultado(value * 27);
        }
    }


    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 15</h1>
            <p
                className="text-white text-[14px]">Input a number and a currency dropdown; on change, convert the value to another currency
                using static rates.</p>
            <div className='flex flex-col gap-4 w-full'>
                <input
                    value={input}
                    onChange={handleInput}
                    type="number"
                    placeholder='insert your value here'
                    className='focus:outline-none text-white border-b-white border-b-[1px]'
                />
                <select
                    className='focus:outline-none text-white'
                    onChange={e => setCurrency(e.target.value)}
                >
                    {currencies.map((item) => (
                        <option
                            key={item.value}
                            value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
                <button
                    className='cursor-pointer bg-green-400 text-white rounded-[6px]'
                    onClick={handleConvert}>Convert</button>
            </div>
            <p className='text-white'><b>RESULTADO: {resultado}</b></p>
        </div>
    )
}

export default ExerciseFifteen