import { PipeTransform, Pipe } from '@angular/core';
import { Product } from '../model/product.model';


@Pipe({
    name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {
    transform(products: Product[], searchString: string): Product[] {
        //check null/falsy
        searchString = searchString ? searchString.toLocaleLowerCase() : null;
        if(searchString){
            let productArr = products.filter(
                (product: Product) => {
                    let nameOfProduct = product.name.toLowerCase();
    
                    //ha thien lon | thien -> indexOf() = 3
                    return nameOfProduct.indexOf(searchString) > -1;
                }
            );
            
            return productArr;
        }

        return products;//if no keyword
    }
}