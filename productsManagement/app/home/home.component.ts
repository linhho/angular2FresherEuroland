
/**
 * import module needed
 */
import { Component } from '@angular/core';

/*
* decorator function
*/
@Component({
    selector: 'home-wrapper',
    templateUrl: 'app/home/home.component.html'
})

/**
 * class AppComponent "event controller"
 * @author hoangpt
 */
export class HomeComponent { 
    //variable: type
    //public variable
    products: [any] = [
        {
            "id": 1,
            "name": "Nike Hyper Adapt 1.0",
            "thumb": "NikeHyperAdapt1.0.jpg",
            "info": {
                "madein": "Viet Nam",
                "yearProd": 2015,
            },
            "desc": "abc",
            "gallery": [
                {
                    "color": "black",
                    "image": "NikeHyperAdapt1.0.jpg",
                    "size": [
                        {
                            "sizeUS": 40,
                            "sizeEU": 40,
                            "sizeUK": 40,
                        },
                        {
                            "sizeUS": 39,
                            "sizeEU": 39,
                            "sizeUK": 39,
                        }
                    ]
                },
                {
                    "color": "pink",
                    "image": "NikeHyperAdapt1.0.jpg",
                    "size": [
                        {
                            "sizeUS": 40,
                            "sizeEU": 40,
                            "sizeUK": 40,
                        },
                        {
                            "sizeUS": 39,
                            "sizeEU": 39,
                            "sizeUK": 39,
                        }
                    ]
                },
            ],
            "cost": 1000,
            "category": "Nike"
        },
        {
            "id": 2,
            "name": "Nike Lunarepic Flyknit",
            "thumb": "NikeLunarepicFlyknit.jpg",
            "info": {
                "madein": "Viet Nam",
                "yearProd": 2015,
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
                        },
                        {
                            "sizeUS": 39,
                            "sizeEU": 39,
                            "sizeUK": 39,
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
                        },
                        {
                            "sizeUS": 39,
                            "sizeEU": 39,
                            "sizeUK": 39,
                        }
                    ]
                },
            ],
            "cost": 2000,
            "category": "Nike"
        }
    ] 

}
