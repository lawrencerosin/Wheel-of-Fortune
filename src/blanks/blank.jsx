export default function Blank({letter}){
    const CSS={
        backgroundColor:"white",
        height:"10px",
        width:"5px",
        paddingRight:"25px",
        marginRight:"20px"
    }
    return <span style={CSS}>{letter}</span>
}