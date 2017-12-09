
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
// import{ProductListComponent} from './productList.componenet';
import { ProductListComponent } from './product/productList.component';


@NgModule({
  declarations: [
    AppComponent, ProductListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
