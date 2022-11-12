import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/service/auth.service";
import { StorageService } from "../auth/service/storage.service";
import { EventBusService } from "../auth/shared/event-bus.service";

@Component({
  templateUrl: "admin.component.html"
})
export class AdminComponent {

  eventBusSub?: Subscription;

  constructor(private storageService: StorageService,
    private router: Router, private eventBusService: EventBusService,
    private authService: AuthService) {


    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.signout().subscribe();
    this.storageService.clean();
    this.router.navigateByUrl("/");
  }
}