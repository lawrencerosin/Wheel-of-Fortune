 
 export default function Blank({letter}){
    const CSS={
        backgroundColor:"white",
        width:"30px",
        height:"30px",
        display:"inline-block",
        marginRight:"20px",
        border:"1px solid blue"
    }
    return <span style={CSS}>{letter}</span>
}
