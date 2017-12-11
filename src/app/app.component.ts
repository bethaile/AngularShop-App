import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div>
      <h1 class="title">
        Welcome to {{title}}!
       
      </h1>
      <app-product-list></app-product-list>
      <app-product-form></app-product-form>
      </div>
    
    
  `,
  styles: []
})
export class AppComponent {
  title = "App Store!";
}
