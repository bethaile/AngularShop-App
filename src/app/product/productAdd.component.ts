
import { Product } from "./product";
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: ' ',
    templateUrl: './product-add.component.html'
})

export class ProductAddComponent {
    clickMessage = ' ';
    onClickme(){
        this.clickMessage = "Product Added"
    }
}