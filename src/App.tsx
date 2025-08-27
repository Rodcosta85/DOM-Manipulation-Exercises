import ExerciseOne from "./Exercise 1/ExerciseOne.tsx";
import ExerciseTwo from "./Exercise 2/ExerciseTwo.tsx";
import ExerciseThree from "./Exercise 3/ExerciseThree.tsx";
import ExerciseFour from "./Exercise 4/ExerciseFour.tsx";


function App() {

  return (
    <div className="bg-blue-500 h-[100vh] w-[100%] p-8 grid grid-cols-4 grid-rows-2 gap-10">
      <ExerciseOne />
      <ExerciseTwo />
      <ExerciseThree />
      <ExerciseFour />
    </div>
  )
}

export default App
