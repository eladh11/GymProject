import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gym } from '../models/gym';import { Env } from './../../environments/Env';
 
const baseUrl = 'http://localhost:8082/company/';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url =  Env.URL+'company/';

  public constructor(private httpClient: HttpClient) { }

  public addGym(gym: Gym): Observable<any> {
    return this.httpClient.post<any>(this.url + 'add-gym', gym);
  }
  public updateGym(gym: Gym): Observable<any> {
    return this.httpClient.put<any>(
      this.url+ 'update-gym/',
      gym
    );
  }
  public deleteGym(gymID: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'delete-gym/' + gymID);
  }
  public getAllGymsByID(id: number): Observable<Gym[]> {
    return this.httpClient.get<Gym[]>(
      this.url + 'get-all-company-gyms/' + id
    );
  }
  public getAllGyms(): Observable<Gym[]> {
    return this.httpClient.get<Gym[]>(this.url + 'get-all-gyms');
  }

   
   
}
