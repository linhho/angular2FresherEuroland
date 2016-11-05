import { Component } from '@angular/core';
import { Category } from './model/category.model';
import { ProductService } from './services/product.service';

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
    providers: [ProductService]
})
export class AppComponent {
    websiteName:string = "Shoes 4u";
    //click show/hide cartbox
    showCart:boolean = false;
    itemInCart() {
        this.showCart = !this.showCart;    
    }
    //
    categories:Category[] = [
        { 
            "id": 1,
            "name": "Nike",
            "url": "nike",
            "image": "nike-logo.png"
        },
        {
            "id": 2,
            "name": "Adidas",
            "url": "adidas",
            "image": "adidas-logo.png"
        },
        {
            "id": 3,
            "name": "Puma",
            "url": "puma",
            "image": "puma-logo.png"
        },
        {
            "id": 4,
            "name": "Converse",
            "url": "converse",
            "image": "converse-logo.png"
        }
    ]
}
