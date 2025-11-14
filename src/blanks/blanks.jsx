import Blank from "./blank";
export default function Blanks({ letters}){ 
  console.log(letters.length);
    const blanks=letters.map(function(letter, position){
         const blankName="blank"+position
        return <Blank key={blankName} letter={letter}/>
    });
    return <nav>{blanks}</nav>;
}