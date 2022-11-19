import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AccountProfile } from 'src/app/main/store/model/account/AccountProfile';

@Injectable({
  providedIn: 'root'
})
export class AccountProfileManagementService {

  private apiUrl;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/api/admin/management/account/';
  }
  
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
}
