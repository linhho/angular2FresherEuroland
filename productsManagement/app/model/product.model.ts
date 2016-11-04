import { ProductInfo } from './productInfo.model';
import { ProductGallery } from './productGallery.model';
import { ProductCategory } from './productCategory.model';

export interface Product {
            id: number,
            name: string,
            thumb: string,
            info: ProductInfo,
            desc: string,
            gallery: [ProductGallery],
            cost: number,
            quantity: number,
            category: ProductCategory
    
}