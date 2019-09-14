import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../shared/models/product';
import { SellerAddProductService } from './seller-add-product.service';
import { Seller } from '../../shared/models/seller';
//import { ViewOrderService } from '../viewOrder.service';

@Component({
  selector: 'add-product',
  templateUrl: './seller-add-products.component.html'
})
export class SellerAddProductsComponent implements OnInit {
  productToAdd: any;
  errorMessage: string = "";
  productCategoryList: String[];
  addNewproduct: Product;
  productAddForm: FormGroup;
  seller: Seller;
  message: string = "";
  ngOnInit() {
    this.addNewproduct = new Product();
    this.seller = JSON.parse(sessionStorage.getItem("seller"));
    this.addProductService.getProductCategories()
      .subscribe(productCategoryList => {
        this.productCategoryList = productCategoryList
      })
    // .catch(product =>{
    //   this.errorMessage = product.errorMessage;
    // })
  }

  constructor(private fb: FormBuilder, private addProductService: SellerAddProductService) {
    this.createForm();
  }

  createForm() {
    this.productAddForm = this.fb.group({
      description: new FormControl("", Validators.required), //Line 1    
      name: ["", Validators.required],
      category: ["", Validators.required],
      brand: ["", Validators.required],
      price: ["", Validators.required],
      quantity: ["", Validators.required],
      discount: ["", Validators.required] //Line 2    
    });
  }

  AddProduct() {

    this.message = null;
    let productToAdd: Product = this.productAddForm.value as Product; //Line 1
    this.addProductService.addProduct(this.productAddForm.value, this.seller.emailId) //Line 2
      .subscribe((response) => {
        this.message = response
        let productId: number
        productId = +(this.message.split(":")[1])
        productToAdd.productId = productId
        let productList: Product[] = JSON.parse(sessionStorage.getItem("sellerProducts"))
        productList.push(productToAdd)
        sessionStorage.setItem("sellerProducts", JSON.stringify(productList));
      }) 
      error => this.errorMessage = <any>error

  }
}
