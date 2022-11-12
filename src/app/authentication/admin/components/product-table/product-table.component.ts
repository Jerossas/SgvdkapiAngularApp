import { Component, OnInit } from '@angular/core';
import { AccountC } from 'src/app/main/store/model/AccountC';
import { AccountManagementService } from '../../service/account-management.service';

@Component({
  templateUrl: "product-table.component.html",
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  constructor(private accountManagementService: AccountManagementService) { }

  ngOnInit(): void {
  }

  getAccounts(): AccountC[] {
    return this.accountManagementService.getAccounts(null);
  }

  deleteAccount(id: number) {
    this.accountManagementService.deleteAccountRequest(id);
  }
}
