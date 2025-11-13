 
import {  Choice} from "./choice";

export let money=0;
function Key({letter, letters, word, setLetters,  potentialIndex}){
    const choices=Choice.setupChoices();
    const CSS={
        backgroundColor:"lightgray",
        width:"50px",
        height:"50px",
        marginLeft:"5px"
    }
    function addLetter(event){
        const filled=[...letters];
        let exists=false;
        for(let position=0; position<filled.length; position++){
            if(event.target.textContent==word[position]){
                filled[position]=word[position];
                exists=true;
            }
        }
        setLetters(filled);
        //So it won't be reused
        event.target.disabled="true";
        if(exists){
             console.log(potentialIndex);
          money+=choices[potentialIndex].money;
        }
    }
    return <button type="button" onClick={addLetter} style={CSS}>{letter}</button>;
}
export default function Keyboard({letters, setLetters, word, potentialIndex}){
   const LETTERS=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   const keys=LETTERS.map(function(letter, position){
       const keyName="key"+position;
       //Whether or not to add a line break
       if(position%10==0)
         return <><Key key={keyName} letter={letter} letters={letters} word={word} potentialIndex={potentialIndex} setLetters={setLetters}/><br/></>;
       else
        return <Key key={keyName} letter={letter} letters={letters} potentialIndex={potentialIndex} word={word} setLetters={setLetters}/>;
   });
   return <div>{keys}</div>;
}