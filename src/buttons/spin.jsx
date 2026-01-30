import { setupPickers } from "../money";
export default function Spin({orientation, setOrientation, picker, setPicker}){
    function spin(){
         const spins=Math.floor(Math.random()*1000);
       
         const spinner=setInterval(function(){
              setPicker((picker+1)%16);
                setOrientation((orientation+6.25)%360);//Avoids the numbers getting too high
                 
                
         }, 1);
         //Stops spinning
        setTimeout(function(){
            clearInterval(spinner);
        }, spins);
    }
    return <button type="button" onClick={spin}>Spin</button>
}