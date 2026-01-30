import { setupPickers } from "./money"

export default function Wheel({orientation, position} ){
  
    const CSS={
      borderRadius:"1000px",
      width:"300px",
      height:"300px",
      rotate:orientation+"deg"
    }
    const pickers=setupPickers();
    return <><img src="../images/wheel of fortune.png" style={CSS} alt="Wheel of Fortune"/><br/><h1>{pickers[position]}</h1></>
}