import "./wheel.css";
export default function Picker({money, color}){
   
    return <div style={color} className="picker-text">{money}</div>;
}