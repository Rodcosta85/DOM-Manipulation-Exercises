import { useState } from 'react'

interface ItemsObj {
    id: number,
    buttonText: string,
    text: string
}

function ExerciseFourteen() {

    const [dropdown] = useState<ItemsObj[]>([
        { id: 1, buttonText: 'FIRST', text: 'Some random content nobody gives a fuck about' },
        { id: 2, buttonText: 'SECOND', text: 'Some random content nobody gives a fuck about' },
        { id: 3, buttonText: 'THIRD', text: 'Some random content nobody gives a fuck about' }
    ]);

    const [openId, setOpenId] = useState<number | null>(null);

    const toggleDiv = (id: number) => {
        setOpenId(prev => (prev === id ? null : id));
    }

    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 14</h1>
            <p className="text-white text-[14px]">Build an accordion where clicking a header toggles the display of its content.</p>
            <div className='flex flex-col gap-4'>
                {dropdown.map((item) => (
                    <div
                        key={item.id}
                        className={`transition-all duration-300 ease-in-out ${openId === item.id ? 'h-[131px] flex flex-col' : 'h-[27px] overflow-hidden'}`}>
                        <button
                            onClick={() => toggleDiv(item.id)}
                            className='border-b-fuchsia-900 border-b-[3px] w-full text-left text-white'>
                            {item.buttonText}
                        </button>

                        {/* para que um só acordeão abra, a id dele precisa ser igual a do item no qual estamos clicando */}
                        <p
                            className={`text-white duration-300 ${openId === item.id ? "opacity-100 mt-2" : "opacity-0 mt-0"}`}
                        >
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExerciseFourteen