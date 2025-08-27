import { useState } from 'react'

function ExerciseTwo() {

    // estado que vai controlar o valor do input, ou seja, o que o usuário está digitando
    const [secondInput, setSecondInput] = useState('');

    // estado que vai controlar a quantidade de caracteres no que o usuário colocou no input
    const [charCount, setCharCount] = useState(0);

    const handleCharCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSecondInput(value);
        setCharCount(value.length);
    }



    return (
        <div className="flex flex-col justify-between gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4">
            <h1 className="font-semibold text-white">Exercise 2</h1>
            <p className="text-white text-[14px]">Input box with a character counter below it. It updates live as you type.</p>
            <input
                type="text"

                //valor do input reflete as mudanças: o usuário digitando
                value={secondInput}

                // função do estado atualiza a variável com o novo valor: o que foi digitado
                onChange={handleCharCount}
                className="w-[100%] h-10 p-6 bg-white focus:outline-none rounded-xl"
            />
            <p className="text-white text-[14px]">Character Count: {charCount}</p>
        </div>
    )
}

export default ExerciseTwo