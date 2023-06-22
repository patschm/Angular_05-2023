import { NgModule } from "@angular/core";
import { HelloComp } from "./HelloWorld";
import { BrowserModule } from "@angular/platform-browser";

// class Program
@NgModule({
    declarations:[HelloComp], // Register Components
    exports:[HelloComp], // Make components public
    providers:[],
    bootstrap:[HelloComp],  // void Main()
    imports:[BrowserModule]  // Dependencies to other Angular Modules
})
export class MyLib {}