import { addCommas } from "./money"
export default function MoneyOwned({player,money}){
    const CSS={color:"white"}
    return <p style={CSS}>Player {player} Money: {addCommas(money)}.00</p>
}