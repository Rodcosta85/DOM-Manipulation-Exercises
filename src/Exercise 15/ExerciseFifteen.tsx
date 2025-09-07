import { useState } from 'react'

function ExerciseFifteen() {

    // const [atual, setAtual] = useState('');
    const [nova, setNova] = useState('');
    const [resultado, setResultado] = useState(0);

    const [input, setInput] = useState('');

    const currencies = [
        // {
        //     label: "Brasil(R$)",
        //     value: "brl"
        // },
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
        if (nova === "usa") {
            setResultado(value / 5);
        }
        if (nova === "euro") {
            setResultado(value / 6);
        }
        if (nova === "uk") {
            setResultado(value / 6);
        }
        if (nova === "rus") {
            setResultado(value * 14);
        }
        if (nova === "jpn") {
            setResultado(value * 27);
        }
    }


    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
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

                {/* <select className='focus:outline-none' onChange={e => setAtual(e.target.value)}>
                    {currencies.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </select> */}

                <select className='focus:outline-none' onChange={e => setNova(e.target.value)}>
                    {currencies.map((item) => (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                </select>

                <button onClick={handleConvert}>Converter</button>
            </div>
            <p><b>RESULTADO: {resultado}</b></p>
        </div>
    )
}

export default ExerciseFifteen