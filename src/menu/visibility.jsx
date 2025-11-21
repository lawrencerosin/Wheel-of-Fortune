 
 import Menu from "./menu";
 export let visibility="Private";
export default function Visibilities(){
    
   function changeVisibility(event){
      visibility=event.target.textContent;
      event.target.style.backgroundColor="white";
      for(let current=event.target.previousElementSibling; current!==null; current=current.previousElementSibling)
        current.style.backgroundColor="lightgreen";
      for(let current=event.target.nextElementSibling; current!==null; current=current.nextElementSibling)
        current.style.backgroundColor="lightgreen";
      
   }
   const VISIBILITIES=["Private", "Shared", "Public"];
   const VISIBILITY_CSS={
     color:"white"
   }
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
   return <><Menu name="Visibility" menuClass="visibility-menu-option">{choices}</Menu><h1 style={VISIBILITY_CSS}>{visibility}</h1></>;
}