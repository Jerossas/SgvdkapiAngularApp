import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/main/store/model/account/Account";
import { AccountType } from "src/app/main/store/model/account/AccountType";
import { AccountRepository } from "../../service/repository/account-repository";


@Component({
  templateUrl: "account-editor.component.html"
})
export class AccountEditorComponent {

  editing: boolean = false;
  account: Account = new Account();
  accountTypes: AccountType[] = [];
  currentAccountType: string | undefined = "";

  constructor(
    private repository: AccountRepository,
    private router: Router,
    activeRoute: ActivatedRoute) {

    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    this.accountTypes = repository.getAccountTypes();

    if (this.editing) {
      Object.assign(this.account,
        repository.getAccount(activeRoute.snapshot.params["id"]));
        this.currentAccountType = this.account.accountType?.name;
        console.log(this.account.profiles?.length)
    } else {
      this.currentAccountType = this.accountTypes.at(0)?.name;
      this.account.accountType = this.accountTypes.at(0);
    }
  }
  
  save(form: NgForm) {
    this.repository.saveAccount(this.account);
    this.router.navigateByUrl("/admin/main/accounts");
  }

  update(e: any){
    this.accountTypes.filter(at => at.name == (e.target.value as string)? this.account.accountType = at : null);
  }
}