import { Component,OnInit } from '@angular/core';
import { Category } from './model/category.model';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { CategoryComponent } from './category/category.component';

@Component({
    selector: 'my-app',
    template: `
        <!-- header -->
        <header>
            <div class="nav">
                <a routerLink="/home" >{{websiteName}}</a>
                <div id="add-cart_button" (click)="itemInCart()">
                    <img src="images/shopping-cart.svg" alt="add cart">
                </div>
            </div>
            <ul *ngIf="showCart" class="cart-box">
                <li><img src="images/add.png" alt="add"></li>                       
            </ul>
        </header>
        <!--categories-->
        <ul class="categories">
            <li *ngFor="let category of categories"><a routerLink="/category/{{category.url}}"><img src="images/{{category.image}}" alt="{{category.name}}"></a></li>
        </ul>
        <!-- web content -->
        <div class="container">
            <!-- outlet -->
            <router-outlet></router-outlet>
        </div>
        <footer>
            Develop by <a href="http://linhho.net">Linh Hoo</a>
        </footer>
        `,
    providers: [ProductService, CategoryService]
})
export class AppComponent implements OnInit {
    errorMessage: string;
    websiteName:string = "Shoes 4u";
    //click show/hide cartbox
    showCart:boolean = false;
    itemInCart() {
        this.showCart = !this.showCart;    
    }
    //
     constructor(private _categoryService: CategoryService) {
    }
    categories:Category[];
    ngOnInit(): void {
        this._categoryService.getCategories()
                .subscribe(categories => this.categories = categories,
                           error => this.errorMessage = <any>error);
    }
}
