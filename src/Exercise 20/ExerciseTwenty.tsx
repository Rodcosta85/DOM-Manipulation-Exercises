import { useState, useRef } from 'react'

function ExerciseTwenty() {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<string>('');
    const [fileType, setFileType] = useState<string>('');
    const [imageURL, setImageURL] = useState<string>('');

    const handleButtonClick = () => {
        fileInputRef.current ? fileInputRef.current.click() : null;
    }

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0].name);
            setFileType(e.target.files[0].type);
            setImageURL(URL.createObjectURL(e.target.files[0]));
        }
    }
    
    return (
        <div className='col-span-2 row-span-2 flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 20</h1>
            <p className="text-white text-[14px]">Upload an image, select a rectangular crop area using mouse drag, and preview the cropped
                area.</p>
            <div className='flex flex-col gap-3'>
                <input
                    type="file"
                    className='hidden'
                    ref={fileInputRef}
                    onChange={handleFile}
                />
                <button type="button" className='cursor-pointer text-white bg-amber-200 p-2' onClick={handleButtonClick}>
                    Choose File
                </button>
                {selectedFile && (
                    <p className="text-white">Selected file:
                        <span className='ml-1'>{selectedFile}</span>
                    </p>
                )}
                {(fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/jpg') && (
                    <img
                        src={imageURL}
                        alt={selectedFile}
                        className="block"
                    />
                )}
            </div>
            <div className='flex justify-between'>
                <button className='cursor-pointer bg-white p-1'>square</button>
                <button className='cursor-pointer bg-white p-1'>circle</button>
                <button className='cursor-pointer bg-white p-1'>triangle</button>
            </div>
        </div>
    )
}

export default ExerciseTwenty