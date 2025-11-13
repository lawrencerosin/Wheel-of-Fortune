import { useState, useEffect, useRef } from 'react'
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
    const [letters, setLetters]=useState([]);
    async function retrieveWord(){
      /* const wordAPI=await fetch("https://random-word-api.herokuapp.com/word");
       const words=await wordAPI.json();*/
       setWord("pizza"); 
       const newLetters=[];
      
       for(let position=0; position<word.length; position++)
          newLetters.push(" ");
        setLetters(newLetters);
    }
    useEffect( function(){
       retrieveWord();

    }, []);
   
    
   return <><Wheel selected={selection}/><Blanks letters={letters}/><Keyboard letters={letters} setLetters={setLetters} word={word}/><Spin selection={selection} setSelection={setSelection}/></>;
   
}

export default App
