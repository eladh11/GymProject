import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gym } from '../models/gym';
const baseUrl = 'http://localhost:8082/company/';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public constructor(private httpClient: HttpClient) { }

  public addGym(gym: Gym): Observable<any> {
    return this.httpClient.post<any>(baseUrl + 'add-gym', gym);
  }
  public updateGym(gym: Gym): Observable<any> {
    return this.httpClient.put<any>(
      'http://localhost:8082/company/update-gym/',
      gym
    );
  }
  public deleteGym(gymID: number): Observable<any> {
    return this.httpClient.delete<any>(baseUrl + 'delete-gym/' + gymID);
  }
  public getAllGymsByID(id: number): Observable<Gym[]> {
    return this.httpClient.get<Gym[]>(
      baseUrl + 'get-all-company-gyms/' + id
    );
  }
  public getAllGyms(): Observable<Gym[]> {
    return this.httpClient.get<Gym[]>(baseUrl + 'get-all-gyms');
  }

   
   
}
