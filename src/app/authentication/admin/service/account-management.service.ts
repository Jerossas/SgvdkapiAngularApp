import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AccountType } from 'src/app/main/store/model/AccountType';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AccountProfile } from 'src/app/main/store/model/AccountProfile';
import { AccountC } from 'src/app/main/store/model/AccountC';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  private accounts: AccountC[] = [];
  private accountTypes: AccountType[] = [];
  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/api/admin/account/';

    this.http.get<AccountC[]>(this.apiUrl + 'list').subscribe(
      data => {
        this.accounts = data;
      }
    );

    this.http.get<AccountType[]>(this.apiUrl + 'type/list').subscribe(
      data => {
        this.accountTypes = data;
      }
    );
  }

  // Accounts

  getAccounts(type: string | null): AccountC[] {
    return this.accounts
      .filter(a => type == null || type == a.accountType?.name);
  }
  getAccount(id: number): AccountC | undefined {
    return this.accounts.find(a => a.id == id);
  }
  getAccountTypes(): string[] {
    return this.accountTypes.map( a => a.name);
  }

  saveAccount(account: AccountC): Observable<AccountC> {
    return this.http.post<AccountC>(this.apiUrl + 'create', account );
  }

  updateAccount(account: AccountC): Observable<AccountC> {
    return this.http.put<AccountC>(`${this.apiUrl}update/${account.id}`, account);
  }

  deleteAccount(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.apiUrl}delete/${id}`);
  }

  getImage(fileName: string): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}image/${fileName}`);
  }

  // profiles

  getAccountProfiles(accountId: number): Observable<AccountProfile[]> {
    return this.http.get<AccountProfile[]>(`${this.apiUrl}${accountId}/profile/list`);
  }

  getAccountProfile(accountId: number, profileId: number): Observable<AccountProfile> {
    return this.http.get<AccountProfile>(`${this.apiUrl}${accountId}/profile/get/${profileId}`)
  }

  saveAccountProfile(accountId: number, profile: AccountProfile): Observable<AccountProfile> {
    return this.http.post<AccountProfile>(`${this.apiUrl}${accountId}/profile/create`, profile);
  }

  updateAccountProfile(accountId: number, profileId: number, profile: AccountProfile): Observable<AccountProfile> {
    return this.http.put<AccountProfile>(`${this.apiUrl}${accountId}/profile/update/${profileId}`, profile);
  }

  deleteAccountProfile(accountId: number, profileId: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.apiUrl}${accountId}/profile/delete/${profileId}`);
  }

  // Account requests

  saveAccountRequest(account: AccountC){
    if(account.id == null || account.id == 0){
      this.saveAccount(account).subscribe(a => this.accounts.push(a));
    } else {
      this.updateAccount(account).subscribe(a => {
        this.accounts.splice(this.accounts.findIndex(a => a.id == account.id), 1, account);
      });
    }
  }

  deleteAccountRequest(id: number){
    this.deleteAccount(id).subscribe( a => {
      this.accounts.splice(this.accounts.findIndex(a => a.id == id), 1)
    });
  }

  // TODO: AccountProfile requests

}
