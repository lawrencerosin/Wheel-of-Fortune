import {  choices} from "../choice";
import {useContext, useState, useEffect} from "react";
import GameContext from "../context/game context";
import { nextBlank } from "../button/complete"; 
function buildWord(letters){
    let word="";
    for(let letter of letters)
        word+=letter;
    return word;
}
export default function Key(properties){
     
    const [money, setMoney, buyingVowel, setBuyingVowel, choseLetter, setChoseLetter, spun, setSpun]=useContext(GameContext);
    const [used, setUsed]=useState(false);
    const [disabled, setDisabled]=useState(true);
    const CSS={
        backgroundColor:"lightgray",
        width:"50px",
        height:"50px",
        marginLeft:"5px"
    }
    function addLetter(event){
        
         if(properties.mode=="complete"){
            if(properties.blank<properties.letters.length){
                const newLetters=[...properties.letters];
                newLetters[properties.blank]=event.target.textContent;
                properties.setLetters(newLetters);
            }
           
            nextBlank(properties.letters, properties.setBlank, properties.blank);
            if(properties.blank>=properties.letters.length){
              
                if(buildWord(properties.letters)==properties.word)
                    alert("You got it!");
                else{
                    properties.setLetters(properties.holdLetters);
                    alert("Sorry. That was incorrect.");
                    setChoseLetter(true);
                    setSpun(false);
                }
                properties.setSpinText("Get Ready to Spin");
            }

         }
         else{
            const filled=[...properties.letters];
            let exists=false;
            //So another vowel can be bought
            setBuyingVowel(false);
            setUsed(true);
            for(let position=0; position<filled.length; position++){
                if(event.target.textContent==properties.word[position]){
                    filled[position]=properties.word[position];
                    exists=true;
                }
            }
            properties.setLetters(filled);
            if(exists){
               
               setMoney(money+choices[properties.potentialIndex].money);
            }
            setChoseLetter(true);
            setSpun(false);
            properties.setSpinText("Get Ready to Spin");
        }
        
    }
    
    useEffect(function(){
      
         //So it won't be reused, and it doesn't allow vowels to be selected unless buying a vowel
        if(used||(properties.vowel&&!buyingVowel&&properties.mode!="complete")||choseLetter)
          setDisabled(true);
        else
         setDisabled(false);
    }, [choseLetter, buyingVowel, used, properties.mode]);
    return (
              <button type="button" onClick={addLetter} style={CSS} disabled={disabled} >{properties.letter}</button>
          );
}