 
export default function Column({title}){
     const TITLE_CSS={
      
        borderRight:"1px solid black",
        textAlign:"center"
    }
    const LIST_CSS={
        border:"1px solid black"
        
    }
  
 
    return <div><h1 style={TITLE_CSS}>{title}</h1><ol style={LIST_CSS}><br/></ol></div>;
}