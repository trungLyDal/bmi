import { useState } from "react";
import { useMemo } from "react";
import "./styles.css";
import bmiImage from "./assets/BMI-ECPL.jpg";
import { useNavigate } from 'react-router-dom';




const defaultHeight = 150;
const defaultWeight = 50;
const imageStyle = {
  width: "100%"
};

export default function App() {
  const [height, setHeight] = useState(defaultHeight);
  const [weight, setWeight] = useState(defaultWeight);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/weight-gain');
  };

  const handleClick2 = () => {
    navigate('/weight-loss');
  };

  function handleHeightChange(e) {
    const newHeight = e.target.value;
    setHeight(newHeight);
  }

  function handleWeightChange(e) {
    const newWeight = e.target.value;
    setWeight(newWeight);
  }
  

  
  const result = useMemo(() => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters ** 2);
    let message = "";
    if (bmi < 18.5) {
      message = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      message = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      message = "Overweight";
    } else {
      message = "Obese";
    }
    return bmi.toFixed(1),
    message;

  }, [height, weight]);

  
const output = useMemo(() => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters ** 2);
    return bmi.toFixed(1);
  }, [height, weight]);

  return (

    <main>
      <h1>BMI Calculator</h1>
      <div className = "input-section">
        <p class ="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange = {handleWeightChange}
          type="range"
          step= "1"
          min = "30"
          max = "200"
        />
        <p class="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange = {handleHeightChange}
          type="range"
          step= "1"
          min="100"
          max = "250"
        />
      </div>
      
      <div className="output-section">
         <p><b>Your BMI is:</b></p>
         <p className="output">{output}</p>
      </div>

      <div className="result-section">
          <p><b>Results</b></p>
          <p className="result">{result}</p>
      </div>

      <div className = "output-section">
          <p> <b>BMI Range:</b></p>
          <img src={bmiImage} alt = "BMI Scale Charts" style={imageStyle}/>
      </div>
      
      <div className = "weightgain-section">
          <p>To learn how to meet BMI requirements:</p>
    
          <button onClick={handleClick} className="gain"><bold>Gain Weight</bold></button>
          <button  onClick= {handleClick2} className="loss"><bold>Lose Weight</bold></button>
      </div>
      

    </main>
  );
}