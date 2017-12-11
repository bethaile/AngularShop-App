
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product/productList.component';
import {ProductDetailComponent} from './product/productDetail.component';
import { ProductAddComponent } from './product/productAdd.component';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ProductDetailComponent, ProductAddComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
