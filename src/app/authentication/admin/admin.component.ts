import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "../auth/service/storage.service";

@Component({
  templateUrl: "admin.component.html"
})
export class AdminComponent {

  constructor(private storageService: StorageService,
    private router: Router) { }

  logout() {
    this.storageService.clean();
    this.router.navigateByUrl("/");
  }
}