import { Product } from "./product";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PRODUCTS } from "./products";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
  selector: "product-detail",
  inputs: ["product"],
  template: `


  <div *ngIf="product">
   <h2>{{ product.name}} Details</h2>
   <span>id: </span>{{product.id}}
        <span>price: </span>{{product.price}}
        <span>description: </span>{{product.description}}
  
        <button (click)="requestDelete()">delete</button>
 </div>`,

  styles: ["./product.component.css"]
})
export class ProductDetailComponent implements OnInit {
  products = PRODUCTS;

  @Input() product: Product;

  @Output() deleteProduct= new EventEmitter<Product>();
  constructor() {}

  ngOnInit() {}

  onSelect(product: Product): void {
    this.product = product;
  }

  requestDelete(): void {
    this.deleteProduct.emit(this.product);
  }
}
