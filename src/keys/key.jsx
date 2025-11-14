import {  Choice} from "../choice";
import {useContext, useState} from "react";
import GameContext from "../game context";
export default function Key({letter, letters, word, setLetters,  potentialIndex, vowel}){
    const choices=Choice.setupChoices();
    const [money, setMoney, buyingVowel]=useContext(GameContext);
    const [used, setUsed]=useState(false);
     
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
        //So it won't be reused, and it doesn't allow vowels to be selected unless buying a vowel
        if(used||vowel&&!buyingVowel)
          event.target.disabled="true";
        else
         event.target.disabled="false";
        if(exists){
             
          setMoney(money+choices[potentialIndex].money);
        }
    }
    return <button type="button" onClick={addLetter} style={CSS} >{letter}</button>;
}