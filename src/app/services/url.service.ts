import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  public BASE_URL = 'http://localhost:';
  public PORT = 8082;

  public admin = '/admin/';
  public user = '/user/';
  public company = '/company/';
  public constructor() {}

  public getAdminURL(): string {
    return this.BASE_URL + this.PORT + this.admin;
  }

  public getUserURL(): string {
    return this.BASE_URL + this.PORT + this.user;
  }

  public getACompanyURL(): string {
    return this.BASE_URL + this.PORT + this.company;
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
