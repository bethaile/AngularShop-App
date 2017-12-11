
import { Product } from "./product";
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-product-form',
    templateUrl: './product-add.component.html'
})

export class ProductAddComponent {
    log(model) {
        console.log(model);
        
    }
}