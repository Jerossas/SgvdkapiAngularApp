import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountProfile } from 'src/app/main/store/model/account/AccountProfile';
import { AccountProfileManagementService } from '../../../service/account-profile-management.service';

@Component({
  selector: 'app-view-account-profile-dialog',
  templateUrl: './view-account-profile-dialog.component.html',
  styleUrls: ['./view-account-profile-dialog.component.css']
})
export class ViewAccountProfileDialogComponent {

  public accountProfiles: AccountProfile[] = [];
  public accountProfile: AccountProfile = new AccountProfile(null, '', '');
  public action: string = "View";

  constructor(public dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public accountId: number, 
  private accountProfileService: AccountProfileManagementService) {
    this.accountProfileService.getAccountProfiles(accountId).subscribe(data => 
      this.accountProfiles = data
    );
  }

  getAccounts(): AccountProfile[] {
    return this.accountProfiles;
  }

  updateAccountProfile(form: NgForm) {
    this.accountProfileService.updateAccountProfile(this.accountId, this.accountProfile.id?this.accountProfile.id:0, this.accountProfile).subscribe(data => {
      this.accountProfile = data
    });
    this.action = 'View';
  }

  saveAccountProfile(form: NgForm) {
    this.accountProfileService.saveAccountProfile(this.accountId, this.accountProfile).subscribe(data => {
      this.accountProfiles.push(data)
    });
    this.action = 'View';
    this.accountProfile = new AccountProfile(null, '', '');
  }

  deleteProfile(id: number){
    this.accountProfileService.deleteAccountProfile(this.accountId, id).subscribe()
    this.accountProfiles.splice(this.accountProfiles.findIndex(ap => ap.id == id), 1);
    this.action = 'View';
  }

  changeAction(action: string, profileId: number){
    this.accountProfiles.filter(ap => ap.id == profileId? this.accountProfile = ap: null);
    if(profileId == 0){
      this.accountProfile = new AccountProfile(null, '', '');
    }
    this.action = action;
  }
}
