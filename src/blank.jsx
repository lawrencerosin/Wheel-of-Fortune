 
 function Blank({letter}){
    const CSS={
        backgroundColor:"white",
        width:"20px",
        height:"30px",
        display:"inline-block",
        marginRight:"20px"
    }
    return <span style={CSS}>{letter}</span>
}
export default function Blanks({ letters}){ 
    console.log(letters.length);
    const blanks=letters.map(function(letter){
         
        return <Blank letter={letter}/>
    });
    return <nav>{blanks}</nav>;
}