import {Choice} from "./choice";
import Picker from "./picker";
export default function Wheel({selected}){
    const choices=Choice.setupChoices();
    const pickers=choices.map(function(choice, position){
        const colorCommand={backgroundColor:choice.color};
        const selectedColor={...colorCommand};
        selectedColor["border"]="2px solid white";
        const picker="picker"+position;
        function NewLine({color}){
             if(position%5==0&&position>0)
               return <><Picker key={picker} color={color}  money={choice.money}/><br/></>;
             else
               return <Picker key={picker} color={color}  money={choice.money}/>;
        }
        
        if(position==selected){
           return <NewLine color={selectedColor}/>
        }
        else
            return <NewLine color={colorCommand}/>
    });
    return <div>{pickers}</div>;
}