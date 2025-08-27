import React, { useState } from 'react'

function ExerciseTwo() {

    const [charCounter, setCharCounter] = useState('');
    const getCharacterNum = (e) => {
        setCharCounter(e.target.value);
    }

  return (
    <div>ExerciseTwo</div>
  )
}

export default ExerciseTwo