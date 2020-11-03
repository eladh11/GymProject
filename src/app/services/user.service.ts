import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8082/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {


    public constructor(private httpClient: HttpClient) {}
  
    
    public getUserDetailsByID(id: number): Observable<User> {
      return this.httpClient.get<User>(
        'http://localhost:8082/user/get-all-user-details-id/' + id
      );
    }
    public getUserDetailsByEmail(email: string): Observable<User> {
      return this.httpClient.get<User>(
        'http://localhost:8082/user/get-all-user-details-email/' + email
      );
    }
    


    
  }
  
