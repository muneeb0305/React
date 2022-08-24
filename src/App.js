import React, {useState} from 'react';
import './App.css'; 
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(22 0 72)';
      document.body.style.color = 'white';
      showAlert(" Blue Mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert(" Light Mode has been enabled","success");
    }
  }
  const greenMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#b70000';
      document.body.style.color = 'white';
      showAlert(" Red Mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert(" Light Mode has been enabled","success");
    }
  }
  return (
      <>
        <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} greenMode={greenMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
            <Routes>
              <Route exact path="/about" element ={<About />}/>
              <Route exact path="/" element= {<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/>}/>
            </Routes>  
          </div>
        </Router>
    </>
  );
}
