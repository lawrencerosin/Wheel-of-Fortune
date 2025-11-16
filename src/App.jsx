import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Spin from "./button/spin";
import BuyVowel from "./button/buy vowel";
import Blanks from "./blanks/blanks";
import './App.css'
import Wheel from "./wheel";
import Keyboard from "./keys/keyboard"; 
import Complete from './complete';
import CurrentMoney from "./current money"; 
import GameContext from "./context/game context";
let [count, setCount]=new Array(2);
function update(){
  setCount(count+1);
}
function App() {
    [count, setCount]=useState(0);
    const [word, setWord]=useState("");
    const [selection, setSelection]=useState(0);
    const [letters, setLetters]=useState([]);
    const [money, setMoney]=useState(0);
    const [buyingVowel, setBuyingVowel]=useState(false);
    const [spun, setSpun]=useState(false);
    const [choseLetter, setChoseLetter]=useState(true);//Waits until the user spun or buys a vowel
    const [mode, setMode]=useState("pick");    
    const [blank, setBlank]=useState(0);
    //To allow the selection state to change
    const [spinText, setSpinText]=useState("Get Ready to Spin");
    async function retrieveWord(){
       const wordAPI=await fetch("https://random-word-api.herokuapp.com/word");
       const words=await wordAPI.json();
        setWord(words[0]); 
       //To display the blanks
        console.log("running");
       const newLetters=[];
       
       for(let position=0; position<words[0].length; position++)
          newLetters.push("");
        setLetters(newLetters);
    }
    useEffect( function(){
       retrieveWord();

    }, []);
    
    
   return <GameContext.Provider value={[money, setMoney, buyingVowel, setBuyingVowel, choseLetter, setChoseLetter, spun, setSpun]}><Wheel selected={selection}/><Blanks letters={letters}/><Keyboard letters={letters} setLetters={setLetters} word={word} potentialIndex={selection} spinText={spinText} setSpinText={setSpinText}/><Spin selection={selection} setSelection={setSelection}  buttonText={spinText} setButtonText={setSpinText}/><BuyVowel setMode={setMode} /><Complete letters={letters} setMode={setMode} blank={blank} setBlank={setBlank}/><CurrentMoney money={money}/></GameContext.Provider>;
   
}

export default App
