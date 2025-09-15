import { useState } from 'react'

interface tabsProps {
    id: number,
    title: string,
    text: string
}

function ExerciseThirteenB() {

    const [tabsInfo] = useState<tabsProps[]>([
        {
            id: 1,
            title: 'tab 1',
            text: 'this is some random text just fill this space out'
        },
        {
            id: 2,
            title: 'tab 2',
            text: 'this is some random text just fill this space out'
        },
        {
            id: 3,
            title: 'tab 3',
            text: 'this is some random text just fill this space out'
        }
    ])

    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 13.b</h1>
            <h2 className='text-white text-[11px] font-light bg-red-400'><b>OBS: </b>This one - in opposition to the original 13 - was done <i>without</i> the use of the library "react-tabs".</h2>
            <p className="text-white text-[14px]">Create tabs that switch content panels when clicked.</p>
            <div>
                <div className='flex flex-row gap-1'>
                    {tabsInfo.map((item, index) => (
                        <div key={index}>
                            <h2
                                className={`transition-all duration-300 ease-in-out cursor-pointer rounded-tr-[6px] rounded-tl-[6px] w-fit pl-2 pr-2 ${activeTab === index ? 'bg-white font-semibold text-black' : 'text-gray-400'}`}
                                onClick={() => setActiveTab(index)}>{item.title}
                            </h2>
                        </div>
                    ))}
                </div>
                <div className='bg-white rounded-b-[6px] p-2'>
                    <p>id: {tabsInfo[activeTab].id}</p>
                    <p>{tabsInfo[activeTab].text}</p>
                </div>
            </div>

        </div>
    )
}

export default ExerciseThirteenB