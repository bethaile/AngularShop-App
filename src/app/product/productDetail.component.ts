import { Product } from "./product";
import { Component, EventEmitter, Input, Output } from "@angular/core";

import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ProductService } from './product.service';

@Component({
  selector: "product-detail",
  inputs: ["product"],
  template: `


  <div myHighlight *ngIf="product">

   <p>{{ product.name}} Details</p>
   <span>id: </span>{{product.id}}
        <span>price: </span>{{product.price}}
        <span>description: </span>{{product.description}}
  
        <button (click)="requestDelete()">Delete</button>
        <button (click)="addToCart(product)">Add to Cart</button>
 </div>`,

  styles: ["./product.component.css"]
})
export class ProductDetailComponent implements OnInit {
  products: Product[];

  @Input() product: Product;

  @Output() deleteProduct= new EventEmitter<Product>();
  @Output() addCart= new EventEmitter<Product>();
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  onSelect(product: Product): void {
    this.product = product;
  }

  requestDelete(): void {
    this.deleteProduct.emit(this.product);
  }
 
  addToCart(product: Product): void {
    this.addCart.emit(this.product);
  }

}
