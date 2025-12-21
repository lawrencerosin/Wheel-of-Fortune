 
import Picker from "./picker";
import { choices } from "./choice";
export default function Wheel({selected}){
  
    const pickers=choices.map(function(choice, position){
        const colorCommand={backgroundColor:choice.color};
        const selectedColor={...colorCommand};
        selectedColor["border"]="2px solid white";
        const picker="picker"+position;
        function NewLine({color}){
             if(position%5==0&&position>0)
               return <><Picker  color={color}  money={choice.money}/><br/></>;
             else
               return <Picker key={picker} color={color}  money={choice.money}/>;
        }
         
        if(position==selected){
           return <NewLine key={picker} color={selectedColor}/>
        }
        else
            return <NewLine key={picker} color={colorCommand}/>
      ;
    });
    return <div >{pickers}</div>;
}