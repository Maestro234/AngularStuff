import { Product } from './product';
export class Seller{
     emailId:string;
     name:string;
     password:string;
     phoneNumber:string;
     address:string;
     products:Product[];
     errorMessage:string;
}