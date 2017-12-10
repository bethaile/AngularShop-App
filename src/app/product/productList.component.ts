import { PRODUCTS } from './products';
import { Product } from "./product";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  template: `


      <ul class="products">  
      
         <li *ngFor = 'let product of products'
         (click)='selectedProduct = product'>
         {{product.id}}:  {{product.name}} {{product.price}}
         </li>   
      </ul> 

    `,
  styles: ['./product.component.css']
})
export class ProductListComponent implements OnInit {
  
  products = PRODUCTS;

  constructor() {}

  ngOnInit() {}
}
