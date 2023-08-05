import React, { useState } from "react";
import "./App.css";
import TextField from '@mui/material/TextField';

const App = () => {
  const [num, setNum] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleMaxChange = (event) => {
    setMax(Number(event.target.value));
  };

  const handleMinChange = (event) => {
    setMin(Number(event.target.value));
  };

  const handleClick = () => {
    if (min >= max) {
      setErrorMessage("ערך המינימום חייב להיות קטן מערך המקסימום");
      return;
    }
    setErrorMessage("");
    let generatedNumbers = [];
    for (let i = 0; i < 20; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      generatedNumbers.push(randomNumber);
    }
    setNum(0); 
    displayNumbers(generatedNumbers);
  };

  const displayNumbers = (numbers) => {
    let index = 0;
    const interval = setInterval(() => {
      setNum(numbers[index]);
      index++;
      if (index === numbers.length) {
        clearInterval(interval);
      }
    }, 80); 
  };

  return (
    <>
      <section>
        <div className="wrapper">
          <TextField
            className='minNum'
            id="outlined-basic"
            label="ערך מינימום"
            variant="outlined"
            onChange={handleMinChange}
            style={{
              margin: "10px",
              width: "200px"
            }}
          />
          <TextField
            className='maxNum'
            id="outlined-basic"
            label="ערך מקסימום"
            variant="outlined"
            onChange={handleMaxChange}
            style={{
              margin: "10px",
              width: "200px"
            }}
          />

          <button className="button" onClick={handleClick}>
            <div className="text">
              לחץ כאן כדי להגריל מספר            </div>
          </button>

          {errorMessage && (
            <div className="error">{errorMessage}</div>
          )}

          <div className="number">{num}</div>
        </div>
        <div class='air air1'></div>
        <div class='air air2'></div>
        <div class='air air3'></div>
        <div class='air air4'></div>
      </section>
    </>
  );
};

export default App;
