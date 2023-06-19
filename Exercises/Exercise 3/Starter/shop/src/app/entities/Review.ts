export class Review
{
    public productID : Number;
    public author: String;
    public text:String;
    public score:Number;

    constructor(){
        this.productID = 0;
        this.author = "";
        this.score = 0;
        this.text = "";
    }
}