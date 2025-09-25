import { useState } from 'react'


function ExerciseSix() {
    // estado que controla o input
    const [input, setInput] = useState<string>('')

    // array que possui todos os tipos de bike
    const [bikeArr] = useState<string[]>([
        'trek',
        'cannondale',
        'pinarello',
        'scott',
        'specialized',
        's-works',
        'canyon',
        'bianchi',
        'swift',
        'sense',
        'argon',
        'cervelo',
        'giant',
        'cube',
        'time',
        'boardman',
        'cinelli',
        'de rosa',
        'oggi',
        'triban',
        'van rysel',
        'thrust',
        'willier',
        'audax',
        'mosso'
    ])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    // filtro
    const filteredBikes =
        input === ""
            ? [] // nothing by default
            // o método filtro leva um parametro (pode ser qualquer palavra, usei "brand" como exemplo)
            : bikeArr.filter((brand) =>
                // jogamos brand para minúsculo e checamos se começa com o valor do input no minúsculo também
                brand.toLowerCase().startsWith(input.toLowerCase())
            );


    return (
        <div className='flex flex-col justify-between gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 6</h1>
            <p className="text-white text-[14px]">A list of items on the page and an input field. Filter the visible items in real-time based on the text
                entered.</p>
            <div className='flex flex-col items-start rounded-xl'>
                <input
                    className="w-[100%] h-10 p-6 bg-white focus:outline-none rounded-t-xl"
                    value={input}
                    onChange={handleInput}
                    placeholder='Search for your bike'
                />
                <ul className="w-full">
                    {/* mapeamos o nosso array de bicicletas, mostrando as que estão de acordo com a regra criada dentro do filteredBikes */}
                    {filteredBikes.map((bike) => (
                        <li
                            key={bike}
                            className="bg-gray-400 p-6 last-of-type:rounded-b-xl cursor-pointer">
                            {bike}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ExerciseSix