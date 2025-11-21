import Chart from "../chart/chart";
import ChartPageSignInLink from "../links/chart page sign in link";
import Menubar from "../menu/menubar";
import OpenedFile from "../opened file";
import FileList from "../file list";
export default function KWL(){
    const CSS={
        backgroundColor:"orange"
    };
    return <div style={CSS}><Menubar/><OpenedFile/><ChartPageSignInLink/><Chart/><FileList/></div>;
}