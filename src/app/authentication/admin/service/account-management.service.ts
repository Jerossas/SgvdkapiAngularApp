import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Account } from 'src/app/main/store/model/account/Account';
import { AccountType } from 'src/app/main/store/model/account/AccountType';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/api/admin/management/account/';
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl + 'list');
  }

  getAccountTypes(): Observable<AccountType[]> {
    return this.http.get<AccountType[]>(this.apiUrl + "type/list");
  }

  saveAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl + "create", account);
  }

  updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(this.apiUrl + "update/" + account.id, account);
  }

  deleteAccount(id: number): Observable<Account> {
    return this.http.delete<Account>(this.apiUrl + "delete/" + id);
  }
}
