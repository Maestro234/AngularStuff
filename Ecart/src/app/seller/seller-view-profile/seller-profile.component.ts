import { Component, Output, EventEmitter } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Seller } from "../../shared/models/seller";
import { SellerProfileUpdateService } from "./seller-profile-update-service";
import { Router, ActivatedRoute } from "@angular/router";
import { SellerSharedService } from "../seller-shared.service";




@Component(
    {
        selector: 'seller-view-profile',
        templateUrl: './seller-profile.component.html'
    }
)
export class SellerProfileComponent implements OnInit {
    seller: Seller;
    updating: string = null;
    sellerToUpdate: Seller;
    errorMessage: string = "";
    successMessage: string = "";

    constructor(private sellerProfileUpdateService: SellerProfileUpdateService,
        private router: Router,
        private route: ActivatedRoute,
        private sharedService: SellerSharedService
    ) { }
    ngOnInit() {
        this.seller = JSON.parse(sessionStorage.getItem("seller"));
        this.sellerToUpdate = this.seller;
        this.sharedService.currentSeller.subscribe(seller => this.seller = seller);
    }

    linkClick(value) {
        this.updating = value;
        this.errorMessage = "";
        this.successMessage = "";
    }

    updateDetail(action: string) {
        this.errorMessage = null;
        this.successMessage = null;
        if (action == "update") {
            this.sellerProfileUpdateService.updateSellerDetails(this.sellerToUpdate).subscribe(
                (response) => {
                    this.successMessage = response;
                    this.seller = this.sellerToUpdate;
                    sessionStorage.setItem("seller", JSON.stringify(this.sellerToUpdate));
                    this.updating = "";

                    this.sharedService.updateSeller(this.sellerToUpdate);

                    // this.notifyParent.emit(this.seller);
                    this.router.navigateByUrl('/sellerHome/profile');
                }, error => this.errorMessage = <any>error

            )
        } else {
            this.updating = "";
        }
    }


}