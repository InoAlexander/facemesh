import React, {useRef} from 'react';
import * as tf from '@tensorflow-models/facemesh';
import * as facemesh from "@tensorflow-models/facemesh"
import Webcam from 'react-webcam';
import logo from './logo.svg';
import './App.css';

function App() {
// setting up webcam
// setting up references that allow us to acces the on screen components
const webcamRef = useRef(null)
const canvasRef = useRef(null)



  return (
    <div className="App">
    <header className = "App-header">
      <Webcam ref={webcamRef} 
      style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight :"auto",
          left:0,
          right: 0,
          textAlign: "center",
          zIndex:8,
          width:1080,
          height:580
      }
      } />

      <canvasRef ref={canvasRef}
      style={
        {
          position: "absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:0,
          right: 0,
          textAlign: "center",
          zIndex:9,
          width:640,
          height:480
        }
      } />
      
    </header>
    </div>
  );
}

export default App;
