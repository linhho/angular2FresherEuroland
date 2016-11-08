
/**
 * import module needed
 */
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

/*
* decorator function
*/
@Component({
    selector: 'category-wrapper',
    templateUrl: 'app/category/category.component.html'
})

/**
 * class AppComponent "event controller"
 * @author LinhHo
 */
export class CategoryComponent implements OnInit {
    //variable: type
    errorMessage: string;
    categoryName: string;
    constructor(private _productService: ProductService,
                private _route: ActivatedRoute) {
    }
    //public variable
    products: Product[];
    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
        //params
        this.categoryName = this._route.snapshot.params['categoryName'];
    }
}
