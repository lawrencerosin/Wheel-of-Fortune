import { useState } from "react";
import Wheel from "./wheel";
import Spin from "./buttons/spin"
import Keyboard from "./keys/keyboard"
import { players } from "./global variables";
import Blanks from "./blanks/blanks";
import PotentialMoney from "./potential money";
export default function Game(){
       function initializePlayersCash(){
         const playersCash=new Array(players);
         for(let position=0; position<playersCash.length; position++){
            playersCash[position]=0;
         }
         return playersCash;
       }
       let word="hello";
       const [spun, setSpun]=useState(false);
       const [orientation, setOrientation]=useState(0);
       const [letters, setLetters]=useState(new Array(word.length));
       const [picker, setPicker]=useState(10);
       const [playersCash, setPlayersCash]=useState(initializePlayersCash());
       const [playerPosition, setPlayerPosition]=useState(0);
       const [money, setMoney]=useState(10000);
       return <><Wheel orientation={orientation} position={picker} /><PotentialMoney money={money}/> <br/><Spin orientation={orientation} setOrientation={setOrientation} picker={picker} setPicker={setPicker} setSpun={setSpun} moneySetter={setMoney}/><Keyboard letters={letters} letterSetter={setLetters} cash={playersCash} cashSetter={setPlayersCash} spunSetter={setSpun} word={word} spun={spun} player={playerPosition} playerSetter={setPlayerPosition}/><Blanks word={word} letters={letters}/></>
       
}