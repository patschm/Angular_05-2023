import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from 'src/app/entities';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  // TODO: 2 Declare a field reviewForm of type FormGroup
  public reviewForm: FormGroup
  public _review: Review = new Review();
  public submitted = false;

  public onSubmit() {
      this.submitted = true;
      // TODO: 4 Assign values from reviewForm to _review.
      Object.assign(this._review, this.reviewForm.value);
      console.log(this._review);
  }
  // TODO: 3 Inject the FormBuilder and build the reviewForm with the fields:
  //         - score (min:0, max:5, required)
  //         - author (required)
  //         - text (required)
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

