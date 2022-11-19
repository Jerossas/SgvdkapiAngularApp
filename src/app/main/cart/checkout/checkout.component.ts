import { Component } from "@angular/core";
import { OrderService } from "src/app/authentication/admin/service/order-management.service";
import { StorageService } from "src/app/authentication/auth/service/storage.service";
import { Cart } from "../cart.model";

@Component({
  templateUrl: "checkout.component.html",
  styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {
  orderSent: boolean = false;
  isLoggedIn = false;
  user: any;

  constructor(public orderManagementService: OrderService,
    public cart: Cart, private storageService: StorageService) { 
      if (this.storageService.isLoggedIn()) {
        this.isLoggedIn = true;
        this.user = storageService.getUser();
      }
  }
}
