import Blank from "./blank";
export default function Blanks({word, letters}){
 
    
    const spaces=word.split("").map(function(letter, position){
        const name="blank"+position;
        if(letters[position]===undefined)
            return <Blank key={name} letter=""/>
        else
            return <Blank key={name} letter={letter}/>
    })
    return <div>{spaces}</div>
}