
import { Component, OnInit, Input } from "@angular/core";


import { SellerViewOrderService } from "./seller-view-order.service";
import { Orders } from "../../shared/models/order";
import { Seller } from "../../shared/models/seller";



@Component({
    selector: 'seller-view-order',
    templateUrl: './seller-view-order.component.html'

})

export class SellerViewOrderComponent {
    errorMessage: string = "";
    successMessage: string = "";
    @Input()

    seller: Seller;
    statusList: string[];
    orderData: Orders[];
    newOrder: Orders;
    displayOrders: boolean;
    updateCheck: boolean = false;


    constructor(private sellerViewOrderService: SellerViewOrderService) {

    }

    ngOnInit() {

        this.seller = JSON.parse(sessionStorage.getItem("seller"));
        this.sellerViewOrderService.getAllOrders(this.seller.emailId)
            .subscribe(response => {
                this.orderData = response
            })

        this.displayOrders = true;
    }
    modifyVariablesOnClick(order: Orders) {
        this.sellerViewOrderService.getAllOrderStatus()
            .subscribe(response => {
                this.statusList = response
            }, error => this.errorMessage = <any>error

            )
        this.newOrder = new Orders();

        this.newOrder.orderId = order.orderId;
        this.newOrder.orderNumber = order.orderNumber;
        this.newOrder.customerEmailId = order.customerEmailId;
        this.newOrder.dateOfOrder = order.dateOfOrder;
        this.newOrder.addressId = order.addressId;
        this.newOrder.productId = order.productId;
        this.newOrder.quantity = order.quantity;
        this.newOrder.totalPrice = order.totalPrice;
        this.newOrder.orderStatus = order.orderStatus;

        this.displayOrders = false
    }
    UpdateStatus(order2: Orders) {

        this.errorMessage = null;
        this.successMessage = null;
        this.sellerViewOrderService.updateOrder(order2.orderId, order2.orderStatus)
            .subscribe(response => {
                this.successMessage = response
                this.displayOrders = true
                for (let order of this.orderData) {
                    if (order.orderId == order2.orderId) {
                        order.orderStatus = order2.orderStatus
                    }
                }
            }, error => this.errorMessage = <any>error

            )
    }


}
