import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Spin from "./spin";
import Blanks from "./blank";
import './App.css'
import Wheel from "./wheel";
import Keyboard from "./keyboard";
function App() {
    const word=useRef("");
    const [selection, setSelection]=useState(0);
    async function retrieveWord(){
       const wordAPI=await fetch("https://random-word-api.herokuapp.com/word");
       const words=await wordAPI.json();
       word.current=words[0];
       console.log(word.current);
    }
    useEffect( function(){
       retrieveWord();
    }, []);
 
   return <><Wheel/><Blanks word={word}/><Keyboard/><br/><Spin selection={selection} setSelection={setSelection}/></>;
   
}

export default App
