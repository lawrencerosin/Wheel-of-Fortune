 import {useState} from "react";
 import Menu from "./menu";
export default function Visibilities(){
   const [visibility, setVisibility]=useState("Private");
   function changeVisibility(event){
      setVisibility(event.target.textContent);
      event.target.style.backgroundColor="white";
      for(let current=event.target.previousElementSibling; current!==null; current=current.previousElementSibling)
        current.style.backgroundColor="lightgreen";
      for(let current=event.target.nextElementSibling; current!==null; current=current.nextElementSibling)
        current.style.backgroundColor="lightgreen";
      
   }
   const VISIBILITIES=["Private", "Shared", "Public"];
   const choices=VISIBILITIES.map(function(choice, position){
        const SELECTED={
          backgroundColor:"white"
        };
        const NOT_SELECTED={
          backgroundColor:"lightgreen"
        };
        if(position==0)
          return <div className="visibility-menu-option menu-option" onClick={changeVisibility} style={SELECTED}>{choice}</div>;
        else
          return <div className="visibility-menu-option menu-option" onClick={changeVisibility} style={NOT_SELECTED}>{choice}</div>
   });
   return <Menu name="Visibility" menuClass="visibility-menu-option">{choices}</Menu>
}