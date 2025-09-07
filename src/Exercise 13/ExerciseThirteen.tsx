import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ExerciseThirteen() {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 13</h1>
            <p className="text-white text-[14px]">Create tabs that switch content panels when clicked.</p>



            {/* "TABS" é o wrapper de todo o conteúdo de dentro das tabs em si*/}
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >

                {/* TABLIST são as tabs; aceita tailwind! */}
                <TabList className='flex flex-row gap-2'>
                    <Tab className='border-b-none cursor-pointer p-1 duration-300 ease-in-out focus:outline-none'>First tab</Tab>
                    <Tab className='border-b-none cursor-pointer p-1 duration-300 ease-in-out focus:outline-none'>Second tab</Tab>
                </TabList>



                {/* conteúdo correspondente a PRIMEIRA tab */}
                <TabPanel className='bg-white p-2 pt-4 rounded-bl-[6px] rounded-r-[6px]'>
                    <h2>This is content for the <b>FIRST</b> tab</h2>
                    <p className='mt-4'>This is some random text talking about whatever. It doesn't make any difference, I'm just using this to use the space inside the tab.</p>
                </TabPanel>
                {/* conteúdo correspondente a PRIMEIRA tab */}



                {/* conteúdo correspondente a SEGUNDA tab */}
                <TabPanel className='bg-white p-2 mt-[-18px] rounded-lt-[6px]'>
                    <h2>This is content for the <b>SECOND</b> tab</h2>
                    <p className='mt-4'>This is some random text talking about whatever. It doesn't make any difference, I'm just using this to use the space inside the tab.</p>
                </TabPanel>
                {/* conteúdo correspondente a SEGUNDA tab */}


            </Tabs>
        </div>
    )
}

export default ExerciseThirteen