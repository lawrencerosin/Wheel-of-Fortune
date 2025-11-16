import {useContext, useState, useEffect} from "react";
import GameContext from "../context/game context";
import { choices } from "../choice";
export default function Spin(properties){
     const [money, setMoney, buyingVowel, setBuyingVowel, choseLetter, setChoseLetter, spun, setSpun]=useContext(GameContext);
     const [disabled, setDisabled]=useState(false);
     
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
         
        else{
          //  setSpun(false);
          //For bankruptcy
          if(properties.selection==0){
            setMoney(money+choices[properties.selection]);
          }
        }
       }
       properties.setMode("pick");
         
         
    }
    const CSS={
        backgroundColor:"yellow"
    }
    useEffect(function(){
         if(!choseLetter||properties.spun)
            setDisabled(true);
         else
            setDisabled(false);
    }, [properties.choseLetter, properties.spun])
    return <button style={CSS} onClick={spin} disabled={disabled}>{properties.buttonText}</button>
}