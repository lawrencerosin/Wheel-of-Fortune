import Chart from "../chart/chart";
import ChartPageSignInLink from "../links/chart page sign in link";
import Menubar from "../menu/menubar";
import OpenedFile from "../opened file";
import FileList from "../file list";
import { useState, createContext} from "react";
export const Info=createContext("Private")
export default function KWL(){
    const CSS={
        backgroundColor:"orange"
    };
    const [visibility, setVisibility]=useState("Private");
    const holdInfo={visibility, setVisibility};
    return <Info.Provider value={holdInfo}><div style={CSS}><Menubar/><OpenedFile/><ChartPageSignInLink/><Chart/><FileList/></div></Info.Provider>;
}