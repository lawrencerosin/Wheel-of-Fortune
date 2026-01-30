import { useState } from "react";
import Wheel from "./wheel";
import Spin from "./buttons/spin"
import Keyboard from "./keys/keyboard"
export default function Game(){
       const [orientation, setOrientation]=useState(0);
          const [picker, setPicker]=useState(10);
    
       return <><Wheel orientation={orientation} position={picker}/><br/><Keyboard/><Spin orientation={orientation} setOrientation={setOrientation} picker={picker} setPicker={setPicker}/></>
       
}