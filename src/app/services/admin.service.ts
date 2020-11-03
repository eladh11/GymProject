import { User } from './../models/user';
import { Company } from './../models/company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8082/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public constructor(private httpClient: HttpClient) { }
 
  public addCompany(company: Company): Observable<any> {
    return this.httpClient.post<any>(baseUrl + 'add-company', company);
  }
  public updateCompany(company: Company): Observable<any> {
    return this.httpClient.put<any>(
      'http://localhost:8082/admin/update-company/',
      company
    );
  }

  public deleteCompany(companyID: number): Observable<any> {
    return this.httpClient.delete<any>(baseUrl + 'delete-company/' + companyID);
  }
  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(baseUrl + 'get-all-companies');
  }
  public getOneCompany(companyID: number): Observable<Company> {
    return this.httpClient.get<Company>(
      'http://localhost:8082/admin/get-one-company/' + companyID
    );
  }
  public getOneCompanyByEmail(email: string): Observable<Company> {
    return this.httpClient.get<Company>(
      'http://localhost:8082/admin/get-one-company-email/' + email
    );
  }
  public getOneCustomerByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(
      'http://localhost:8082/admin/get-one-user-email/' + email
    );
  }

  public addUser(user: User): Observable<any> {
    return this.httpClient.post<any>(baseUrl + 'add-user', user);
  }
  public updateUser(user: User): Observable<any> {
    return this.httpClient.put<any>(
      'http://localhost:8082/admin/update-user/',
      user
    );
  }

  public deleteUser(userID: number): Observable<any> {
    return this.httpClient.delete<any>(
      baseUrl + 'delete-user/' + userID
    );
  }
  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(baseUrl + 'get-all-users');
  }

  public getOneUser(userID: number): Observable<User> {
    return this.httpClient.get<User>(
      'http://localhost:8082/admin/get-one-user/' + userID
    );
  }
}
