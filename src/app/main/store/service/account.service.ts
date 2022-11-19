import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AccountViewDto } from '../dto/AccountViewDto';
import { AccountType } from '../model/account/AccountType';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accounts: AccountViewDto[] = [];
  private accountTypes: AccountType[] = [];
  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/api/public/account';

    this.http.get<AccountViewDto[]>(this.apiUrl + '/list').subscribe(
      data => {
        this.accounts = data;
      }
    );

    this.http.get<AccountType[]>(this.apiUrl + '/type/list').subscribe(
      data => {
        this.accountTypes = data;
      }
    );
  }

  getAccounts(type: string | null): AccountViewDto[] {
    return this.accounts
      .filter(a => type == null || type == a.accountType.name);
  }
  getAccount(id: number): AccountViewDto | undefined {
    return this.accounts.find(a => a.id == id);
  }
  getAccountTypes(): string[] {
    return this.accountTypes.map( a => a.name);
  }
}
