import { Brand } from "./Brand";
import { ProductGroup } from "./ProductGroup";
import { Specification } from "./Specification";

export class Product
{
    public id:number;
    public brand:Brand;
    public name:string;
    public productGroup:ProductGroup;
    public score: number;
    public image:string;  
    public specifications?:Specification[]; 

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