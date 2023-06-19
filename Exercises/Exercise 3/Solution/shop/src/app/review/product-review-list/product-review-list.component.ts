const data = [{productID: 1, score: 5, author: 'Jan Keizer', text: 'This product is great!!!!'},
    {productID: 1, score: 3, author: 'Petra Conner', text: 'Product is meh!'}];

import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/entities';

@Component({
  selector: 'app-product-review-list',
  templateUrl: './product-review-list.component.html',
  styleUrls: ['./product-review-list.component.css']
})
export class ProductReviewListComponent implements OnInit {

  public reviews: Review[] = data;
  public productID = 1;

  // TODO: 5
  // Create the onAdd function which accepts an argument of type Review
  // Push the review on the reviews list
  public onAdd(review: Review) {
      this.reviews.push(review);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
