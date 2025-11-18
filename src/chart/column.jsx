export default function Column({title}){
    const ADD_CSS={
        backgroundColor:"yellow"
    }
     
    const TITLE_CSS={
      
        borderRight:"1px solid black"
    }
    const LIST_CSS={
        border:"1px solid black",
        
    }

    function add(event){
        event.preventDefault();
        const item=document.createElement("li");
        item.contentEditable=true;
        
        event.target.parentElement.insertBefore(item, event.target);
    }
    return <div><h1 style={TITLE_CSS}>{title}</h1><br/><ol style={LIST_CSS}><br/><button style={ADD_CSS} onClick={add}>Add</button></ol></div>;
}