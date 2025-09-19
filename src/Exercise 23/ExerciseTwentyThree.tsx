import { useState } from 'react'
// import type { ChangeEvent } from 'react';

import Dog from './dog.png'
import Cat from './cat.png'
import Bird from './eagle.png'
import Turtle from './turtle.png'
import Rat from './rat.png'
import Fish from './fish.png'
import Question from './question.png';
import Shuffle from './shuffle.png';

interface AnimalCards {
    id: number,
    questionMark: string,
    img: string,
    toggled: boolean
}

function ExerciseTwentyThree() {

    const [cardToggle, setCardToggle] = useState<Record<number, boolean>>({});
    const [cardsArr, setCardsArr] = useState<AnimalCards[]>([
        { id: 9, questionMark: Question, img: Turtle, toggled: false },
        { id: 4, questionMark: Question, img: Cat, toggled: false },
        { id: 7, questionMark: Question, img: Fish, toggled: false },
        { id: 1, questionMark: Question, img: Bird, toggled: false },
        { id: 12, questionMark: Question, img: Rat, toggled: false },
        { id: 5, questionMark: Question, img: Dog, toggled: false },
        { id: 2, questionMark: Question, img: Bird, toggled: false },
        { id: 10, questionMark: Question, img: Turtle, toggled: false },
        { id: 6, questionMark: Question, img: Dog, toggled: false },
        { id: 3, questionMark: Question, img: Cat, toggled: false },
        { id: 11, questionMark: Question, img: Rat, toggled: false },
        { id: 8, questionMark: Question, img: Fish, toggled: false }
    ]);
    const [flippedCardIds, setFlippedCardIds] = useState([]);



    const handleFlip = (id: number) => {
        setCardToggle(prev => ({
            ...prev,
            [id]: !prev[id]
        }));



    };

    const shuffleArr = (cardsArr: any) => {
        // Start from the last element and go backwards
        for (let i = cardsArr.length - 1; i > 0; i--) {
            // Pick a random index from 0 to i (inclusive)
            const j = Math.floor(Math.random() * (i + 1));
            [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]];
        }
        console.log(cardsArr);
    }



    return (
        <div className='col-span-2 row-span-2 flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 23</h1>
            <p className="text-white text-[14px]">Create a grid of cards face-down. Clicking flips cards, trying to find pairs. If you want to, you can also shuffle the cards again by pressing the button.</p>
            <div className='grid grid-cols-3 grid-rows-4 gap-[10px]'>
                {cardsArr.map((item) => (
                    <div
                        key={item.id}
                        className='group w-full h-[8rem]'
                    >
                        <div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${cardToggle[item.id] ? 'rotate-y-180' : ''}`}>
                            <button
                                className='bg-orange-300 rounded-[6px] absolute inset-0 backface-hidden flex items-center justify-center'
                                onClick={() => handleFlip(item.id)}
                            >
                                <img src={Question} alt="" className='w-[50px] h-[50px]' />
                            </button>
                            <button
                                className='bg-red-400 rounded-[6px] absolute inset-0 [transform:rotateY(180deg)] backface-hidden flex items-center justify-center'
                                onClick={() => handleFlip(item.id)}
                            >
                                <img src={item.img} alt="animal" className='w-[50px] h-[50px]' />
                            </button>
                        </div>
                    </div>

                ))}
            </div>
            <div className='flex justify-center mt-2 mb-2'>
                <button
                    type='button'
                    className='bg-green-400 hover:transform hover:translate-y-[4px] text-white w-fit pl-3 pr-3 pt-1 pb-1 rounded-[6px] cursor-pointer'
                    onClick={() => shuffleArr(cardsArr)}
                >
                    <img src={Shuffle} alt="" className='w-[30px] h-[30px]' />
                </button>
            </div>

        </div>
    )
}

export default ExerciseTwentyThree