import Chart from "../chart/chart";
import ChartPageLink from "../links/chart page link";
import Menubar from "../menu/menubar";
import OpenedFile from "../opened file";
export default function KWL(){
    return <><Menubar/><OpenedFile/><ChartPageLink/><Chart/></>;
}