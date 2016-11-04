import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <!-- header -->
        <header>
            <div class="nav">
                <a routerLink="/home" >Shopping</a>
                <div id="add-cart_button" (click)="itemInCart()">
                    <img src="images/shopping-cart.svg" alt="add cart">
                </div>
            </div>
            <ul *ngIf="showCart" class="cart-box">
                <li><img src="images/add.png" alt="add"></li>                       
            </ul>
        </header>
        <!-- web content -->
        <div class="container">
            
            <!-- outlet -->
            <router-outlet></router-outlet>
        </div>
        <footer>
            Develop by <a href="http://linhho.net">Linh Hoo</a>
        </footer>
        `
})
export class AppComponent {
    showCart:boolean = false;
    itemInCart() {
        this.showCart = !this.showCart;    
    }
}
