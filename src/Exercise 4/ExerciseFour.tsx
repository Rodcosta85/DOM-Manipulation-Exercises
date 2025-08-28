import { useState } from 'react'

interface TodoItem {
    id: string;
    text: string;
}

function ExerciseFour() {

    const [input, setInput] = useState<string>('');

    // Use the TodoItem interface to type the state array
    const [listItem, setListItem] = useState<TodoItem[]>([])


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        console.log(input);
    }

    const addItemsToList = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault(); // Prevents page reload if inside a form

        if (input.trim() !== '') {
            const newTodo: TodoItem = {

                id: crypto.randomUUID(), // Recommended for a unique, stable key
                text: input,
            };

            // Use the spread syntax to create a new array with the new item
            setListItem([...listItem, newTodo]);
            
            setInput(''); // Clear the input field
        }
    }



    return (
        <div className='flex flex-col justify-between gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 3</h1>
            <p className="text-white text-[14px]">Input + button to add items to a list below. Items show up as list elements.</p>
            <div className='flex flex-col gap-[8px]'>
                <input
                    type="text"
                    className="w-[100%] h-10 p-6 bg-white focus:outline-none rounded-xl"
                    value={input}
                    onChange={handleInput}
                    placeholder='Add a new list item'
                />
                <button
                    onClick={addItemsToList}
                    className='w-[100%] text-[12px] text-slate-600 bg-emerald-300 cursor-pointer p-2 rounded-[6px]'>Add</button>
            </div>
            <ul className='ml-5'>
                {/* Map over the typed state array to render <li> elements */}
                {listItem.map((item) => (
                    <li key={item.id} className='text-[14px] text-white list-disc placeholder:text-gray-400'>{item.text}</li>
                ))}

            </ul>
        </div>
    )
}

export default ExerciseFour