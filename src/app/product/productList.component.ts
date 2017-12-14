import { ProductService } from "./product.service";
import { Product } from "./product";
import { ProductFormComponent} from './product-form.component';
import { Component, OnInit, Input, HostListener, Output, EventEmitter } from "@angular/core";
import { Directive, ElementRef } from "@angular/core";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "app-product-list",

  template: `


      <ul  class="products">  
      
         <li *ngFor = 'let product of products'
         [class.selected]="product === selectedProduct"
         (click)="onSelect(product)">
         <p [myHighlight]="color" defaultColor="violet "> <span  class="badge">{{product.id}} </span> {{product.name | uppercase }} </p>
        
         </li>   
      </ul> 
      <button type="button" class="btn btn-default" (click)="addNewProduct()">New Product</button>

     

   <product-detail [product] = "selectedProduct"
      (deleteProduct)="delete($event)"> 
    <product-detail [product] = "selectedProduct"
      (addToCart)="add($event)">
      </product-detail>

    



    `,
  styles: ["./product.component.css"]
})
export class ProductListComponent implements OnInit {
  selectedProduct: Product;
  products: Product[];
  color = "yellow";
  // @Input() product: Product;
  @Input()product = new Product(42, ' ', ' ', 100 , ' ');

  constructor(private productService: ProductService) {}

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe(products => (this.products = products));
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  delete(product: Product) {
    this.products = this.products.filter(item => item !== product);
  }

  add(product: Product) {
    
  }

  ngOnInit() {
    this.getProducts();
  }


  @Output() addProduct= new EventEmitter<Product>();
  // constructor() {}

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
}

@Directive({ selector: "[myHighlight]" })
export class HighlightDirective {
  @Input("myHighlight") highlightColor: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {}
  @HostListener("mouseenter")
  onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || "red");
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}

@Pipe({
  name: "summary"
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }
    limit = limit ? limit : 50;
    return value.substr(0, limit) + "...";
  }
}
