import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignUpRequest } from 'src/app/authentication/admin/model/SignUpRequest';
import { AuthService } from 'src/app/authentication/auth/service/auth.service';
import { StorageService } from 'src/app/authentication/auth/service/storage.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  user: SignUpRequest = new SignUpRequest();
  public errorMessage: string = "";

  constructor(private auth: AuthService, private dialog: MatDialog, private router: Router, private storageService: StorageService) {
  }

  ngOnInit(): void {
  }

  signUp(form: NgForm) {
    if (form.valid) {
      this.auth.signup(this.user).subscribe({
        next: data => {
        },
        error: err => {
          this.errorMessage = err.error.message;
        }
      });

      if(this.storageService.isLoggedIn()){
        this.router.navigateByUrl("/cart");
        this.dialog.open(ConfirmYourAccountDialog)
      }
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}

@Component({
  templateUrl: './confirm-your-account-dialog.html'
})
export class ConfirmYourAccountDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmYourAccountDialog>, @Inject(MAT_DIALOG_DATA) public data: SignUpRequest){

  }
}
