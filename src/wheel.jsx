import {Choice} from "./choice";
import Picker from "./picker";
export default function Wheel(){
    const choices=Choice.setupChoices();
    const pickers=choices.map(function(choice){
        const colorCommand={backgroundColor:choice.color};
        return <Picker color={colorCommand} money={choice.money}/>
    });
    return <div>{pickers}</div>;
}