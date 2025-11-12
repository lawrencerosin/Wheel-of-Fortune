import "./wheel.css";
export default function Picker({money, color}){
    
        return <span style={color} className="picker-text">{money}</span>;
   
}