export default function BuyVowel({spun, spunSetter, mode, modeSetter, players, playersSetter, position}){
    const VOWEL_PRICE=250;
    function buyVowel(){
      if(players[position]>=VOWEL_PRICE){
        modeSetter("buying vowel");
        const money=[...players];
        money[position]-=VOWEL_PRICE;
        playersSetter(money);
        spunSetter(true);
      }
    
    }
    const CSS={backgroundColor:"blue"}
    return <button type="button" style={CSS} onClick={buyVowel} disabled={spun}>Buy a Vowel</button>
}