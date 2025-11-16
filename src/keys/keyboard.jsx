import Key from "./key";
function isVowel(letter){
    const VOWELS=['a', 'e', 'i', 'o', 'u'];
    for(let vowel of VOWELS)
        if(vowel==letter)
            return true;
    return false;
}
export default function Keyboard(properties){
   const LETTERS=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   const keys=LETTERS.map(function(letter, position){
       const keyName="key"+position;
       //Whether or not to add a line break
       if(position%10==0)
         return <span key={keyName}><Key blank={properties.blank} setBlank={properties.setBlank} vowel={isVowel(letter)} letter={letter} letters={properties.letters} holdLetters={properties.holdLetters} setHoldLetters={properties.setHoldLetters} word={properties.word} potentialIndex={properties.potentialIndex} setLetters={properties.setLetters} setSpinText={properties.setSpinText} setSpun={properties.setSpun} mode={properties.mode} setMode={properties.setMode}/><br/></span>;
       else
        return <Key key={keyName} blank={properties.blank} setBlank={properties.setBlank} letter={letter} setSpun={properties.setSpun} holdLetters={properties.holdLetters} setHoldLetters={properties.setHoldLetters} vowel={isVowel(letter)} letters={properties.letters} potentialIndex={properties.potentialIndex} word={properties.word} setLetters={properties.setLetters} setSpinText={properties.setSpinText} mode={properties.mode} setMode={properties.setMode}/>;
   });
   return <div>{keys}</div>;
}