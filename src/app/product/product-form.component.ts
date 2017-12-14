import { Product } from "./product";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit {

brands = ['S1', 'S2', 'S3', 'S4'];

@Input() product: Product;

  model = new Product(18, 'Samsung', this.brands[0], 1000, 'Samsung all the Fire');

  @Output() addProduct= new EventEmitter<Product>();
  constructor() {}

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // newProduct() {
  //   this.model = new Product(42, ' ', ' ', 100 , ' ');
  // }


  addNewProduct(): void {
    this.addProduct.emit(this.product);
  }
  ngOnInit() {}

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
