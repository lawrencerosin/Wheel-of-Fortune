import { addCommas, setupPickers } from "./money"
export default function PotentialMoney({picker}){
    const CSS={
        color:'white'
    }
    const pickers=setupPickers();
    if(typeof pickers[picker]=="string")
        return <h1 style={CSS}>{pickers[picker]}</h1>;
    else
      return <h1 style={CSS}>Potential Money:{addCommas(pickers[picker])}.00 </h1>
}