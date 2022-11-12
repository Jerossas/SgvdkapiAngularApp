import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from "@angular/router";
import { StorageService } from "../service/storage.service";

@Injectable()
export class AuthGuard {
  constructor(private router: Router, private storageService: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.storageService.isLoggedIn) {
      this.router.navigateByUrl("/admin/auth");
      return false;
    }
    return true;
  }
}