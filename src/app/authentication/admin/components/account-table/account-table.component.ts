import { Component } from '@angular/core';
import { Account } from 'src/app/main/store/model/account/Account';
import { AccountRepository } from '../../service/repository/account-repository';
import { MatDialog } from "@angular/material/dialog";
import { ViewAccountDialogComponent } from './view-account-dialog/view-account-dialog.component';

@Component({
  templateUrl: "./account-table.component.html",
  styleUrls: ['./account-table.component.css']
})
export class AccountTableComponent {

  account: Account = new Account();

  constructor(private accountRepository: AccountRepository, public dialogRef: MatDialog) { }

  getAccounts(): Account[] {
    return this.accountRepository.getAccounts();
  }

  deleteAccount(id: number) {
    this.accountRepository.deleteAccount(id);
  }

  openDialog(id: number): void {
    this.getAccounts().filter(a => a.id == id? this.account = a : null);
    this.dialogRef.open(ViewAccountDialogComponent, {
      data: this.account
    });
  }
}
