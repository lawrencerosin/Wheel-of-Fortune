import {  choices} from "../choice";
import {useContext, useState, useEffect} from "react";
import GameContext from "../context/game context";

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
        
            const filled=[...properties.letters];
            let exists=false;
            
            setUsed(true);
            for(let position=0; position<filled.length; position++){
                if(event.target.textContent==properties.word[position]){
                    filled[position]=properties.word[position];
                    exists=true;
                }
            }
            properties.setLetters(filled);
            if(exists){
                console.log(choices[properties.potentialIndex].money);
               setMoney(money+choices[properties.potentialIndex].money);
            }
            setChoseLetter(true);
            setSpun(false);
            properties.setSpinText("Get Ready to Spin");
        
    }
    
    useEffect(function(){
      
         //So it won't be reused, and it doesn't allow vowels to be selected unless buying a vowel
        if(used||(properties.vowel&&!buyingVowel)||choseLetter)
          setDisabled(true);
        else
         setDisabled(false);
    }, [choseLetter, buyingVowel, used]);
    return (
              <button type="button" onClick={addLetter} style={CSS} disabled={disabled} >{properties.letter}</button>
          );
}