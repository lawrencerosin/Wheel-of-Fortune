
import {useContext, useState, useEffect} from "react";
function buildWord(letters){
    let word="";
    for(let letter of letters)
        word+=letter;
    return word;
}
export default function Key(properties){
     
    const [used, setUsed]=useState(false);
    const CSS={
        backgroundColor:"lightgray",
        width:"50px",
        height:"50px",
        marginRight:"2px"
    }
    function addLetter(){
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
        if(found){
            alert(properties.player);
             const updatedCash=[...properties.cash];
             updatedCash[properties.player]+=properties.money;
             properties.cashSetter(updatedCash);
        }
        properties.playerSetter((properties.player+1)%properties.cash.length);
    }
    return <button type="button" style={CSS} onClick={addLetter} disabled={used||!properties.spun}>{properties.letter}</button>
}