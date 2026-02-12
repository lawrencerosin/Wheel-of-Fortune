import Key from "./key";
export default function Keyboard({letters, letterSetter, word, spun, spunSetter, cash, cashSetter, money, player, playerSetter}){
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
            return <><Key letter={key} key={name}letters={letters} letterSetter={letterSetter} word={word} spun={spun} spunSetter={spunSetter} cash={cash} cashSetter={cashSetter} money={money} player={player} playerSetter={playerSetter}/><br/></>
          else
            return <Key letter={key} key={name} letters={letters} letterSetter={letterSetter} word={word} spun={spun} spunSetter={spunSetter} cash={cash} cashSetter={cashSetter} money={money} player={player} playerSetter={playerSetter}/>
   });
   return <div>{keys}</div>
}