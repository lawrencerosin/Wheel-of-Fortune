 
 function Blank({letter}){
    const CSS={
        backgroundColor:"white",
        width:"10px",
        height:"30px",
        display:"inline-block",
        marginRight:"20px",
        border:"1px solid blue"
    }
    return <span style={CSS}>{letter}</span>
}
export default function Blanks({ letters}){ 
  
    const blanks=letters.map(function(letter, position){
         const blankName="blank"+position
        return <Blank key={blankName} letter={letter}/>
    });
    return <nav>{blanks}</nav>;
}