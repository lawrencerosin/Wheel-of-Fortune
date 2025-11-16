import { useContext, useState } from "react";
import GameContext from "../context/game context";
export default function BuyVowel({setMode}){
    const [money, setMoney, buyingVowel, setBuyingVowel, choseLetter, setChoseLetter, spun, setSpun]=useContext(GameContext);
    
    function buy(event){
        if(money>=250&&!buyingVowel){
        
            setMoney(money-250);
            setChoseLetter(false);
            setBuyingVowel(true);
            setSpun(true);
            setMode("pick");
            event.target.disabled=false;
        }
        
    }
    const CSS={
        backgroundColor:"blue"
    }
   
    return <button type="button" style={CSS} onClick={buy} disabled={!choseLetter}>Buy a Vowel</button>;
}