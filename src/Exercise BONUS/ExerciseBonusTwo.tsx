import { useState } from "react"

import GameShowInfo from './q&a.json';

import NumberOne from './numbers/number-1.png'
import NumberTwo from './numbers/number-2.png'
import NumberThree from './numbers/number-3.png'
import NumberFour from './numbers/number-4.png';

interface Answer {
    text: string,
    correct: boolean
}

interface Group {
    id: number,
    question: string,
    answers: Answer[]
}

function ExerciseBonusTwo() {

    const [isCorrect, setIsCorrect] = useState(false);
    const [questions, setQuestions] = useState<Group[]>(GameShowInfo);

    const handleCorrectQuestion = (id: number, answer: number) => {
        
    }

    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">BONUS EXERCISE #2</h1>
            <p className="text-white text-[14px]">Create a dynamic quiz app with multiple choice questions loaded from JSON.</p>
            {questions.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-5 mb-3"
                >
                    <div className="flex gap-2">
                        <h2 className="font-bold text-white">{item.id}.</h2>
                        <h2 className="text-white font-thin">{item.question}</h2>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                            <img src={NumberOne} alt="" className="w-6 h-6" />
                            <button
                                onClick={() => handleCorrectQuestion(item.id, 0)}
                                className={`w-full pt-1 pb-1 pl-4 pr-2 rounded-[20px] cursor-pointer text-left ${isCorrect ? 'bg-green-400' : 'bg-white'}`}
                            >
                                {item.answers[0].text}
                            </button>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={NumberTwo} alt="" className="w-6 h-6" />
                            <button
                                onClick={() => handleCorrectQuestion(item.id, 1)}
                                className={`w-full pt-1 pb-1 pl-4 pr-2 rounded-[20px] cursor-pointer text-left ${isCorrect ? 'bg-green-400' : 'bg-white'}`}
                            >
                                {item.answers[1].text}
                            </button>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={NumberThree} alt="" className="w-6 h-6" />
                            <button
                                onClick={() => handleCorrectQuestion(item.id, 2)}
                                className={`w-full pt-1 pb-1 pl-4 pr-2 rounded-[20px] cursor-pointer text-left ${isCorrect ? 'bg-green-400' : 'bg-white'}`}
                            >
                                {item.answers[2].text}
                            </button>                     
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={NumberFour} alt="" className="w-6 h-6" />
                            <button
                                onClick={() => handleCorrectQuestion(item.id, 3)}
                                className={`w-full pt-1 pb-1 pl-4 pr-2 rounded-[20px] cursor-pointer text-left ${isCorrect ? 'bg-green-400' : 'bg-white'}`}
                            >
                                {item.answers[3].text}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ExerciseBonusTwo