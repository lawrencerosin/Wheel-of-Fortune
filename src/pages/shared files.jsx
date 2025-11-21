 import {useState, useEffect } from "react";
export default function SharedFiles(){
    let sharedFiles;
    let sharedFileParts=[];
     const[sharedFileList, setSharedFileList]=useState([]);
    async function getShared(){
        sharedFiles=await fetch("http://localhost:9000/sharedCharts");
         
        sharedFileParts=await sharedFiles.json();
         const fileList=sharedFileParts.map(function(part, position){
            const name="file"+position;
            
            return <li key={name}><span>{part.id}</span><span>{part.name}</span></li>
        });
        setSharedFileList(fileList);
    }
    
    useEffect(function(){
        const fileList=sharedFileParts.map(function(part, position){
            const name="file"+position;
            
            return <li key={name}><span>{part.id}</span><span>{part.name}</span></li>
        });
        
    }, [sharedFileParts]);
    return <><button onClick={getShared}>View Shared</button><ul>{sharedFileList}</ul></>;
}
