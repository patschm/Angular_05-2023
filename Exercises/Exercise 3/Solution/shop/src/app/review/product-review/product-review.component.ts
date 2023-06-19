import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from 'src/app/entities';

// TODO: 1
// Import the Input, Output and EventEmitter
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  public reviewForm: FormGroup
  public _review: Review = new Review();
  public submitted = false;

  // TODO: 2
  // Define an input field productID of type number
  @Input()
  public productID: number = 0;
  // TODO: 3
  // Define an output field add of type EventEmitter
  @Output()
  public add: EventEmitter<Review> = new EventEmitter();

  public onSubmit() {
      this.submitted = true;
      Object.assign(this._review, this.reviewForm.value);
      // TODO: 4
      // Fire the output event.
      this.add.emit(this._review);
  }

  constructor(private builder: FormBuilder) { 
    this.reviewForm = this.builder.group({
      "score": ["", [Validators.min(0), Validators.max(5), Validators.required]],
      "author": ["", [Validators.required]],
      "text": ["", [Validators.required]]
    });
  }

  public get review():any {
    let map = new Map();
    for(let x in this.reviewForm.controls)
    {
        map.set(x, this.reviewForm.get(x));
    }
    return Object.fromEntries(map);
  } 

  ngOnInit(): void {
  }
}

