import { useState } from "react";
import Wheel from "./wheel";
import Spin from "./buttons/spin"
import Keyboard from "./keys/keyboard" 
import PlayerTurn from "./player turn";
import Blanks from "./blanks/blanks";
import PotentialMoney from "./potential money";
import MoneysOwned from "./moneys_owned"; 
export default function Game(){
       function initializePlayersCash(){
       
         const playersCash=new Array(parseInt(sessionStorage.getItem("players")));
         for(let position=0; position<playersCash.length; position++){
            playersCash[position]=0;
         }
         return playersCash;
       }
      const [word, setWord]=useState("");
      function forceSetup(){
        if(sessionStorage.getItem("players")===null&&window.location.pathname!="/setup")
          window.location.href="/setup";
      }
       async function getWord(){
        const content=await fetch("https://random-word-api.herokuapp.com/word");
        const words=await content.json();
         setWord(words[0]);
         setLetters(new Array(word.length));
       } 
       forceSetup();
       
       const [spun, setSpun]=useState(false);
       const [orientation, setOrientation]=useState(0);
       const [letters, setLetters]=useState(new Array(word.length));
       const [picker, setPicker]=useState(10);
       const [playersCash, setPlayersCash]=useState(initializePlayersCash());
       const [playerPosition, setPlayerPosition]=useState(0);
       const [money, setMoney]=useState(10000); 
       return <span onLoad={getWord}><Wheel orientation={orientation} position={picker} /><PotentialMoney picker={picker}/> <br/><PlayerTurn player={playerPosition}/><Spin orientation={orientation} setOrientation={setOrientation} picker={picker} setPicker={setPicker} spun={spun} setSpun={setSpun} players={playersCash} playersSetter={setPlayersCash} player={playerPosition} playerSetter={setPlayerPosition} moneySetter={setMoney}/><Keyboard letters={letters} letterSetter={setLetters} cash={playersCash} cashSetter={setPlayersCash} spunSetter={setSpun} word={word} spun={spun} player={playerPosition} playerSetter={setPlayerPosition} money={money}/><Blanks word={word} letters={letters}/><MoneysOwned players={playersCash}/></span>
       
}