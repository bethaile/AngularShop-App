import { PRODUCTS } from './products';
import{Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from "./product";
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

    products: Product [];


getProducts():Observable<Product[]> {
return of(PRODUCTS);
}

getProductById(id: number): Observable<Product>{
    return  of(this.products.find(product => product.id == id));
}
}