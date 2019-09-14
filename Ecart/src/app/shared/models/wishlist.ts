import { Product } from './product';

export class Wishlist {
    wishListId: number;
    customerEmailId:string;
    product: Product;
    dateAdded:any;
    successMessage: string;
    errorMessage: string;
}
