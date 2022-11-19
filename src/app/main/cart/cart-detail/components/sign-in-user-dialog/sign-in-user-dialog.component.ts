import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth/service/auth.service';
import { StorageService } from 'src/app/authentication/auth/service/storage.service';

@Component({
  selector: 'app-sign-in-user-dialog',
  templateUrl: './sign-in-user-dialog.component.html',
  styleUrls: ['./sign-in-user-dialog.component.css']
})
export class SignInUserDialogComponent implements OnInit {

  public email: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService, private storageService: StorageService,
    private dialogRef: DialogRef) { 
    this.email = "";
    this.password = "";
    this.errorMessage = "";
  }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

  goToSignUpComponent(){
    this.dialogRef.close();
    this.router.navigateByUrl("/sign-up")
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.signin(this.email, this.password).subscribe({
        next: data => {
          this.storageService.saveUser(data);
          this.router.navigateByUrl("/checkout");
          this.dialogRef.close();
        },
        error: err => {
          this.errorMessage = err.error.message;
        }
      });
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
