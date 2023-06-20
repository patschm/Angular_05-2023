import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { StateService } from '../state.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit 
{
  private _data:Person = new Person();

  public get data() : Person
  {
    return this._data;
  }
  public register()
  {
    this.state.setPerson(this._data);
  }

  constructor( private state: StateService) { }

  ngOnInit()
  {
    this.state.person.subscribe(p=>this._data = p);
    this.register();
  }

}
