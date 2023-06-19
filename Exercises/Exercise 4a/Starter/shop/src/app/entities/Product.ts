import { Brand } from "./Brand";
import { ProductGroup } from "./ProductGroup";

export class Product
{
    public id:Number;
    public brand:Brand;
    public name:String;
    public productGroup:ProductGroup;
    public score: Number;
    public image:String;   

    constructor()
    {
        this.id = 0;
        this.brand = new Brand();
        this.image = "";
        this.name = "";
        this.productGroup = new ProductGroup();
        this.score = 0;
    }
}