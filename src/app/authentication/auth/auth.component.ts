import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { StorageService } from './service/storage.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public email: string;
  public password: string;
  public errorMessage: string;

  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(private router: Router, private auth: AuthService, private storageService: StorageService) {
    this.email = "";
    this.password = "";
    this.errorMessage = "";
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.router.navigateByUrl("/admin/main");
    }
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.signin(this.email, this.password).subscribe({
        next: data => {
          this.storageService.saveUser(data);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          //this.router.navigateByUrl("/admin/main");
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }
}
