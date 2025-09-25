import { useState } from 'react'

function ExerciseEight() {
    const [name, setName] = useState<string>('');
    const [isNameEmpty, setIsNameEmpty] = useState(false);

    const [lastName, setLastName] = useState<string>('');
    const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);

    const [email, setEmail] = useState<string>('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    // regex de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [age, setAge] = useState<string>('');
    const [isAgeValid, setIsAgeValid] = useState(true);
    // regex de idade entre 16 e 95
    const ageRegex = /^(1[6-9]|[2-8][0-9]|9[0-5])$/;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isNameEmptyNow = name.trim() === '';
        const isLastNameEmptyNow = lastName.trim() === '';
        const isEmailValidNow = emailRegex.test(email);
        const isAgeValidNow = ageRegex.test(age);

        setIsNameEmpty(isNameEmptyNow);
        setIsLastNameEmpty(isLastNameEmptyNow);
        setIsEmailValid(isEmailValidNow);
        setIsAgeValid(isAgeValidNow);
    }

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setName('');
        setLastName('');
        setEmail('');
        setAge('');
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setName(value);
        console.log(value);
        setIsNameEmpty(value.trim() === '');
    }

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLastName(value);
        console.log(value);
        setIsLastNameEmpty(value.trim() === '');
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        console.log(value);
        setIsEmailValid(emailRegex.test(value));
    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAge(value);
        // console.log(value);

        const ageNumber = Number(value);
        setIsAgeValid(ageNumber >= 16 && ageNumber <= 95);
    }

    return (
        <div className='flex flex-col justify-between gap-3 border-[1.5px] border-gray-300 rounded-[6px] p-4'>
            <h1 className="font-semibold text-white">Exercise 8</h1>
            <p className="text-white text-[14px]">Build a form with name, email, and phone. Validate inputs on submit and show errors
                dynamically without refreshing.</p>
            <form
                action=""
                onSubmit={handleSubmit}
                className='flex flex-col gap-2'
            >
                <div className='flex gap-2 w-[100%]'>
                    {/* div for the NAME input  */}
                    <div className='w-[50%]'>
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder='Your name'
                            className='text-[12px] text-white focus:outline-none border-b-white border-b-[0.5px] pb-[6px] w-full placeholder:text-white'
                        />
                        <p className={!isNameEmpty ? 'hidden' : 'block text-red-500 text-[11px]'}>This field is required</p>
                    </div>
                    {/* div for the NAME input  */}

                    {/* div for the LAST NAME input  */}
                    <div className='w-[50%]'>
                        <input
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                            placeholder='Your last name'
                            className='text-[12px] text-white focus:outline-none border-b-white border-b-[0.5px] pb-[6px] w-full placeholder:text-white'
                        />
                        <p className={!isLastNameEmpty ? 'hidden' : 'block text-red-500 text-[11px]'}>This field is required</p>
                    </div>
                    {/* div for the LAST NAME input  */}
                </div>

                <div className='flex gap-2 w-[100%]'>
                    {/* div for the EMAIL input  */}
                    <div className='w-[50%]'>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="email"
                            className='text-[12px] text-white focus:outline-none border-b-white border-b-[0.5px] pb-[6px] w-full placeholder:text-white'
                        />
                        <p className={isEmailValid ? 'hidden' : 'block text-red-500 text-[11px]'}>This email format is not valid</p>
                    </div>
                    {/* div for the EMAIL input  */}

                    {/* div for the AGE input  */}
                    <div className='w-[50%]'>
                        <input
                            type="number"
                            value={age}
                            onChange={handleAgeChange}
                            placeholder='age'
                            className='text-[12px] text-white focus:outline-none border-b-white border-b-[0.5px] pb-[6px] w-full placeholder:text-white'
                        />
                        <p className={isAgeValid ? 'hidden' : 'block text-red-500 text-[11px]'}>This age interval is not allowed</p>
                    </div>
                    {/* div for the AGE input  */}
                </div>

                {/* CLEAR and SUBMIT buttons */}
                <div className='flex items-center justify-end gap-1'>
                    <button
                        type='reset'
                        onClick={handleClear}
                        className='text-[12px] bg-red-400 text-white w-8 p-1 mt-2 rounded-[4px] cursor-pointer'>
                        X
                    </button>
                    <button
                        type='submit'
                        className='text-[12px] bg-green-400 text-white w-fit p-1 mt-2 rounded-[4px] cursor-pointer'>
                        Submit
                    </button>
                </div>
                {/* div that holds both buttons */}

            </form>
        </div>
    )
}

export default ExerciseEight