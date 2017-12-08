import { ProductComponent } from './product/product.component';
import { Component } from '@angular/core';



@Component({
  selector: "product-detail",
  template: `
    <span *ngIf="product">
    {{product.description}}
    </span>`
})
export class ProductDetailComponent {
  // ...
  product: ProductComponent;
}
