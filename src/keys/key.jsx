
import {useContext, useState, useEffect} from "react";
function buildWord(letters){
    let word="";
    for(let letter of letters)
        word+=letter;
    return word;
}
export default function Key(properties){
     
    
    const CSS={
        backgroundColor:"lightgray",
        width:"50px",
        height:"50px",
        marginRight:"5px"
    }
    function addLetter(){
        const newLetters=[...properties.letters];
        for(let position=0; position<properties.word.length; position++){
             
            if(properties.word[position]==properties.letter)
                newLetters[position]=properties.letter;
        }
        properties.setter(newLetters);
        
    }
    return <button type="button" style={CSS} onClick={addLetter}>{properties.letter}</button>
}