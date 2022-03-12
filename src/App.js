
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode]=useState('light')
  const [alert,setAlert]=useState('null')
  const showAlert=(message,type)=>
  {
    setAlert(
      {
        msg:message,
        type : type
      }
    )
    setTimeout(() => {
      showAlert()
    }, 1500);
  }
  const toggleMode =()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      showAlert("Dark Mode has been Enabled","success");
    }
    else
    {
setMode('light');
document.body.style.backgroundColor='white';
showAlert("light Mode has been Enabled","success");
    }
  }
  return (
    <>
    
   
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
   <TextForm showAlert={showAlert} Heading="Enter the text to Analyse" mode={mode}/>
  {/* <About/> */}
 
</div>

    </>
  );
}

export default App;
