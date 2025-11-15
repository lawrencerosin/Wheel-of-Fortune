import { useState, useEffect, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Spin from "./button/spin";
import BuyVowel from "./button/buy vowel";
import Blanks from "./blanks/blanks";
import './App.css'
import Wheel from "./wheel";
import Keyboard from "./keys/keyboard"; 
import CurrentMoney from "./current money"; 
import GameContext from "./context/game context";
function App() {
    const [word, setWord]=useState("");
    const [selection, setSelection]=useState(0);
    const [letters, setLetters]=useState([]);
    const [money, setMoney]=useState(0);
    const [buyingVowel, setBuyingVowel]=useState(false);
    const [choseLetter, setChoseLetter]=useState(true);//Waits until the user spun or buys a vowel
     
    
    
    async function retrieveWord(){
       /*const wordAPI=await fetch("https://random-word-api.herokuapp.com/word");
       const words=await wordAPI.json();*/
        setWord("pizzaboys"); 
       //To display the blanks
        console.log("running");
       const newLetters=[];
       
       for(let position=0; position<9; position++)
          newLetters.push(" ");
        setLetters(newLetters);
    }
    useEffect( function(){
       retrieveWord();

    }, []);
    
    
   return <GameContext.Provider value={[money, setMoney, buyingVowel, setBuyingVowel, choseLetter, setChoseLetter]}><Wheel selected={selection}/><Blanks letters={letters}/><Keyboard letters={letters} setLetters={setLetters} word={word} potentialIndex={selection}/><Spin selection={selection} setSelection={setSelection}/><BuyVowel money={money}/><CurrentMoney money={money}/></GameContext.Provider>;
   
}

export default App
