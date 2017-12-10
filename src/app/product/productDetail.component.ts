import { Product } from "./product";
import { Component, Input } from "@angular/core";
import { PRODUCTS } from "./products";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "product-detail",
  inputs: ["product"],
  template: `


  <div *ngIf="product">
  
   <h2>{{ product.name}} Details</h2>
   <div><span>id: </span>{{product.id}}
        <span>price: </span>{{product.price}}
        <span>description: </span>{{product.description}}
  </div>
   
  
 </div>`,

  styles: ["./product.component.css"]
})
export class ProductDetailComponent implements OnInit {
  products = PRODUCTS;
  product: Product;

  constructor() {}

  ngOnInit() {}

  onSelect(product: Product): void {
    this.product = product;
  }
}
