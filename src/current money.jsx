 import { useContext } from "react";
 import MoneyContext from "./context/game context";
export default function CurrentMoney(){
    const [money, setMoney]=useContext(MoneyContext);
    const CSS={
        color:"white",
        border:"1px solid blue",
        textAlign:"center"
    }
    
    return <h1 style={CSS}>Money: {money}.00</h1>;

}