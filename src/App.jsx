import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Spin from "./spin";
import Blanks from "./blank";
import './App.css'
import Wheel from "./wheel";
import Keyboard from "./keyboard";
function App() {
    const [word, setWord]=useState("");
    const [selection, setSelection]=useState(0);
    async function retrieveWord(){
       const wordAPI=await fetch("https://random-word-api.herokuapp.com/word");
       const words=await wordAPI.json();
       console.log("hello");
       setWord(words[0]);
    }
    useEffect( function(){
       retrieveWord();
    }, []);
 
   return <><Wheel/><Blanks word={word}/><Keyboard/><br/><Spin/></>;
   
}

export default App
