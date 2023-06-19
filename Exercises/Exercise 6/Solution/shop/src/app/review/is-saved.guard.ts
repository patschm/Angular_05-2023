import { CanDeactivateFn } from '@angular/router';
import { ProductReviewComponent } from './product-review/product-review.component';

// TODO: 3
// Make this class a guard that blocks navigation if the review is not saved.
// Hint: The ProductReviewComponent contains the actual check
export const isSavedGuard: CanDeactivateFn<ProductReviewComponent> = (component:ProductReviewComponent) => {
    return component.canDeactivate();
}
