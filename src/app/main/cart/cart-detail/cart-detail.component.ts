import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { StorageService } from "src/app/authentication/auth/service/storage.service";
import { Cart } from "../cart.model";
import { SignInUserDialogComponent } from "./components/sign-in-user-dialog/sign-in-user-dialog.component";

@Component({
  templateUrl: "cart-detail.component.html"
})
export class CartDetailComponent { 

  constructor(public cart: Cart, private storageService: StorageService, private router: Router,
    private dialogRef: MatDialog){
  }

  checkIfUserLoggedIn(){

    if(!this.storageService.isLoggedIn()){
      this.dialogRef.open(SignInUserDialogComponent);
    }else {
      this.router.navigateByUrl("/checkout");
    }
  }
}
