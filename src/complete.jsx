import { useContext } from "react";
import GameContext from "./context/game context";
export function nextBlank(letters, setBlank, start=0){
    for(let position=start; position<letters.length; position++){
       
        if(letters[position]==""){
           
            setBlank(position);
            //Avoids skipping the current blank
            break;
        }
    }
}
export default function Complete({letters, setMode, blank, setBlank}){
   
   const CSS={
        backgroundColor:"orange"
    }
    function complete(){
        setMode("complete");
        nextBlank(letters, setBlank);
        console.log(blank);
    }
    return <button type="button" style={CSS} onClick={complete}>Complete</button>
}