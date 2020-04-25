import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../Auth/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  verifyPassword(password) {
    return this.http.post(environment.apiBaseUrl + '/verify-password', {password});
  }

  getUserProfile(): Observable<IUser> {
    return this.http.get<IUser>(environment.apiBaseUrl + '/get-user-profile');
  }
}
