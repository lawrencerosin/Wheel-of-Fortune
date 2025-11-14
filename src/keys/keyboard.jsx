import Key from "./key";
function isVowel(letter){
    const VOWELS=['a', 'e', 'i', 'o', 'u'];
    for(let vowel of VOWELS)
        if(vowel==letter)
            return true;
    return false;
}
export default function Keyboard({letters, setLetters, word, potentialIndex}){
   const LETTERS=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   const keys=LETTERS.map(function(letter, position){
       const keyName="key"+position;
       //Whether or not to add a line break
       if(position%10==0)
         return <><Key key={keyName} vowel={isVowel(letter)} letter={letter} letters={letters} word={word} potentialIndex={potentialIndex} setLetters={setLetters}/><br/></>;
       else
        return <Key key={keyName} letter={letter} vowel={isVowel(letter)} letters={letters} potentialIndex={potentialIndex} word={word} setLetters={setLetters}/>;
   });
   return <div>{keys}</div>;
}