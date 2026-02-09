import Blank from "./blank";
export default function Blanks({word, letters}){
    function asArray(){
       const letterArray=[];
       for(let letter of letters)
        letterArray.push(letter)
    
      return letterArray;
    }
    
    const spaces=asArray().map(function(letter, position){
        const name="blank"+position;
        return <Blank key={name} letter={letter}/>
    })
    return <div>{spaces}</div>
}