import { Component, OnInit } from '@angular/core';
import { ProductGroup } from 'src/app/entities';

// TODO: 8
// Import the ProductgroupService


@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {
  public productGroups?: ProductGroup[];

  // TODO: 9
  // Inject the ProductgroupService
  constructor() { }

  // TODO: 10
  // Call the productgroups() from the ProductgroupService and
  // assign the result to productGroups
  // Test the app
  ngOnInit(): void {
   
  }
}
