import { useContext } from "react";
import GameContext from "../context/game context";
export function nextBlank(letters, setBlank, start=0){
    for(let position=start; position<letters.length; position++){
       
        if(letters[position]==""){
           
            setBlank(position);
            //Avoids skipping the current blank
            return;
        }
    }
    //If at the end, sets to the length of letters
    setBlank(letters.length);
}
export default function Complete(properties){
   
   const CSS={
        backgroundColor:"orange"
    }
    function complete(){
        properties.setMode("complete");
        properties.setHoldLetters([...properties.letters]);
        nextBlank(properties.letters, properties.setBlank);
        properties.setChoseLetter(false);
        properties.setSpun(true);
         
    }
    return <button type="button" style={CSS} disabled={properties.spun} onClick={complete}>Complete</button>
}