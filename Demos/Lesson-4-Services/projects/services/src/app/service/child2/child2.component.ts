import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { StateService } from '../state.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit 
{
  private _data:Person = new Person();

  public get data() : Person
  {
    return this._data;
  }
  private register()
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
