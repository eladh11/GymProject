import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { LoginResult } from '../models/loginResult';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

public isLoggedIn = false;
  public token: string;
  public type: string;
  public log = true;
  public email: string;
  public constructor(
    private httpClient: HttpClient,
    private urlService: UrlService
  ) {}

  public loginRequest(credentials: Credentials): Observable<LoginResult> {
    const correctURL =
      this.urlService.getURL(credentials.type.toLowerCase()) +
      '/login?email=' +
      credentials.email +
      '&password=' +
      credentials.password;
    return this.httpClient.post(correctURL, null);
  }
}