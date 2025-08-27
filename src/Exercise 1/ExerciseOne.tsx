import { useState } from "react"

function ExerciseOne() {
    const [myInput, setMyInput] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        // variavel criada com value que pega o value do input, ou seja, 
        // o que o usuário está escrevendo. É o "valor do evento (input)"
        const value = e.target.value;


        // função do useState (nesse caso setMyInput) guarda o valor do input dentro dela
        setMyInput(value);

        // valor é logado no console para sabermos o que o usuário está digitando
        console.log(value);
    }

    return (
        <div className="flex flex-col justify-between gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4">
            <h1 className="font-semibold text-white">Exercise 1</h1>
            <p className="text-white text-[14px]">Create an input field. Whenever the user types, log the input's current value to the console in
                real-time.
            </p>
            <input
                type="text"

                //valor do input reflete as mudanças: o usuário digitando
                value={myInput}

                // função do estado atualiza a variável com o novo valor: o que foi digitado
                onChange={handleChange}
                className="w-[100%] h-10 p-6 bg-white focus:outline-none rounded-xl"
            />
            <p className="text-white text-[14px]">Result: {myInput}</p>
        </div>
    )
}

export default ExerciseOne