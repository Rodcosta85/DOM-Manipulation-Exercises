import { useState } from 'react'

function ExerciseSeventeen() {

    const [input, setInput] = useState('');
    const [countryArr] = useState<string[]>([
        'Brasil',
        'Argentina',
        'United States',
        'England',
        'France',
        'Italy',
        'Egypt',
        'Japan',
        'South Africa',
        'New Zealand',
        'Thailand',
        'Panama',
        'Germany',
        'Morocco',
        'Ireland',
        'Mexico',
        'Uruguay',
        'India',
        'China',
        'Russia'
    ])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const filteredCountries =
        input === ""
            ? [] // nothing by default
            : countryArr.filter((country) =>
                country.toLowerCase().startsWith(input.toLowerCase())
            );


    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 17</h1>
            <p className="text-white text-[14px]">Create a dropdown select with hundreds of options and a search input to filter options
                dynamically.</p>
            <div className='flex flex-col items-start rounded-xl'>
                <input
                    className="w-[100%] h-10 p-6 bg-white focus:outline-none rounded-t-xl"
                    value={input}
                    onChange={handleInput}
                    placeholder='Which country are you from?'
                />
                <select className="w-full bg-gray-400 p-6 cursor-pointer rounded-b-[6px]">
                    {input === '' ?
                        // se o input estiver vazio, ele mapeia o array de países, mostrando todos disponíveis na lista de opções do select
                        countryArr.map((country) => (
                            <option key={country}>{country}</option>
                        ))
                        :
                        // caso não esteja, e digitemos algo no input, ele faz a filtragem pela primeira letra correspondente do que foi digitado
                        filteredCountries.map((country) => (
                            <option key={country}>{country}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default ExerciseSeventeen