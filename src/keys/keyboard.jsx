import Key from "./key";
export default function Keyboard({letters, setter, word}){
   function createAlphabet(){
     const alphabet=new Array(26);
     for(let position=0; position<alphabet.length; position++){
        alphabet[position]=String.fromCharCode('a'.charCodeAt(0)+position);
     }
     return alphabet;
   }
   const keys=createAlphabet().map(function(key, position){
          if(position>0&&position%10==0)
            return <><Key letter={key} letters={letters} setter={setter} word={word}/><br/></>
          else
            return <Key letter={key} letters={letters} setter={setter} word={word}/>
   });
   return <div>{keys}</div>
}