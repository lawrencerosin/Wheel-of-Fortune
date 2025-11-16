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
         return <span key={keyName}><Key  vowel={isVowel(letter)} letter={letter} letters={properties.letters} word={properties.word} potentialIndex={properties.potentialIndex} setLetters={properties.setLetters} setSpinText={properties.setSpinText}/><br/></span>;
       else
        return <Key key={keyName} letter={letter} vowel={isVowel(letter)} letters={properties.letters} potentialIndex={properties.potentialIndex} word={properties.word} setLetters={properties.setLetters} setSpinText={properties.setSpinText}/>;
   });
   return <div>{keys}</div>;
}