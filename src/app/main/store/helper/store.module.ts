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

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, 
        CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }