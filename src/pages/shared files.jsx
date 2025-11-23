 import Chart from "../chart/chart";
 import {useState} from "react";
export default function SharedFiles(){
    let sharedFiles;
    let sharedFileParts=[];
     const[sharedFileList, setSharedFileList]=useState([]);
   
    async function getShared(){
        sharedFiles=await fetch("http://localhost:9000/sharedCharts");
        
        sharedFileParts=await sharedFiles.json();
         const fileList=sharedFileParts.map(function(part, position){
            const name="file"+position;
            const ID_CSS={display:"none"};
            async function viewFile(){
                 const chart=await fetch("http://localhost:9000/viewChart/"+part._id);
                 const chartParts=await chart.json();
                 console.log(chartParts);
           }
            return <li key={name} ><span style={ID_CSS}>{part._id}</span><span onClick={viewFile}>{part.name}</span></li>
        });
        setSharedFileList(fileList);
    }
    
    getShared();
    return <><ul>{sharedFileList}</ul><Chart/></>;
}
