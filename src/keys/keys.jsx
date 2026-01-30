import Key from "./key";
export default function Keyboard(){
   function createAlphabet(){
       const alphabet=new Array(26);
       for(let position=0; position<alphabet.length; position++){
          const letter=String.fromCharCode('a'.charCodeAt(0)+position);
          alphabet[position]=letter;
       }
       return alphabet;
   }
   const keys=createAlphabet.map(function(key, position){
      if(position%10==0&&position>0){//Excludes first letter
           return <><Key letter={key}/><br/></>;
      }
      else{
        return <Key letter={key}/>
      }
   })
   return <div>{keys}</div>
}