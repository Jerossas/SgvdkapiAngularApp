import { Injectable } from "@angular/core";
import { Account } from "src/app/main/store/model/account/Account";
import { AccountType } from "src/app/main/store/model/account/AccountType";
import { AccountManagementService } from "../account-management.service";

@Injectable()
export class AccountRepository {
  private accounts: Account[] = [];
  private accountTypes: AccountType[] = [];

  constructor(private accountManagementService: AccountManagementService) {
    this.accountManagementService.getAccounts().subscribe(data => {
      this.accounts = data;
    });

    this.accountManagementService.getAccountTypes().subscribe(data => {
      this.accountTypes = data;
    });
  }
  getAccounts(): Account[] {
    return this.accounts;
  }

  getAccount(id: number): Account | undefined {
    return this.accounts.find(a => a.id == id);
  }

  getAccountTypes(): AccountType[] {
    return this.accountTypes;
  }

  saveAccount(account: Account) {
    if (account.id == null || account.id == 0) {
      this.accountManagementService.saveAccount(account)
        .subscribe(a => this.accounts.push(a));
    } else {
      this.accountManagementService.updateAccount(account)
        .subscribe(a => {
          this.accounts.splice(this.accounts.
            findIndex(a => a.id == account.id), 1, account);
        });
    }
  }

  deleteAccount(id: number) {
    this.accountManagementService.deleteAccount(id).subscribe(p => {
      this.accounts.splice(this.accounts.
        findIndex(a => a.id == id), 1);
    })
  }
}