export default function Complete({spun, modeSetter, letters, oldLettersSetter}){
    const CSS={backgroundColor:"orange"};
    
    function complete(){
      modeSetter("completing");
      oldLettersSetter(letters);
    }
    return <button style={CSS} disabled={spun} onClick={complete}>Complete</button>
}