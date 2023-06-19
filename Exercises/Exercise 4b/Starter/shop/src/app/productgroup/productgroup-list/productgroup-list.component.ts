import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductGroup } from 'src/app/entities';
import { ProductgroupService } from 'src/app/services/product-group.service';

@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {
  public productGroups$?: Observable<ProductGroup[]>;

  public selectGroup(pg: ProductGroup):void
  {
    let productGroup: ProductGroup = pg;
    // TODO: 10  Use the Redux store in ProductgroupList
    // send the selected productGroup to the store
    
  }

  public ngOnInit() {
      this.productGroups$ = this.data.productgroups$;
  }

  // TODO: 9 Use the Redux store in ProductgroupList
  // Inject the ngrx Store for IState
  constructor(private data: ProductgroupService) {
  }

  
}
