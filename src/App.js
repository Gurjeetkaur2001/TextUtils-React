
import { useState } from 'react';
import './App.css';
/* import About from './Components/About';  */
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
/* import {Routes,Route } from 'react-router-dom'; */


function App() {
  const[mode,setMode]=useState('light') //weather dark mode enable or not

const[alert,setAlert]=useState(null)
   
const showAlert=(message,type)=>{
  setAlert({
      message:message,
      type:type
  })
}

setTimeout(() => {
  showAlert(null)   
}, 4000);

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor="#090f31";
      showAlert("Dark mode has been Enabled","success")
      /* document.title="textutils-Dark mode" */ //chnage the title dynamically bt this is not good developer experience to create the website.
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been Enabled","success")
      /* document.title="textutils-light mode" */

    }
  }
  return (
    <>
   
    <Navbar title="TextUtils" Abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className='container my-3'> 

   {/*  <Routes>
   <Route path={'/about'} element={<About/>}></Route>
   <Route path={"/home"} element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>}>
   
   </Route>
  
   </Routes> */}
   {<TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>}
   
   {/* <About/> */}
      
     </div>
     
     </>
   
        
  
  );
}

export default App;
