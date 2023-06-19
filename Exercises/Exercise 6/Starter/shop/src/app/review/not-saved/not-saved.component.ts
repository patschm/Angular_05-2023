import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-not-saved',
  templateUrl: './not-saved.component.html',
  styleUrls: ['./not-saved.component.css']
})
export class NotSavedComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
