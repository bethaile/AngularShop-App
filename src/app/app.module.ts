
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import{ProductListComponent} from './productList.componenet';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './productDetail.component';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ProductComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
