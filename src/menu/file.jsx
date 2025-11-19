import MenuOption from "./menu option";
import "./menu.css"; 
import {showOrHideMenu, hideMenu} from "./menu";
let kwl;

function reset(){
    for(let position=0; position<kwl.children.length; position++){
         const list=kwl.children[position].children[1];
         while(list.children.length>1)
            list.removeChild(list.children[0]);
    }

}
function add(column, content){
   
        const item=document.createElement("li");
        const box=document.createElement("input");
      //  box.contentEditable=true;
        box.style.width="100px";
         
        box.value=content;
        item.style.border="1px solid black";
        const remove=document.createElement("button");
        remove.textContent="Remove";
        remove.style.backgroundColor="red";
        remove.style.marginLeft="100px";
        remove.addEventListener("click", function(){
            item.parentElement.removeChild(item);
           
        });
        item.appendChild(box);
        item.appendChild(remove);
        const buttons=column.getElementsByTagName("button");
        
        const addButton=buttons[buttons.length-1];//Is the last button
        column.insertBefore( item, addButton);
    }
function getChartContent(){
    kwl=document.getElementById("kwl");
    const chart=new Array(3);
    for(let position1=0; position1<chart.length; position1++){

      const list=kwl.children[position1].children[2].children;
      chart[position1]=new Array(list.length-2);//Excludes button and break
      let cPosition=0;
      for(let position2=0; position2<list.length; position2++){
       
            if(list[position2].tagName=="LI")
               chart[position1][cPosition++]=list[position2].children[0].value;
          
      }
      
  }
  return chart;
}
function write(parts, name){
      //To be put back
     // const oldFile=getChartContent();
       reset();
       const addItem=new Promise(function(success, fail){
          for(let position=0; position<parts.length; position++){
           
            add(kwl.children[position%3].children[1], parts[position]);
          }
          success();
          fail();
        });
        addItem.then(function(){
            sessionStorage.setItem("name", name);
        },
       function(){
          alert("Unable to open file.");
       });
       
      
}
async function open(){
     kwl=document.getElementById("kwl");
    
    const name=prompt("What file do you want to open?");
    const file=await fetch(`http://localhost:9000/open?name=${name}&email=${sessionStorage.getItem("email")}`);
    const fileContent=await file.json();
    console.log(fileContent);
   
    if(fileContent===null)
        alert("You do not have a file named "+name+".");
    else{
          const parts=fileContent["content"].split(",");
        write(parts);
    }
}
async function saveAs(){ 
     kwl=document.getElementById("kwl");
    if(sessionStorage.getItem("email")===null){
        window.location.href="/signIn";
    }
    else{
        const name=prompt("What would you like to name the chart?");
       
        await fetch(`http://localhost:9000/saveAs?email=${sessionStorage.getItem("email")}&name=${name}&content=${getChartContent()}`,
         {  method:"POST"}
        );
    }
}
export default function File(){
   const MENU=[new MenuOption("New", null), new MenuOption("Open", open), new MenuOption("Save", null), 
    new MenuOption("Save As", saveAs)];
     
    const MENU_CSS={display:"none"};
    MENU_CSS["display"]="none";
    const choices=MENU.map(function(choice){
         return <div onClick={choice.action} className="menu-option">{choice.name}</div>;
    });
    return <span onClick={showOrHideMenu}><h3 className="menu-option" >File</h3><span style={MENU_CSS} onClick={hideMenu}>{choices}</span></span>;
}