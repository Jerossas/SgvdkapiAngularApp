import { NgModule } from "@angular/core";
import { AuthService } from "src/app/authentication/auth/service/auth.service";
import { Cart } from "../../cart/cart.model";
import { AccountService } from "../service/account.service";

@NgModule({
 providers: [AccountService, AuthService, Cart]
})
export class ModelModule { }