import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  Routes, Router, Route, BrowserRouter } from 'react-router'
import './App.css'
import Setup from './setup';
import Game from './game';
function App() {
    return (
      <BrowserRouter>
      <Routes>
        
          <Route path='/setup' element={<Setup/>}/>
          <Route path='/' element={<Game/>}/>
         
    </Routes>
    </BrowserRouter>
    )
}

export default App
