const data: ProductGroup[] = [{'id': 1, 'name': 'Laptops en notebooks', 'image': 'laptops_en_notebooks.png'},
{'id': 6, 'name': 'DVD-spelers', 'image': 'dvd_spelers.png'},
{'id': 2, 'name': 'PDA\'s en palmtops', 'image': 'pda_s_en_palmtops.png'},
{'id': 8, 'name': 'Digitale Camera\'s', 'image': 'digitale_camera_s.png'},
{'id': 13, 'name': 'Scanners', 'image': 'scanners.png'},
{'id': 14, 'name': 'Inkjet-printers', 'image': 'inkjet_printers.png'},
{'id': 15, 'name': 'Monitors', 'image': 'monitors.png'},
{'id': 10, 'name': 'Beamers en projectoren', 'image': 'beamers_en_projectoren.png'},
{'id': 7, 'name': 'Spiegelreflex Camera\'s', 'image': 'spiegelreflex_camera_s.png'},
{'id': 22, 'name': 'Huistelefoons', 'image': 'huistelefoons.png'},
{'id': 16, 'name': 'Draadloze routers', 'image': 'draadloze_routers.png'},
{'id': 23, 'name': 'PC', 'image': 'pc.png'},
{'id': 12, 'name': 'MP3-spelers', 'image': 'mp3_spelers.png'},
{'id': 24, 'name': 'Laserprinters', 'image': 'laserprinters.png'}];

import { Component, OnInit } from '@angular/core';
import { ProductGroup } from 'src/app/entities';

// TODO: 1
// Create the ProductgroupListComponent
//      - Field: productGroups of type ProductGroup array. Initialize it with data above
// Tag name should be: <app-productgroup-list>
// Use productgroup-list.component.html as view
// add a css style for img { width:200px; height:200px; }
@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {
  public productGroups: ProductGroup[] = data;

  constructor() { }

  ngOnInit(): void {
  }
}
