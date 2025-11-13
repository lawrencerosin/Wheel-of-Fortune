import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Spin from "./spin";
import Blanks from "./blank";
import './App.css'
import Wheel from "./wheel";
import Keyboard from "./keyboard";
import {money} from "./keyboard";
import CurrentMoney from './current money'; 
function App() {
    const [word, setWord]=useState("");
    const [selection, setSelection]=useState(0);
    const [letters, setLetters]=useState([]);
    
    async function retrieveWord(){
       const wordAPI=await fetch("https://random-word-api.herokuapp.com/word");
       const words=await wordAPI.json();
        setWord(words[0]); 
       //To display the blanks
        console.log("running");
       const newLetters=[];
       
       for(let position=0; position<words[0].length; position++)
          newLetters.push(" ");
        setLetters(newLetters);
    }
    useEffect( function(){
       retrieveWord();

    }, []);
   
    
   return <><Wheel selected={selection}/><Blanks letters={letters}/><Keyboard letters={letters} setLetters={setLetters} word={word} potentialIndex={selection}/><Spin selection={selection} setSelection={setSelection}/><CurrentMoney money={money}/></>;
   
}

export default App
