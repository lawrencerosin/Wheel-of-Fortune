import {  Choice} from "../choice";
import {useContext, useState, useEffect} from "react";
import GameContext from "../context/game context";
import ButtonContext from "../context/button context";
export default function Key({letter, letters, word, setLetters,  potentialIndex, vowel}){
    const choices=Choice.setupChoices();
    const [money, setMoney, buyingVowel, setBuyingVowel, choseLetter, setChoseLetter]=useContext(GameContext);
    const [used, setUsed]=useState(false);
    const [disabled, setDisabled]=useState(true);
    const CSS={
        backgroundColor:"lightgray",
        width:"50px",
        height:"50px",
        marginLeft:"5px"
    }
    function addLetter(event){
        const filled=[...letters];
        let exists=false;

         setUsed(true);
        for(let position=0; position<filled.length; position++){
            if(event.target.textContent==word[position]){
                filled[position]=word[position];
                exists=true;
            }
        }
        setLetters(filled);
        if(exists){
             
          setMoney(money+choices[potentialIndex].money);
        }
        setChoseLetter(true);
    }
    
    useEffect(function(){
      
         //So it won't be reused, and it doesn't allow vowels to be selected unless buying a vowel
        if(used||(vowel&&!buyingVowel)||choseLetter)
          setDisabled(true);
        else
         setDisabled(false);
    }, [choseLetter, buyingVowel, used]);
    return (
              <button type="button" onClick={addLetter} style={CSS} disabled={disabled} >{letter}</button>
          );
}