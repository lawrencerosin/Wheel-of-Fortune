 function asArray(word){
    const letters=[];
    for(let letter of word)
        letters.push(letter);
    return letters;
 }
 function Blank(){
    const CSS={
        backgroundColor:"white",
        width:"5px",
        height:"10px"
    }
    return <span className={CSS}></span>
}
export default function Blanks({word}){
     
    const blanks=asArray(word).map(function(){
        return <Blank/>
    });
    return blanks;
}