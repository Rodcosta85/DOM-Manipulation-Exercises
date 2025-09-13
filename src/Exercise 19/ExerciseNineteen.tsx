import { useState } from 'react'

function ExerciseNineteen() {

    const [textArea, setTextArea] = useState('');
    const handleTextAreaContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextArea(e.target.value);
        console.log(textArea)
    }

    let textConvert = textArea.replace('#', '');
    let textResult = "<h1>" + textConvert + "</h1>"

    return (
        <div className='col-span-2 row-span-2 flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4 min-h'>
            <h1 className="font-semibold text-white">Exercise 19</h1>
            <p className="text-white text-[14px]">
                Textarea input where you write markdown syntax and below it, show live rendered HTML
                preview.
            </p>
            <div className='flex gap-4'>
                <input
                    className='w-full h-20 border-white border-[1px] text-white'
                    type="text" 
                    value={textArea}
                    onChange={handleTextAreaContent}
                    />
                <div className='w-full h-20 border-white border-[1px] text-white'>
                    {textArea.startsWith('#') ? textResult : textArea}
                </div>
            </div>

        </div>
    )
}

export default ExerciseNineteen