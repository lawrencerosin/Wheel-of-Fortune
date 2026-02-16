import Key from "./key";
export default function Keyboard({letters, letterSetter, word, spun, spunSetter, cash, cashSetter, picker, player, playerSetter, buyingVowel}){
   function createAlphabet(){
     const alphabet=new Array(26);
     for(let position=0; position<alphabet.length; position++){
        alphabet[position]=String.fromCharCode('a'.charCodeAt(0)+position);
     }
     return alphabet;
   }
   const keys=createAlphabet().map(function(key, position){
          const name="key"+position;
          if(position>0&&position%10==0)
            return <><Key letter={key} key={name}letters={letters} letterSetter={letterSetter} word={word} spun={spun} spunSetter={spunSetter} cash={cash} cashSetter={cashSetter} picker={picker} player={player} playerSetter={playerSetter} buyingVowel={buyingVowel}/><br/></>
          else
            return <Key letter={key} key={name} letters={letters} letterSetter={letterSetter} word={word} spun={spun} spunSetter={spunSetter} cash={cash} cashSetter={cashSetter} picker={picker} player={player} playerSetter={playerSetter} buyingVowel={buyingVowel}/>
   });
   return <div>{keys}</div>
}