import { useRef, useState } from "react";

function ExerciseTwentyTwo() {

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
    const base64 = await getBase64(e.dataTransfer.files[0]);
    setImg(base64);
  }

  return (
    <div className='col-span-2 row-span-2 flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
      <h1 className="font-semibold text-white" draggable>Exercise 22</h1>
      <p className="text-white text-[14px]">Build a search input that fetches suggestions from a public API (like GitHub users or movies) and shows them in a dropdown.</p>

      <input
        type="file"
        className='hidden'
        ref={fileInputRef}
      />
      <button
        type="button"
        className='cursor-pointer bg-amber-200 p-2'
        onDrop={onDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        Choose File
      </button>

      <img src={img} alt="" />
    </div>
  );
}

export default ExerciseTwentyTwo;
