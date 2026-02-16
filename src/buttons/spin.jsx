import { getPotentialMoney, setupPickers } from "../money";
export default function Spin({orientation, setOrientation, picker, setPicker, spun, setSpun, moneySetter, players, playersSetter, player, playerSetter}){
    function spin(){
        
         const spins=Math.floor(Math.random()*1000);
         
         const spinner=setInterval(function(){
              setPicker((picker+1)%16);
              setOrientation((orientation+6.25)%360);//Avoids the numbers getting too high
              
                
         }, 1);
         const pickers=setupPickers();
         //Stops spinning
        setTimeout(function(){
            clearInterval(spinner);
            
            moneySetter(getPotentialMoney(pickers, picker));

            if(getPotentialMoney(pickers, picker)>0)
              setSpun(true);
            else{
                playerSetter((player+1)%players.length);
                if(pickers[picker]=="Bankrupt"){
                    const updatedMoney=[...players];
                    updatedMoney[player]=0;
                    playersSetter(updatedMoney);
                }
            }
        }, spins);

    }
    const CSS={backgroundColor:"yellow"}
    return <button type="button" style={CSS} onClick={spin} disabled={spun}>Spin</button>
}