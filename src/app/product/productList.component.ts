import { PRODUCTS } from './products';
import { Product } from "./product";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-list",
  template: `


      <ul class="products">  
      
         <li *ngFor = 'let product of products'
         [class.selected]="product === selectedProduct"
         (click)="onSelect(product)">
         <span class="badge">{{product.id}}: </span> {{product.name}}
         </li>   
      </ul> 

      <product-detail [product] = "selectedProduct"
      (deleteProduct)="delete($event)">
      </product-detail>

    `,
  styles: ['./product.component.css']
})
export class ProductListComponent implements OnInit {
  
  products = PRODUCTS;
  selectedProduct: Product;

  constructor() {}

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  delete(product: Product){
    this.products = this.products.filter(item => item !== product);
  }

  ngOnInit() {}
}
