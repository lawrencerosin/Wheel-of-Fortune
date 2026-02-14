import { addCommas } from "./money"
export default function PotentialMoney({money}){
    const CSS={
        color:'white'
    }
    return <h1 style={CSS}>Potential Money:{addCommas(money)}.00 </h1>
}