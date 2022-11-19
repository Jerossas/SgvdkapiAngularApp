import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/authentication/auth/service/storage.service';
import { Cart } from '../cart/cart.model';
import { LoggedInMessageDialogComponent } from './components/logged-in-message-dialog/logged-in-message-dialog.component';
import { AccountViewDto } from './dto/AccountViewDto';
import { AccountService } from './service/account.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedType: string | null = null;
  public accountsPerPage = 4;
  public selectedPage = 1;

  constructor(private accountService: AccountService, private cart: Cart,
    private router: Router, private storageService: StorageService, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.dialog.open(LoggedInMessageDialogComponent)
    }
  }

  get accounts(): AccountViewDto[] {
    let pageIndex = (this.selectedPage - 1) * this.accountsPerPage
    return this.accountService.getAccounts(this.selectedType)
      .slice(pageIndex, pageIndex + this.accountsPerPage);
  }

  get accountTypes(): string[] {
    return this.accountService.getAccountTypes();
  }

  changeType(newType: string | null) {
    this.selectedType = newType;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.accountsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.accountService
      .getAccounts(this.selectedType).length / this.accountsPerPage)
  }

  addAccountToCart(account: AccountViewDto) {
    this.cart.addOrderDetail(account, 1, `${account.accountType} acccount`);
    this.router.navigateByUrl("/cart");
  }
}
