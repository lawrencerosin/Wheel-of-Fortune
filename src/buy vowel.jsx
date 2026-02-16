export default function BuyVowel({spun, spunSetter, buyingVowelSetter, players, playersSetter, position}){
    function buyVowel(){
       buyingVowelSetter(true);
       const money=[...players];
       money[position]-=2000;
       playersSetter(money);
       spunSetter(true);
    
    }
    const CSS={backgroundColor:"blue"}
    return <button type="button" style={CSS} onClick={buyVowel} disabled={spun||players[position]<2000}>Buy a Vowel</button>
}