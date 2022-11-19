import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "../store.component";
import { ModelModule } from "./model.module";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "../../cart/cart-summary/cart-summary.component";
import { CartDetailComponent } from "../../cart/cart-detail/cart-detail.component";
import { CheckoutComponent } from "../../cart/checkout/checkout.component";
import { RouterModule } from "@angular/router";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { SignInUserDialogComponent } from "../../cart/cart-detail/components/sign-in-user-dialog/sign-in-user-dialog.component";
import { ConfirmYourAccountDialog, SignupComponentComponent } from "../components/signup-component/signup-component.component";
import { LoggedInMessageDialogComponent } from "../components/logged-in-message-dialog/logged-in-message-dialog.component";
import { AuthComponent } from "src/app/authentication/auth/auth.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, MatDialogModule],
    declarations: [StoreComponent, CounterDirective, 
        CartSummaryComponent, CartDetailComponent, CheckoutComponent, SignInUserDialogComponent, 
    SignupComponentComponent, LoggedInMessageDialogComponent, AuthComponent, ConfirmYourAccountDialog],
    providers: [{provide: MatDialogRef, useValue: {}}],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent, SignInUserDialogComponent,
    SignupComponentComponent, LoggedInMessageDialogComponent, AuthComponent, ConfirmYourAccountDialog]
})
export class StoreModule { }