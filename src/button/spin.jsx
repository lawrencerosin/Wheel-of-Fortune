import {useContext} from "react";
import GameContext from "../context/game context";
export default function Spin({selection, setSelection}){
     const [money, setMoney, buyingVowel, setBuyingVowel, choseLetter, setChoseLetter]=useContext(GameContext);
    function spin(event){
        event.preventDefault();
        const change=Math.floor(Math.random()*20);
        setSelection((selection+change)%20);
        setChoseLetter(false);
    }
    const CSS={
        backgroundColor:"yellow"
    }
    return <button style={CSS} onClick={spin} disabled={!choseLetter}>Spin</button>
}