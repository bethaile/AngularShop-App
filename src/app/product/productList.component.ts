import { Product } from "./product";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  template: `

  <div style="text-align:left; color:black; border: solid green 2px">
      <ul>  
      
         <li *ngFor = 'let product of products'
         (click)='selectedProduct = product'>
         {{product.id}}:  {{product.name}} {{product.price}}
         </li>   
      </ul> 

      
  </div>

    `,
  styles: []
})
export class ProductListComponent implements OnInit {
  product1: Product = {
    id: 1,
    name: "iPhone"
  };

  product2: Product = {
    id: 2,
    name: "iPad"
  };

  product3: Product = {
    id: 3,
    name: "Apple TV"
  };

  products: Product[] = [this.product1, this.product2, this.product3];

  constructor() {}

  ngOnInit() {}
}
