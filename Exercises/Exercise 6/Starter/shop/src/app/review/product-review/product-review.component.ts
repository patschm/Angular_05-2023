import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, Review } from 'src/app/entities';
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services';
import { IProductState, IState, productSelect } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { from, map, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NotSavedComponent } from '../not-saved/not-saved.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit, OnDestroy {
  private subs? : Subscription;
  public reviewForm: FormGroup
  public _review: Review = new Review();
  public submitted = false;


  public canDeactivate(): Observable<boolean> | boolean {
    if (this.reviewForm.invalid)
    {
      let ref = this.modal.open(NotSavedComponent);
    return from(ref.result);
    }
    return this.reviewForm.valid;
  }  

  @Input()
  public productID: number = 0;

  @Output()
  public add: EventEmitter<Review> = new EventEmitter();

  public onSubmit() {
    this.submitted = true;
    Object.assign(this._review, this.reviewForm.value);
    this._review.productID = this.productID;
    this.add.emit(this._review);
    this.prodSvc.addReview(this._review)
      .subscribe(()=>this.router.navigate(['../reviews'], {relativeTo:this.route}));
  }

  constructor(
    private builder: FormBuilder, 
    private prodSvc: ProductService, 
    private store: Store<IState>, 
    private router:Router,
    private modal: NgbModal,
    private route:ActivatedRoute) 
    { 
      this.reviewForm = this.builder.group({
        "score": ["", [Validators.min(0), Validators.max(5), Validators.required]],
        "author": ["", [Validators.required]],
        "text": ["", [Validators.required]]
      });
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
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
    this.subs = this.store.select(productSelect)
      .pipe(
        map((state:IProductState)=>state.currentProduct)        
      )
      .subscribe((prod:Product)=>{
        this.productID = prod.id;
      });
    
  }
}

