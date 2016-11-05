
/**
 * import module needed
 */
import { Component,OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';

/*
* decorator function
*/
@Component({
    selector: 'home-wrapper',
    templateUrl: 'app/home/home.component.html'
})

/**
 * class AppComponent "event controller"
 * @author LinhHo
 */
export class HomeComponent implements OnInit { 
    //variable: type
    errorMessage: string;

    constructor(private _productService: ProductService) {
    }
    //public variable
    products: Product[];
    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }
}
