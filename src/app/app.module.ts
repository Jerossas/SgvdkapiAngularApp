import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreComponent } from './main/store/store.component';
import { StoreModule } from './main/store/helper/store.module';
import { CartDetailComponent } from './main/cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from './main/cart/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './main/store/helper/storeFirst.guard';
import { httpInterceptorProviders } from './authentication/auth/helper/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponentComponent } from './main/store/components/signup-component/signup-component.component';
import { AuthComponent } from './authentication/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule,
    RouterModule.forRoot([
      
      { 
        path: "auth", component: AuthComponent,
        canActivate: [StoreFirstGuard] 
      },
      {
        path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "admin",
        loadChildren: () => import("./authentication/admin/helper/admin.module").then(x => x.AdminModule),
        canActivate: [StoreFirstGuard]
      },
      {
        path: "sign-up", component: SignupComponentComponent,
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/store" }
    ]),
    BrowserAnimationsModule],
  providers: [StoreFirstGuard, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
