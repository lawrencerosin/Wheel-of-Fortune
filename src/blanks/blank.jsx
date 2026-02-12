export default function Blank({letter}){
    const CSS={
        backgroundColor:"white",
        height:"10px",
        width:"5px",
        paddingRight:"20px",
        marginRight:"25px"
    }
    return <span style={CSS}>{letter}</span>
}