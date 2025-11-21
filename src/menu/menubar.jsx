import {FILE_OPTIONS} from "./file";
import {VISIBILITY_OPTIONS} from "./visibility";
import Menu from "./menu";
export default function Menubar(){
    const CSS={
        display:"flex",
        flexDirection:"row"
    }
    
    return <nav style={CSS}><Menu name="File" options={FILE_OPTIONS}/></nav>;
}