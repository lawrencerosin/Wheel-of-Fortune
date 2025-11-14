 
export default function Spin({selection, setSelection}){
    function spin(event){
        event.preventDefault();
        const change=Math.floor(Math.random()*20);
        setSelection((selection+change)%20);
        
    }
    const CSS={
        backgroundColor:"yellow"
    }
    return <button style={CSS} onClick={spin}>Spin</button>
}