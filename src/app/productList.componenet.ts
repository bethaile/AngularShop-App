import { ProductDetailComponent } from './productDetail.component';
import { ProductComponent } from './product/product.component';
import { Component } from '@angular/core';


@Component({
    selector: 'productList-component',
    template: `
    <div style="text-align:left; color:black; border: solid green 2px">
    <ul>  
    
       <li *ngFor = 'let product of productList'
       (click)='selectedProduct = product'>
       {{product.id}}:  {{product.name}} {{product.price}}
       </li>   
    </ul> 

    <product-detail >
    </product-detail>
    
    </div>`
})
export class ProductListComponent {

    p1 = new ProductComponent(1, 400, "iPhone", "Model X");
    p2 = new ProductComponent(2, 800, "iPad", "Model 6S");
    p3 = new ProductComponent(3, 800, "Apple TV", "Model LG");

    productList: ProductComponent[] = [this.p1, this.p2, this.p3];

    selectedProduct: ProductComponent;
}

