export class Choice{
    constructor(color, money){
        this.color=color;
        this.money=money;
    }
    static setupChoices(){
        const choices=new Array(20);
        const COLORS=["yellow", "orange", "green", "blue", "red"];
        for(let position=0; position<choices.length; position++){
            choices[position]=new Choice( COLORS[position%COLORS.length], (position+1)*2000);
        }
        return choices;
    }
}
export const choices=Choice.setupChoices();