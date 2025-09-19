import { useState } from 'react'
import ChevronPrev from './chevron-prev.svg';
import ChevronNext from './chevron-next.svg';

interface SlideProps {
    title: string;
    subtitle: string;
}

function ExerciseSlider() {


    // estado que controla o array de slides e suas informações, como definido na interface
    const [slideArr] = useState<SlideProps[]>([
        {
            title: 'slide 1',
            subtitle: 'this is the subtitle for the FIRST slide'
        },
        {
            title: 'slide 2',
            subtitle: 'this is the subtitle for the SECOND slide'
        },
        {
            title: 'slide 3',
            subtitle: 'this is the subtitle for the THIRD slide'
        }
    ])

    // estado que controla o index do slide atual
    const [currentSlide, setCurrentSlide] = useState<number>(0);


    // função para voltar para o slide ANTERIOR
    const prevSlide = () => {
        setCurrentSlide((prevState) => prevState === 0 ? slideArr.length - 1 : prevState - 1)
    }

    // função para ir para o PRÓXIMO slide
    const nextSlide = () => {
        setCurrentSlide((prevState) => prevState === slideArr.length - 1 ? 0 : prevState + 1)
    }




    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white bg-red-500 pl-2 pr-2 pt-1 pb-1 w-fit rounded-[3px]">Exercise 'Slider'</h1>
            <p className="text-white text-[14px]">Create a slider component that uses 'prev' and 'next' buttons to toggle between the different slides.</p>

                {/* Container for buttons and slides */}
                <div className='flex flex-col gap-4 p-4 bg-slate-400 rounded-2xl'>

                    {/* This div will hold all the slides in a row and its overflow will be hidden */}
                    <div className='overflow-hidden rounded-md w-[20rem]'>

                        {/* This is the container that will actually slide */}
                        <div
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            className='flex flex-row gap-3 transition-transform duration-700 ease-in-out'
                        >
                            {slideArr.map((item, index) => (
                                <div
                                    className='flex-none w-[20rem] flex flex-col gap-3 bg-white rounded-md p-4'
                                    key={index}
                                >
                                    <h1 className="text-xl font-bold">{item.title}</h1>
                                    <p>{item.subtitle}</p>
                                </div>
                            ))}
                        </div>
                        {/* This is the container that will actually slide */}

                    </div>
                    {/* This div will hold all the slides in a row and its overflow will be hidden */}

                    <div className='flex flex-col gap-4'>
                        {/* pagination bar */}
                        <div className='w-[100%] h-[0.3125rem] bg-white flex flex-row'>
                            {slideArr.map((item, index) => (
                                <button
                                    key={index}
                                    className={`w-[100%] h-[0.3125rem] cursor-pointer ${currentSlide === index ? 'bg-black' : 'bg-transparent'}`}
                                    onClick={() => setCurrentSlide(index)}
                                >
                                </button>
                            ))}
                        </div>
                        {/* pagination bar */}

                        {/* Navigation Buttons */}
                        <div className='flex justify-between w-full items-center px-2'>
                            <button
                                onClick={prevSlide}
                                type="button"
                                className='bg-indigo-600 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-indigo-700'
                            >
                                <img src={ChevronPrev} alt="" />
                            </button>
                            <p className="text-white font-medium">Slide {currentSlide + 1} of {slideArr.length}</p>
                            <button
                                onClick={nextSlide}
                                type="button"
                                className='bg-indigo-600 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-indigo-700'
                            >
                                <img src={ChevronNext} alt="" />
                            </button>
                        </div>
                        {/* Navigation Buttons */}

                    </div>
                </div>
        </div>
    )
}

export default ExerciseSlider