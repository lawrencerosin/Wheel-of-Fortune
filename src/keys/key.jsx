
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
        marginLeft:"5px"
    }
   /* function addLetter(event){
        if(!done){
         if(properties.mode=="complete"){
            if(properties.blank<properties.letters.length){
                const newLetters=[...properties.letters];
                newLetters[properties.blank]=event.target.textContent;
                properties.setLetters(newLetters);
            }
           
            nextBlank(properties.letters, properties.setBlank, properties.blank);
            if(properties.blank>=properties.letters.length){
                 setChoseLetter(true);
                  setSpun(false);
                if(buildWord(properties.letters)!=properties.word){
                  
                    properties.setLetters(properties.holdLetters);
                    alert("Sorry. That was incorrect.");
                   
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
        if(buildWord(properties.letters)==properties.word){
            setDone(true);
            alert("You got it!");
        }
      }
        
    }
    */
    return <button style={CSS}>{properties.letter}</button>
}