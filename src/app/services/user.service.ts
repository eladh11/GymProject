import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8082/user/';
import { Env } from './../../environments/Env';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url =  Env.URL+'user/';

    public constructor(private httpClient: HttpClient) {}
  
    
    public getUserDetailsByID(id: number): Observable<User> {
      return this.httpClient.get<User>(
        this.url+'get-all-user-details-id/' + id
      );
    }
    public getUserDetailsByEmail(email: string): Observable<User> {
      return this.httpClient.get<User>(
        this.url+ 'get-all-user-details-email/' + email
      );
    }
    


    
  }
  
