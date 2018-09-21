


import { SuuStream } from '../models/standup-us/suu-stream';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/standup-us/user-model';
import { map } from 'rxjs/internal/operators/map';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class StandupService {

  constructor(private http: HttpClient) {}
  private baseApiUrl = environment.supApiUrl;

  private api(route: string) {
    return this.baseApiUrl + route;
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get(this.api('/users')).pipe(
      map((result: UserModel[]) => result)
    );
  }
}
