import { Product } from "./product";

export class Cart{
    cartId:number;
	customerEmailId:string;
	product:Product;
	quantity:number;
	errorMessage:string; 
	successMessage:string;
}