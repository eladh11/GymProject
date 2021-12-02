import { User } from './../models/user';
import { Company } from './../models/company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from './../../environments/Env';
 
 const baseUrl = 'http://localhost:8082/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url =  Env.URL+'admin/';

  public constructor(private httpClient: HttpClient) { }
 
  public addCompany(company: Company): Observable<any> {
    return this.httpClient.post<any>(this.url  + 'add-company', company);
  }
  public updateCompany(company: Company): Observable<any> {
    return this.httpClient.put<any>(
      this.url + 'update-company/',
      company
    );
  }

  public deleteCompany(companyID: number): Observable<any> {
    return this.httpClient.delete<any>(this.url +'delete-company/' + companyID);
  }
  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url + 'get-all-companies');
  }
  public getOneCompany(companyID: number): Observable<Company> {
    return this.httpClient.get<Company>(
      this.url +'get-one-company/' + companyID
    );
  }
  public getOneCompanyByEmail(email: string): Observable<Company> {
    return this.httpClient.get<Company>(
      this.url +'get-one-company-email/' + email
    );
  }
  public getOneCustomerByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(
      this.url +'get-one-user-email/' + email
    );
  }

  public addUser(user: User): Observable<any> {
    return this.httpClient.post<any>(this.url + 'add-user', user);
  }
  public updateUser(user: User): Observable<any> {
    return this.httpClient.put<any>(
      this.url +'update-user/',
      user
    );
  }

  public deleteUser(userID: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.url  + 'delete-user/' + userID
    );
  }
  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url + 'get-all-users');
  }

  public getOneUser(userID: number): Observable<User> {
    return this.httpClient.get<User>(
      this.url +'get-one-user/' + userID
    );
  }
}
