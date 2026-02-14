import { getPotentialMoney, setupPickers } from "../money";
export default function Spin({orientation, setOrientation, picker, setPicker, setSpun, moneySetter}){
    function spin(){
        
         const spins=Math.floor(Math.random()*1000);
         setSpun(true);
         const spinner=setInterval(function(){
              setPicker((picker+1)%16);
              setOrientation((orientation+6.25)%360);//Avoids the numbers getting too high
              
                
         }, 1);
         const pickers=setupPickers();
         //Stops spinning
        setTimeout(function(){
            clearInterval(spinner);
            moneySetter(getPotentialMoney(pickers, picker));
        }, spins);
    }
    return <button type="button" onClick={spin}>Spin</button>
}