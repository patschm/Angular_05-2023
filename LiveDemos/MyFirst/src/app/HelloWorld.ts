import { Component } from "@angular/core";

@Component({
    selector:"hello-world",
    templateUrl:"HelloWrld.html",
    template:`<h1>{{someText}}</h1>`,
    styles:[],
    styleUrls:[],
    providers:[]
})
export class HelloComp {
    public someText: string = "Hello World";

}