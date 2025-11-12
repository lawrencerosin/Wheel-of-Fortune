import {Choice} from "./choice";
import Picker from "./picker";
export default function Wheel({selected}){
    const choices=Choice.setupChoices();
    const pickers=choices.map(function(choice, position){
        const colorCommand={backgroundColor:choice.color};
        const selectedColor={...colorCommand};
        selectedColor["border"]="2px solid white";
        const picker="picker"+position;
        if(position==selected){
            
           return <Picker key={picker} color={selectedColor} border="true" money={choice.money}/>
        }
        else
            return <Picker key={picker} color={colorCommand} border="false" money={choice.money}/>
    });
    return <div>{pickers}</div>;
}