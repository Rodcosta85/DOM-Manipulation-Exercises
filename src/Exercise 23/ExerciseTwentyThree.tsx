import { useState } from 'react'
// import type { ChangeEvent } from 'react';

// imagens para os cards e para o botão de embaralhar.
import Dog from './dog.png'
import Cat from './cat.png'
import Bird from './eagle.png'
import Turtle from './turtle.png'
import Rat from './rat.png'
import Fish from './fish.png'
import Question from './question.png';
import Shuffle from './shuffle.png';

// interface para o array de objetos/cards.
interface AnimalCards {
    id: number,
    questionMark: string,
    img: string,
    toggled: boolean,
    animal: string,
    posicao?: number,
}

function ExerciseTwentyThree() {

    // estado que segura os objetos/cards
    const [cardsArr, setCardsArr] = useState<AnimalCards[]>([
        { id: 9, questionMark: Question, img: Turtle, animal: "turtle", toggled: false },
        { id: 10, questionMark: Question, img: Turtle, animal: "turtle", toggled: false },
        { id: 1, questionMark: Question, img: Bird, animal: "bird", toggled: false },
        { id: 2, questionMark: Question, img: Bird, animal: "bird", toggled: false },
        { id: 11, questionMark: Question, img: Rat, animal: "rat", toggled: false },
        { id: 12, questionMark: Question, img: Rat, animal: "rat", toggled: false },
        { id: 5, questionMark: Question, img: Dog, animal: "dog", toggled: false },
        { id: 6, questionMark: Question, img: Dog, animal: "dog", toggled: false },
        { id: 4, questionMark: Question, img: Cat, animal: "cat", toggled: false },
        { id: 3, questionMark: Question, img: Cat, animal: "cat", toggled: false },
        { id: 8, questionMark: Question, img: Fish, animal: "fish", toggled: false },
        { id: 7, questionMark: Question, img: Fish, animal: "fish", toggled: false },
    ]);

    const [started, setStarted] = useState(false);


    // preciso entender melhor essa função.
    // Ela promove a virada dos cards para trás e para frente.
    const handleFlip = (id: number, animal: string) => {
        const cardsArrFlipped = cardsArr.map(item => {
            if (item.id === id) {
                return { ...item, toggled: true }
            }
            return item;
        });
        setCardsArr(cardsArrFlipped);
        setStarted(true);

        if (started) {
            // verificar se o par está virado também
            const pair = cardsArrFlipped.find(item => item.animal === animal && item.id !== id);
            const pairFlipped = pair?.toggled;

            // se o par estiver virado não faça nada
            // se o par não estiver virado, desvire a carta clicada depois de 2 segundos
            if (!pairFlipped) {
                setTimeout(() => {
                    const cardsArrUnflipped = cardsArr.map(item => {
                        if (item.id === id) {
                            return { ...item, toggled: false }
                        }
                        return item;
                    });
                    setCardsArr(cardsArrUnflipped);
                }, 2000);
                return;
            }

            setStarted(false);
        }
    };

    // função de embaralhar os cards. Está com problema ainda.
    // quando os cards são embaralhados, o primeiro clicado ainda fica na sua posição original.
    const shuffleArr = () => {
        const cardsWithNumbers = cardsArr.map(item => {
            return { ...item, posicao: Math.random() }
        });
        const sortedCards = cardsWithNumbers.sort((a, b) => a.posicao - b.posicao);
        setCardsArr(sortedCards);
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
                        <div className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${item.toggled ? 'rotate-y-180' : ''}`}>
                            <button
                                className='bg-orange-300 rounded-[6px] absolute inset-0 backface-hidden flex items-center justify-center'
                                onClick={() => handleFlip(item.id, item.animal)}
                            >
                                <img src={Question} alt="" className='w-[50px] h-[50px]' />
                            </button>
                            <button
                                className='bg-red-400 rounded-[6px] absolute inset-0 [transform:rotateY(180deg)] backface-hidden flex items-center justify-center'
                                onClick={() => handleFlip(item.id, item.animal)}
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
                    onClick={shuffleArr}
                >
                    <img src={Shuffle} alt="" className='w-[30px] h-[30px]' />
                </button>
            </div>
        </div>
    )
}

export default ExerciseTwentyThree