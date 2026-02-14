function getFirstDigit(number){
    while(number>=10)
        number/=10;
    return number
}
export function setupPickers(){
    const pickers=new Array(16);
    let amount=100;
    for(let position=0; position<pickers.length-2; position++){
        //Goes to the next digit place
        if(getFirstDigit(amount)==8){
            const added=amount/4;
            amount+=added;
        }
        else{
            amount*=2;
        }
        pickers[position]=amount;
    }
   pickers[pickers.length-2]="Lose a Turn";
    pickers[pickers.length-1]="Bankrupt";
    return pickers;
}
export function getPotentialMoney(pickers, position){
   if(typeof pickers[position]=="string")
      return 0;
    else
    return pickers[position];
}
export function addCommas(money){
    const moneyString=money+"";//Converts to string
    let commaMoney="";
    for(let position=moneyString.length-1; position>0; position--){
        commaMoney=moneyString[position]+commaMoney;
        if((moneyString.length-position-1)%3==2)
            commaMoney=","+commaMoney;
    }
    //No comma before the last digit
    commaMoney=moneyString[0]+commaMoney;
    return commaMoney;

}