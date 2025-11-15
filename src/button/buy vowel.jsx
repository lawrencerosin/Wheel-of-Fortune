import { useContext, useState } from "react";
import GameContext from "../context/game context";
export default function BuyVowel(){
    const [money, setMoney, buyingVowel, setBuyingVowel, choseLetter]=useContext(GameContext);
    
    function buy(event){
        if(money>=250&&!buyingVowel){
            
            setMoney(money-250);
          
            setBuyingVowel(true);
        }
        else
            event.target.disabled=true;
    }
    const CSS={
        backgroundColor:"blue"
    }
   
    return <button type="button" style={CSS} onClick={buy} disabled={!choseLetter}>Buy a Vowel</button>;
}