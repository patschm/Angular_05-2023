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

  public onAdd(review: Review) {
      this.reviews.push(review);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
