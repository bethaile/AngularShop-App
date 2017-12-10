import { Product } from "./product";
import { Component, Input } from '@angular/core';
import { PRODUCTS } from "./products";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "product-detail",
  template: `
 
  <ul class="products">  
  
     <li *ngFor = 'let product of products'
     [class.selected] = "product === selectedProduct"
     (click)="onSelect(product)">
     {{product.id}}:  {{product.name}} {{product.price}}
     </li>   
  </ul> 

  <div *ngIf="selectedProduct">
  
   <h2>{{ selectedProduct.name | uppercase }} Details</h2>
   <div><span>id: </span>{{selectedProduct.id}}</div>
   
  
 </div>`,

 styles: ['./product.component.css']


})
export class ProductDetailComponent implements OnInit  {

  products = PRODUCTS;
  selectedProduct: Product;

  constructor() { }
  
   ngOnInit() {
   }
  
   onSelect(product: Product): void {
     this.selectedProduct = product;
   }

}
