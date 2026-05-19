export default function BuyVowel(spunSetter, mode, modeSetter, players, playersSetter, position}){
    const VOWEL_PRICE=2000;
    function buyVowel(){
     
        modeSetter("buying vowel");
        const money=[...players];
        money[position]-=VOWEL_PRICE;
        playersSetter(money);
        spunSetter(true);
     
    
    }
    const CSS={backgroundColor:"blue"}
    return <button type="button" style={CSS} onClick={buyVowel} disabled={mode=="spin"||mode==""||player[position]<VOWEL_PRICE}>Buy a Vowel</button>
}