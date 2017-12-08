import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center ; border: solid red 2px; padding: 6px 30px 6px 6px; margin: 0px 440px 0px 440px">
      <h1 class="title">
        Welcome to {{title | uppercase}}!
       
      </h1>
      <productList-component></productList-component>
      </div>
    
    
  `,
  styles: []
})
export class AppComponent {
  title = 'App Store!';
}
