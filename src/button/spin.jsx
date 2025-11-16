import {useContext, useState} from "react";
import GameContext from "../context/game context";
import { choices } from "../choice";
export default function Spin(properties){
     const [money, setMoney, buyingVowel, setBuyingVowel, choseLetter, setChoseLetter, spun, setSpun]=useContext(GameContext);
     
     
     function spin(event){
        if(event.target.textContent=="Get Ready to Spin"){
           const change=Math.floor(Math.random()*20);
        
            properties.setSelection((properties.selection+change)%20);
            properties.setButtonText("Spin");
        }
       else{
       
        if(properties.selection>1){
          setChoseLetter(false);
          setSpun(true);
        }
        //For bankruptcy
        else if(properties.selection==0){
            setMoney(money+choices[properties.selection]);
        }
       }// setMode("pick");
         
         
    }
    const CSS={
        backgroundColor:"yellow"
    }
    return <button style={CSS} onClick={spin} disabled={!choseLetter||spun}>{properties.buttonText}</button>
}