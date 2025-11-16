export class Choice{
    constructor(color, money){
        this.color=color;
        this.money=money;
    }
    choiceToDisplayedValue(){
        if(this.money<0)
            return "Bankrupt";
        else if(this.money==0)
            return "Lose a Turn";
        else
            return this.money;
    }
    static setupChoices(){
        const choices=new Array(20);
        const COLORS=["yellow", "orange", "green", "blue", "red"];
        for(let position=0; position<choices.length; position++){
            choices[position]=new Choice( COLORS[position%COLORS.length], (position-1)*100);
        }
        return choices;
    }
}
export const choices=Choice.setupChoices();