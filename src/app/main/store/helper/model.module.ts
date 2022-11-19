import { NgModule } from "@angular/core";
import { AccountManagementService } from "src/app/authentication/admin/service/account-management.service";
import { AccountProfileManagementService } from "src/app/authentication/admin/service/account-profile-management.service";
import { OrderService } from "src/app/authentication/admin/service/order-management.service";
import { AccountRepository } from "src/app/authentication/admin/service/repository/account-repository";
import { OrderRepository } from "src/app/authentication/admin/service/repository/order-repository";
import { AuthService } from "src/app/authentication/auth/service/auth.service";
import { Cart } from "../../cart/cart.model";
import { AccountService } from "../service/account.service";

@NgModule({
 providers: [AccountService, AuthService, Cart, AccountRepository,
     OrderRepository, AccountManagementService, OrderService, AccountProfileManagementService]
})
export class ModelModule { }