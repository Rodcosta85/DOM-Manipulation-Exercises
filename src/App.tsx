import { useState } from "react";

import PlusX from '../public/plus-x.svg';

import ExerciseOne from "./Exercise 1/ExerciseOne.tsx";
import ExerciseTwo from "./Exercise 2/ExerciseTwo.tsx";
import ExerciseThree from "./Exercise 3/ExerciseThree.tsx";
import ExerciseFour from "./Exercise 4/ExerciseFour.tsx";
import ExerciseFive from "./Exercise 5/ExerciseFive.tsx";
import ExerciseSix from "./Exercise 6/ExerciseSix.tsx";
import ExerciseSeven from "./Exercise 7/ExerciseSeven.tsx";
import ExerciseEight from "./Exercise 8/ExerciseEight.tsx";
import ExerciseNine from "./Exercise 9/ExerciseNine.tsx";
import ExerciseTen from "./Exercise 10/ExerciseTen.tsx";
import ExerciseTenB from "./Exercise 10/ExerciseTenB.tsx"
import ExerciseEleven from "./Exercise 11/ExerciseEleven.tsx";
import ExerciseTwelve from "./Exercise 12/ExerciseTwelve.tsx";
import ExerciseThirteen from "./Exercise 13/ExerciseThirteen.tsx";
import ExerciseThirteenB from "./Exercise 13/ExerciseThirteenB.tsx";
import ExerciseFourteen from "./Exercise 14/ExerciseFourteen.tsx";
import ExerciseFifteen from "./Exercise 15/ExerciseFifteen.tsx";
import ExerciseSeventeen from "./Exercise 17/ExerciseSeventeen.tsx";
import ExerciseEighteen from "./Exercise 18/ExerciseEighteen.tsx";
import ExerciseNineteen from "./Exercise 19/ExerciseNineteen.tsx";
import ExerciseTwenty from "./Exercise 20/ExerciseTwenty.tsx";
import ExerciseTwentyTwo from "./Exercise 22/ExerciseTwentyTwo.tsx";
import ExerciseTwentyThree from "./Exercise 23/ExerciseTwentyThree.tsx";
import ExerciseBonusTwo from "./Exercise BONUS/ExerciseBonusTwo.tsx";
import ExerciseSlider from "./Exercise Slider/ExerciseSlider.tsx";


interface ComponentsProps {
  id: string,
  element: React.ReactElement,
  title: string
}



function App() {

  const [toggle, setToggle] = useState(true);
  const [openObs, setOpenObs] = useState(false)
  const elementArr: ComponentsProps[] = [
    { id: '1', element: <ExerciseOne />, title: 'Exercise 1' },
    { id: '2', element: <ExerciseTwo />, title: 'Exercise 2' },
    { id: '3', element: <ExerciseThree />, title: 'Exercise 3' },
    { id: '4', element: <ExerciseFour />, title: 'Exercise 4' },
    { id: '5', element: <ExerciseFive />, title: 'Exercise 5' },
    { id: '6', element: <ExerciseSix />, title: 'Exercise 6' },
    { id: '7', element: <ExerciseSeven />, title: 'Exercise 7' },
    { id: '8', element: <ExerciseEight />, title: 'Exercise 8' },
    { id: '9', element: <ExerciseNine />, title: 'Exercise 9' },
    { id: '10', element: <ExerciseTen />, title: 'Exercise 10' },
    { id: '10B', element: <ExerciseTenB />, title: 'Exercise 10B' },
    { id: '11', element: <ExerciseEleven />, title: 'Exercise 11' },
    { id: '12', element: <ExerciseTwelve />, title: 'Exercise 12' },
    { id: '13', element: <ExerciseThirteen />, title: 'Exercise 13' },
    { id: '13B', element: <ExerciseThirteenB />, title: 'Exercise 13B' },
    { id: '14', element: <ExerciseFourteen />, title: 'Exercise 14' },
    { id: '15', element: <ExerciseFifteen />, title: 'Exercise 15' },
    { id: '17', element: <ExerciseSeventeen />, title: 'Exercise 17' },
    { id: '18', element: <ExerciseEighteen />, title: 'Exercise 18' },
    { id: '19', element: <ExerciseNineteen />, title: 'Exercise 19' },
    { id: '20', element: <ExerciseTwenty />, title: 'Exercise 20' },
    { id: '22', element: <ExerciseTwentyTwo />, title: 'Exercise 22' },

    // são esses 
    { id: '23', element: <ExerciseTwentyThree />, title: 'Exercise 23' },
    { id: 'bonus2', element: <ExerciseBonusTwo />, title: 'Exercise Bonus #2' },
    // são esses 

    { id: 'slider', element: <ExerciseSlider />, title: "Exercise 'Slider'" },
  ]

  const toggleNavOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggle(prevState => !prevState);
  }

  const toggleObsOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenObs(prevState => !prevState);
  }


  return (
    <div className="bg-blue-900 min-h-[100%] w-[100%] flex flex-col justify-center">
      <header className="bg-white w-full h-16 fixed top-0 z-99 flex justify-between items-center pl-3 pr-3">
        <h1 className="font-semibold">
          REACT TSX
          <span className="ml-[5px] text-green-600">EXERCISE LIST</span>
        </h1>
        <button
          onClick={toggleNavOpen}
          className="cursor-pointer font-semibold flex gap-2"
        >
          EXERCISES LIST
          <div className="rounded-full bg-fuchsia-400 flex items-center justify-center w-6 h-6">
            <img
              src={PlusX}
              alt="a plus or close symbol depending if the menu is closed or open, respectively."
              className={`transition-transform duration-300 ${toggle ? 'rotate-0' : 'rotate-45'}`}
            />
          </div>
        </button>
        <nav className={toggle ? 'hidden' : 'absolute right-[1.5%] top-[5rem] bg-white w-[10rem] rounded-[6px] p-3'}>
          <ul className="flex flex-col gap-3 overflow-y-scroll h-[12rem]">
            {elementArr.map((item) => (
              <li key={item.id}>
                <a
                  className="cursor-pointer"
                  href={`#${item.id}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <button
        onClick={toggleObsOpen}
        className="fixed top-[80px] left-4 bg-red-500 text-white pl-2 pr-2 pt-0.5 pb-0.5 mr-1 rounded-[6px] cursor-pointer">
        OBS
      </button>
      <p className={openObs ? 'fixed top-[120px] left-4 w-[12rem] p-3 bg-white rounded-[6px]' : 'hidden'}>
        Exercises that are on the PDF and are not here have already been done elsewhere. The objective of this list was seeing new and different scenarios from previous times.
      </p>
      <div className="flex flex-col items-center gap-10 p-8 pt-24">
        {elementArr.map((item) => {
          const Element = item.element;
          return (
            <section id={item.id} key={item.id} className="w-[40%]">
              {Element}
            </section>
          );
        })}
      </div>
    </div>
  )
}

export default App
