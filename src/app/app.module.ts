
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ProductService} from './product/product.service';
import {HighlightDirective} from  './product/productList.component';
import {SummaryPipe} from  './product/productList.component';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/productList.component';
import {ProductDetailComponent} from './product/productDetail.component';
import {ProductFormComponent} from './product/product-form.component';
@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ProductDetailComponent,
     HighlightDirective, SummaryPipe,
     ProductFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  // exports: [HighlightDirective],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
