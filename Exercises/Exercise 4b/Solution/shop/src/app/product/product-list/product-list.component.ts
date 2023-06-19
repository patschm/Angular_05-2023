import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, tap, switchMap, map, of } from 'rxjs';
import { ProductGroup, Product } from 'src/app/entities';
import { ProductService } from '../../services/product.service';

import { IState } from '../../root-store/root.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy 
{
  public productGroup?: ProductGroup | null;
  public products$?: Observable<Product[]>;

  public ngOnInit() {
    // TODO: 12 Use the Redux store in ProductList
    // Subscribe to changes in the IProductGroupState node.
    // When a changes is detected, read the productgroup from the store
    // and load the corresponding products (products$)
    this.products$ = this.store.select(st=>st.productgroup)
      .pipe(
        tap(state=>this.productGroup = state.currentProductgroup),
        map(state=>state.currentProductgroup.id),
        switchMap(pgid=>this.prods.products(pgid))
      );     
  }
  ngOnDestroy(): void {
    // TODO: 13 Test the application 
  }

  // TODO: 11 Use the Redux store in ProductList
  // Inject the ngrx Store for IState
  constructor(private prods: ProductService, private store: Store<IState>) {
  }
}
