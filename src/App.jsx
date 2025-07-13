import styled from "styled-components"
import { useState } from 'react';
import './App.css'

function App() {
// making the state for the application
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const funWeight = (e) =>{
    setError("");
    setWeight(e.target.value);
  };

  const funHeight = (e) =>{
    setError("")
    setHeight(e.target.value);
  };

  const funClick = (e) => {
    e.preventDefault();
    const W = parseFloat(weight);
    const H = parseFloat(height)/100;
    if(!W || !H){
      setError("⚠️ Please fill in both fields with valid numbers.");
      setBmiValue("");
      setMessage("");
      return;
    }
    else{
      setError(""); //clear if any previous error

      const bmi = (W) / (H * H);
      console.log(bmi.toFixed(2));
      setBmiValue(bmi.toFixed(2));

      if(bmi < 18.5){
        setMessage("Underweight")
      }
      else if( bmi >= 18.5 && bmi <= 24.9 ){
        setMessage("Normal")
      }
      else if( bmi >= 25 && bmi <= 29.9 ){
        setMessage("Overweight")
      }
      else{
        setMessage("Obese");
      }
    }
  };

  const funReload = () => {
    setBmiValue("");
    setHeight("");
    setWeight("");
    setMessage("");
  };
  

  return (
   <Container>
      <Min_cont>
        <h2>BMI Calculator</h2>
        <Form>
          <div className='first'>
            <label htmlFor="weight">Weight (kg)</label>
            <input type="text" name="weight" id="weight" placeholder='Enter Weight in Kg' onChange={funWeight}/>
          </div>
          <div className='first'>
            <label htmlFor="height">Height (cm)</label>
            <input type="text" name="height" id="height" placeholder='Enter Height in cm' onChange={funHeight}/>
          </div>
          <div className='button'>
            <button type="submit" onClick={funClick}>Submit</button>
            <button onClick={funReload}>Reload</button>
          </div>
          {error && <p className="error">{error}</p>}
          {/* <p className="error">{error}</p> */}
          <div className='message'>
            <h3>Your BMI is: {bmiValue} </h3>
            <p>{message}</p>
          </div>
        </Form>
      </Min_cont>
   </Container>
  )
}

export default App

 // styling the Calculator
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `;
const Min_cont = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 40px;
  width: 400px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  color: #ffffff;

  h2{
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
  }
`;
const Form = styled.form`
  .first{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label{
      font-size: 15px;
      color: #fff;
      font-weight: 500;
      margin-bottom: 6px;
    }
    input{
      padding: 12px;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #737171;
      font-size: 16px;
      outline: none;
      transition: all 0.3s ease;

     input:focus {
        border-color: #fff;
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
  .button{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 25px;

    button {
      padding: 12px;
      font-size: 16px;
      border-radius: 10px;
      cursor: pointer;
      border: none;
      transition: 0.3s ease;
      font-weight: 600;

      &:first-child {
        background: linear-gradient(120deg, #4facfe, #00f2fe);
        color: #fff;

        &:hover {
          background: linear-gradient(120deg, #00f2fe, #4facfe);
          transform: scale(1.05);
        }
      }

      &:last-child {
        background: linear-gradient(120deg, #ff9a9e, #fad0c4); 
        color: #fff;

        &:hover {
          background: linear-gradient(120deg,#fad0c4, #ff9a9e); 
          transform: scale(1.05);
        }
      }
    }
  }
  .error{
    color: #eb1717;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
  }
  
  .message {
    margin-top: 30px;
    text-align: center;

    h3 {
      font-size: 20px;
      color: #fff;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      color: rgb(255, 136, 255);
    }
  }
`;