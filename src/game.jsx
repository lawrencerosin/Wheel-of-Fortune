import { useState } from "react";
import Wheel from "./wheel";
import Spin from "./buttons/spin"
import Keyboard from "./keys/keyboard"
import { players } from "./global variables";
export default function Game(){
       function initializePlayersCash(){
         const playersCash=new Array(players);
         for(let position=0; position<owned.length; position++){
            playersCash[position]=0;
         }
       }
       const [orientation, setOrientation]=useState(0);
       const [picker, setPicker]=useState(10);
       const [playersCash, setPlayersCash]=useState(initializePlayersCash());
       const [playerPosition, setPlayerPosition]=useState(0);
       return <><Wheel orientation={orientation} position={picker}/><br/><Spin orientation={orientation} setOrientation={setOrientation} picker={picker} setPicker={setPicker}/><Keyboard/></>
       
}