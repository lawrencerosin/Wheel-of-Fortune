import { useContext } from "react";
import GameContext from "../game context";
export default function BuyVowel(){
    const [money, setMoney, buyingVowel, setBuyingVowel]=useContext(GameContext);
    function buy(){
        if(money>=250){
            
            setMoney(money-250);
          
            setBuyingVowel(true);
        }
    }
    const CSS={
        backgroundColor:"blue"
    }
    return <button type="button" style={CSS} onClick={buy}>Buy a Vowel</button>;
}