import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountC } from 'src/app/main/store/model/AccountC';
import { AccountManagementService } from '../../service/account-management.service';

@Component({
  templateUrl: "product-editor.component.html",
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent {

  editing: boolean = false;
  spectating: boolean = false;
  account: AccountC = new AccountC();

  constructor(private accountManagementService: AccountManagementService, 
    private router: Router, activeRoute: ActivatedRoute) {
      
    this.editing = activeRoute.snapshot.params["mode"] == "edit";

    if (this.editing) {
      Object.assign(this.account,
        accountManagementService.getAccount(activeRoute.snapshot.params["id"]));
    }
  }
  save(form: NgForm) {
    this.accountManagementService.saveAccountRequest(this.account);
    this.router.navigateByUrl("/admin/main/accounts");
  }

  get accountTypes(): string[] {
    return this.accountManagementService.getAccountTypes();
  }
}
