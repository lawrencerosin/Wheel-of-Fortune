import { useState } from "react";
import Wheel from "./wheel";
import Spin from "./buttons/spin"
import Keyboard from "./keys/keyboard"
import { players } from "./global variables";
import Blanks from "./blanks/blanks";
export default function Game(){
       function initializePlayersCash(){
         const playersCash=new Array(players);
         for(let position=0; position<playersCash.length; position++){
            playersCash[position]=0;
         }
       }
       let word="hello"
       const [orientation, setOrientation]=useState(0);
       const [letters, setLetters]=useState(new Array(word.length));
       const [picker, setPicker]=useState(10);
       const [playersCash, setPlayersCash]=useState(initializePlayersCash());
       const [playerPosition, setPlayerPosition]=useState(0);
       return <><Wheel orientation={orientation} position={picker}/><br/><Spin orientation={orientation} setOrientation={setOrientation} picker={picker} setPicker={setPicker}/><Keyboard letters={letters} setter={setLetters} word={word}/><Blanks word={word} letters={letters}/></>
       
}