import { Product, ProductGroup } from 'src/app/entities';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductgroupState, IProductState, IState, productgroupSelect, productSelect } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-general',
  templateUrl: './product-general.component.html',
  styleUrls: ['./product-general.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductGeneralComponent implements OnInit {

  public product$?: Observable<Product>;
  public productGroup$?: Observable<ProductGroup>;

  public ngOnInit() {
      this.product$ = this.store.select(productSelect)
        .pipe(map((ps: IProductState)=>ps.currentProduct));
      this.productGroup$ = this.store.select(productgroupSelect)
        .pipe(map((st:IProductgroupState)=>st.currentProductgroup));
  }
  
  constructor(private store: Store<IState>) {
  }

}
