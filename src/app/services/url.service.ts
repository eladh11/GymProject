import { Injectable } from '@angular/core';
import { Env } from './../../environments/Env';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  // public BASE_URL = 'http://localhost:';
  // public PORT = 8082;
  // public admin = '/admin/';
  // public user = '/user/';
  // public company = '/company/';

  public admin =Env.URL+'admin/';
  public user = Env.URL+'user/';
  public company = Env.URL+'company/';
  public constructor() {}

  public getAdminURL(): string {
    return this.admin;
  }

  public getUserURL(): string {
    return this.user;
  }

  public getACompanyURL(): string {
    return this.company;
  }

  public getURL(type: string): string {
    switch (type) {
      case 'admin':
        return this.getAdminURL();
      case 'user':
        return this.getUserURL();
      case 'company':
        return this.getACompanyURL();
    }
  }
}
