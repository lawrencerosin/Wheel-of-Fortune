
import {useContext, useState, useEffect} from "react";
import { setupPickers } from "../money";
function buildWord(letters){
    let word="";
    for(let letter of letters)
        word+=letter;
    return word;
}
export default function Key(properties){
     
    const [used, setUsed]=useState(false);
    const vowel=properties.letter=='a'||properties.letter=='e'||properties.letter=='i'||properties.letter=='o'||properties.letter=='u'?true:false
    const CSS={
        backgroundColor:"lightgray",
        width:"50px",
        height:"50px",
        marginRight:"2px"
    }
    
    function addLetter(){
        const pickers=setupPickers();
        const updatedLetters=[...properties.letters];
        let found=false;
        for(let position=0; position<properties.word.length; position++){
             
            if(properties.word[position]==properties.letter){
                updatedLetters[position]=properties.letter;
                
                found=true;
            }
        }
       
        properties.letterSetter(updatedLetters);
        setUsed(true);
        properties.spunSetter(false);  
        if(found&&typeof pickers[properties.picker]=="number"&&!vowel){
           
             const updatedCash=[...properties.cash];
             updatedCash[properties.player]+=pickers[properties.picker];
             properties.cashSetter(updatedCash);
        }
      
        properties.playerSetter((properties.player+1)%properties.cash.length);
    }
    return <button type="button" style={CSS} onClick={addLetter} disabled={used||!properties.spun||vowel&&!properties.buyingVowel}>{properties.letter}</button>
}