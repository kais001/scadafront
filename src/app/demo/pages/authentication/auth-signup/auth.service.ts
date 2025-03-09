import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://localhost:8097/actuator/info/api/users/register'; // URL via la Gateway

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(this.API_URL, user);
  }
}
