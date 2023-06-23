import { Component, OnInit } from '@angular/core';
import { ProductGroup } from 'src/app/entities';

// TODO: 8
// Import the ProductgroupService
import { ProductgroupService } from 'src/app/services/product-group.service';

@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {
  public productGroups?: ProductGroup[];

  // TODO: 9
  // Inject the ProductgroupService
  constructor(public dataSvc: ProductgroupService) { }

  // TODO: 10
  // Call the productgroups() from the ProductgroupService and
  // assign the result to productGroups
  // Test the app
  ngOnInit(): void {
    // this.dataSvc.productgroups$
    //   .subscribe(d => this.productGroups = d);
      // .subscribe({
      //   next: r=>this.productGroups = r,
      //   error: err=>console.error(err),
      //   complete:()=>console.log("done")
      // });
      //.subscribe((r:any)=>console.log(r),(err:any)=>console.error(err), ()=>console.log("done"));
  }
}
