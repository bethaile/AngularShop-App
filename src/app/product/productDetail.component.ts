import { Product } from "./product";
import { Component, Input } from '@angular/core';

@Component({
  selector: "product-detail",
  template: `
  <div *ngIf="product">
  
    <h2>{{ product.name | uppercase }} Details</h2>
    <div><span>id: </span>{{product.id}}</div>
    <div><span>name: </span>{{product.name}}</div>
  </div>`
})
export class ProductDetailComponent {
  @Input product: Product;
}
