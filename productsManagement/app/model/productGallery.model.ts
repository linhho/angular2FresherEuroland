import { ProductGallerySize } from './productGallerySize.model';
export interface ProductGallery {
    color: string,
    image: string,
    size: [ProductGallerySize]
}