//For keys
export default class Letter{
    constructor(value){
        this.value=value;
        if(value=='a'||value=='e'||value=='i'||value=='o'||value=='u')
            this.vowel=true;
        else
            this.vowel=false;
        this.used=false;
    }
}