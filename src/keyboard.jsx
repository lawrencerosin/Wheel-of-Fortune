function Key({letter}){
    const CSS={
        backgroundColor:"lightgray",
        width:"5px",
        height:"10px",
        marginLeft:"5px"
    }
    return <span style={CSS}>{letter}</span>;
}
export default function Keyboard(){
   const LETTERS=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   const keys=LETTERS.map(function(letter, position){
       const keyName="key"+position;
       //Whether or not to add a line break
       if(position%10==0)
         return <><Key keyName={position}letter={letter}/><br/></>;
       else
        return <Key keyName={position} letter={letter}/>;
   });
   return keys;
}