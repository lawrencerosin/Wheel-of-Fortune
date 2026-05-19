export default function Vowel(spunSetter, mode, modeSetter, players, playersSetter, position}){
    const NO_VOWEL_MAX=1999;
    function buyVowel(){
     
        modeSetter("buying vowel");
        const money=[...players];
        money[position]-=VOWEL_PRICE;
        playersSetter(money);
        spunSetter(true);
     
    
    }
    const CSS={backgroundColor:"blue"}
    return <button type="button" style={CSS} onClick={buyVowel} disabled={mode=="spin"||mode==""||NO_VOWEL_MAX>player[position]}>Buy a Vowel</button>
}