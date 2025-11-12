
export default function Spin({selection, setSelection}){
    function spin(event){
        event.preventDefault();
        const change=Math.floor(Math.random()*20);
        setSelection((selection+change)%20);
        console.log(selection);
    }
    return <button onClick={spin}>Spin</button>
}