import { useRef, useState } from "react";

function ExerciseTwentyOne() {

  const [img, setImg] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  function getBase64(file: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  const onDrop = async (e: any) => {
    e.preventDefault();
    console.log(e.dataTransfer.files[0]);
    const base64 = await getBase64(e.dataTransfer.files[0]);
    console.log(base64);
    setImg(base64);
  }

  return (
    <div className='col-span-2 row-span-2 flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
      <h1 className="font-semibold text-white" draggable>Exercise 21</h1>
      <p className="text-white text-[14px]">Upload an image, select a rectangular crop area using mouse drag, and preview the cropped area.</p>

      <input
        type="file"
        className='hidden'
        onDrop={e => console.log(e)}
        ref={fileInputRef}
        // onChange={handleFile}
      />
      <button
        type="button"
        className='cursor-pointer text-white bg-amber-200 p-2'
        onDrop={onDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        Choose File
      </button>

      <img src={img} alt="" />
    </div>
  );
}

export default ExerciseTwentyOne;
