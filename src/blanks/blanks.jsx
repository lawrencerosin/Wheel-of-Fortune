import Blank from "./blank";
export default function Blanks({word}){
    function asArray(){
       const letters=[];
       for(let letter of word)
        letters.push(letter)
      return letters;
    }
    const spaces=asArray().map(function(letter, position){
        const name="blank"+position;
        return <Blank key={name}/>
    })
    return <div>{spaces}</div>
}