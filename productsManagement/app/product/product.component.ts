
/**
 * import module needed
 */
import { Component } from '@angular/core';
import { Product } from '../model/product.model';

/*
* decorator function
*/
@Component({
    selector: 'product-wrapper',
    templateUrl: 'app/category/category.component.html'
})

/**
 * class AppComponent "event controller"
 * @author LinhHo
 */
export class ProductComponent { 
    //variable: type
    //public variable
    products: Product[] = [
        {
            "id": 1,
            "name": "Nike Free Trainer",
            "url": "nike-free-trainer",
            "thumb": "nikeFreeTrainer.jpg",
            "info": {
                "madein": "Viet Nam",
                "yearProd": 2015,
                "story": "Đây là câu chuyện hình thành của đôi giày này"
            },
            "desc": "abc",
            "gallery": [
                {
                    "color": "black",
                    "image": "nikeFreeTrainer.jpg",
                    "size": [
                        {
                            "sizeUS": 40,
                            "sizeEU": 40,
                            "sizeUK": 40,
                            "quantity": 10
                        },
                        {
                            "sizeUS": 39,
                            "sizeEU": 39,
                            "sizeUK": 39,
                            "quantity": 10
                        }
                    ]
                },
                {
                    "color": "white",
                    "image": "nikeFreeTrainer.jpg",
                    "size": [
                        {
                            "sizeUS": 40,
                            "sizeEU": 40,
                            "sizeUK": 40,
                            "quantity": 20
                        },
                        {
                            "sizeUS": 39,
                            "sizeEU": 39,
                            "sizeUK": 39,
                            "quantity": 10
                        }
                    ]
                }
            ],
            "cost": 1000,
            "quantity": 50,
            "category": {
                "categoryId": 1,
                "categoryName": "Nike"
            }
        }
    ] 

}
