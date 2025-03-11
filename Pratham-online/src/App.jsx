
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Register from './component/Register';

const App = () => {
  return (
    <>
     <div className='Register'>
     <Register/> 
    </div>
    
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App