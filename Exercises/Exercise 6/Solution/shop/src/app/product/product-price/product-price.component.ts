import { Price, Product } from 'src/app/entities';
import { Component, OnInit } from '@angular/core';
import { IState, IProductState, productSelect } from 'src/app/root-store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  public prices$?: Observable<Price[]>;

  public ngOnInit() {
    this.prices$ = this.store.select(productSelect)
    .pipe(
      map((st:IProductState)=>st.currentProduct),
      switchMap((prod:Product)=>this.http.prices(prod.id))
    );     
  }
  constructor(private http: ProductService, private store: Store<IState>) {
  }
}
