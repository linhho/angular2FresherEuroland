
/**
 * import module needed
 */
import { Component } from '@angular/core';
import { Product } from '../model/product.model';

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
export class CategoryComponent { 
    //variable: type
    //public variable
    products: Product[] = [
        {
            "id": 2,
            "name": "Nike Lunarepic Flyknit",
            "url": "nike-lunarepic-flyknit",
            "thumb": "NikeLunarepicFlyknit.jpg",
            "info": {
                "madein": "Viet Nam",
                "yearProd": 2015,
                "story": "Đây là câu chuyện hình thành của đôi giày này"
            },
            "desc": "abc",
            "gallery": [
                {
                    "color": "red",
                    "image": "NikeLunarepicFlyknit.jpg",
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
                    "color": "black",
                    "image": "NikeLunarepicFlyknit.jpg",
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
                }
            ],
            "cost": 2000,
            "quantity": 40,
            "category": {
                "categoryId": 1,
                "categoryName": "Nike"
            }
        },
        {
            "id": 3,
            "name": "Nike Hyper Adapt 1.0",
            "url": "nike-hyper-adapt-1-0",
            "thumb": "NikeHyperAdapt1.0.jpg",
            "info": {
                "madein": "Viet Nam",
                "yearProd": 2015,
                "story": "Đây là câu chuyện hình thành của đôi giày này"
            },
            "desc": "abc",
            "gallery": [
                {
                    "color": "red",
                    "image": "NikeHyperAdapt1.0.jpg",
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
                    "color": "black",
                    "image": "NikeHyperAdapt1.0.jpg",
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
                }
            ],
            "cost": 2000,
            "quantity": 40,
            "category": {
                "categoryId": 1,
                "categoryName": "Nike"
            }
        },
        {
            "id": 4,
            "name": "Nike Hyperadapt Angle Front",
            "url": "nike-hyperadapt-angle-front",
            "thumb": "nikeHyperadaptAngleFront.jpg",
            "info": {
                "madein": "Viet Nam",
                "yearProd": 2015,
                "story": "Đây là câu chuyện hình thành của đôi giày này"
            },
            "desc": "abc",
            "gallery": [
                {
                    "color": "red",
                    "image": "nikeHyperadaptAngleFront.jpg",
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
                    "color": "black",
                    "image": "nikeHyperadaptAngleFront.jpg",
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
                }
            ],
            "cost": 2000,
            "quantity": 40,
            "category": {
                "categoryId": 1,
                "categoryName": "Nike"
            }
        }
    ] 

}
