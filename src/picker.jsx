import { Choice } from "./choice";
import "./wheel.css";

export default function Picker({money, color}){
     /*  const CSS={
           position:"absolute",
          transform:"rotate(18deg)",
          transformOrigin:"50px 50px",
          color:{color}
       };*/
       const choice=new Choice(color, money);
        return <span style={color} className="picker-text">{choice.choiceToDisplayedValue()}</span>;
   
}