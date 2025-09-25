import { useState, useRef } from 'react'

function ExerciseNineteen() {

    const [textArea, setTextArea] = useState<string>('');
    const handleTextAreaContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextArea(e.target.value);
        console.log(textArea)
    }

    // aplica um comando de formato para o texto selecionado
    const applyFormat = (command: string) => {
        document.execCommand(command, false);
    }

    // let textConvert = textArea.replace('#', '');
    // let textResult = "<h1>" + textConvert + "</h1>"

    return (
        <div className='flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4 min-h'>
            <h1 className="font-semibold text-white">Exercise 19</h1>
            <p className="text-white text-[14px]">
                Textarea input where you write markdown syntax and below it, show live rendered HTML
                preview.
            </p>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-col gap-0'>
                    <div className="bg-white p-1 border-b-white border-b-[1px] flex gap-1 justify-center items-center">
                        <button
                            onClick={() => applyFormat('bold')}
                            className='cursor-pointer border-black border-[1px] p-1'
                        >
                            <b>B</b>
                        </button>
                        <button
                            onClick={() => applyFormat('italic')}
                            className='cursor-pointer border-black border-[1px] p-1'
                        >
                            <i>I</i>
                        </button>
                        <button
                            onClick={() => applyFormat('underline')}
                            className='cursor-pointer border-black border-[1px] p-1'
                        >
                            <u>U</u></button>
                        <button
                            onClick={() => applyFormat('insertUnorderedList')}
                            className='cursor-pointer border-black border-[1px] p-1'
                        >
                            &bull;
                        </button>
                    </div>
                    <input
                        className='w-full h-20 border-white border-[1px] text-white focus:outline-none'
                        type="text"
                        value={textArea}
                        onChange={handleTextAreaContent}
                    />

                </div>
                <div
                    className='w-full border-white border-[1px] text-white'
                    dangerouslySetInnerHTML={{ __html: textArea }}
                >
                </div>
            </div>

        </div>
    )
}

export default ExerciseNineteen