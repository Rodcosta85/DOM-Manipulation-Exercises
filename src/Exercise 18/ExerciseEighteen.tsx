import { useState } from 'react';
import React from 'react';

// Define the interface for the form fields
interface FormFields {
  type: string;
  value: string;
}

function ExerciseEighteen() {
  // State for toggling the custom dropdown's visibility
  const [selectTrigger, setSelectTrigger] = useState<boolean>(false);

  // State for storing the dynamically added form fields
  const [fields, setFields] = useState<FormFields[]>([]);

  // Function to toggle the visibility of the dropdown
  const triggerSelect = () => {
    setSelectTrigger(prevState => !prevState);
  };

  // Function to add a new field to the form after a selection is made
  const handleSelection = (fieldType: string) => {
    setFields(prevFields => [...prevFields, { type: fieldType, value: '' }]);
    setSelectTrigger(false); // Hide the dropdown after a selection
  };

  // Function to handle changes in the input fields
  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  // Function to remove a field from the form
  const handleRemove = (index: number) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  return (
    <div className='row-span-2 flex flex-col gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4 min-h'>
      <h1 className="font-semibold text-white">Exercise 18</h1>
      <p className="text-white text-[14px]">
        Allow users to add/remove fields dynamically on a form, then serialize the data into JSON on submit.
      </p>
      <form className='flex flex-col gap-2'>
        <div
          className={`flex flex-col gap-3 transition-all duration-300 ease-in-out ${selectTrigger ? 'h-[286px]' : 'h-[48px] overflow-hidden'}`}
        >
          {/* Button to trigger the custom dropdown */}
          <button
            type="button"
            onClick={triggerSelect}
            className='cursor-pointer border-[1px] border-gray-400 p-2 w-full'
          >
            Click here to{' '}
            <b className={selectTrigger ? 'text-red-400' : 'text-green-400'}>
              {selectTrigger ? 'close' : 'open'}
            </b>
          </button>

          {/* Custom dropdown list, only visible when selectTrigger is true */}
          {selectTrigger && (
            <ul className='flex flex-col gap-2 rounded-[6px] bg-slate-500'>
              <li
                className='cursor-pointer text-white text-center pt-1 pb-1 rounded-t-[6px] hover:bg-fuchsia-400'
                onClick={() => handleSelection('name')}
              >
                Name
              </li>
              <li
                className='cursor-pointer text-white text-center pt-1 pb-1 hover:bg-fuchsia-400'
                onClick={() => handleSelection('lastName')}
              >
                Last Name
              </li>
              <li
                className='cursor-pointer text-white text-center pt-1 pb-1 hover:bg-fuchsia-400'
                onClick={() => handleSelection('email')}
              >
                Email
              </li>
              <li
                className='cursor-pointer text-white text-center pt-1 pb-1 hover:bg-fuchsia-400'
                onClick={() => handleSelection('cellphone')}
              >
                Cellphone
              </li>
              <li
                className='cursor-pointer text-white text-center pt-1 pb-1 hover:bg-fuchsia-400'
                onClick={() => handleSelection('age')}
              >
                Age
              </li>
              <li
                className='cursor-pointer text-white text-center pt-1 pb-1 rounded-b-[6px] hover:bg-fuchsia-400'
                onClick={() => handleSelection('comment')}
              >
                Comment
              </li>
            </ul>
          )}
        </div>

        {/* Dynamically rendered form fields */}
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="text-white capitalize">{field.type}:</label>
            <div className='flex gap-3'>
              <input
                type={field.type === 'email' ? 'email' : 'text'}
                value={field.value}
                onChange={(e) => handleInputChange(index, e)}
                className="border-b-[1px] border-b-gray-400 p-2 flex-grow focus:outline-none text-white"
              />
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="bg-red-400 text-white pl-2 pr-2 cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

export default ExerciseEighteen;