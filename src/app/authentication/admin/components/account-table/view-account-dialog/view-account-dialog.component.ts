import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Account } from 'src/app/main/store/model/account/Account';
import { ViewAccountProfileDialogComponent } from '../view-account-profile-dialog/view-account-profile-dialog.component';

@Component({
  selector: 'app-view-account-dialog',
  templateUrl: './view-account-dialog.component.html',
  styleUrls: ['./view-account-dialog.component.css']
})
export class ViewAccountDialogComponent {

  constructor(public dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public account: Account,
  public dialog: MatDialog) { }

  openDialog(accountId: number){
    this.dialog.open(ViewAccountProfileDialogComponent, {
      data: accountId
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
