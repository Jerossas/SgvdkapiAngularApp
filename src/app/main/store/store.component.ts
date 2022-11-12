import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart/cart.model';
import { AccountViewDto } from './dto/AccountViewDto';
import { AccountType } from './model/AccountType';
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
    private router: Router) { }

  ngOnInit(): void {
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
    this.cart.addLine(account);
    this.router.navigateByUrl("/cart");
  }
}
