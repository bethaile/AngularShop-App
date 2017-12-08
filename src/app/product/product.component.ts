import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <p>
      product works!
    </p>`,
  styles: []
})
export class ProductComponent implements OnInit {

  id: number;
  price: number;
  name: string;
  description: string;

  constructor(id: number, price: number, name: string, description: string) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.description = description;
  }
  
  ngOnInit() {
  }

}
