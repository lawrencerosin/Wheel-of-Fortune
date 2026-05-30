export default function Vowel({spinnedSetter, mode, modeSetter, players, playersSetter, position}){
    const NO_VOWEL_MAX=1999;
    function buyAVowel(){
     
        modeSetter("buying vowel");
        const money=[...players];
        money[position]-=VOWEL_PRICE;
        playersSetter(money);
        spinnedSetter(true);
     
    
    }
    const CSS={backgroundColor:"blue"}
    return <button type="button" style={CSS} onClick={buyAVowel} disabled={mode=="spin"||mode==""||NO_VOWEL_MAX>player[position]}>Buy a Vowel</button>
}