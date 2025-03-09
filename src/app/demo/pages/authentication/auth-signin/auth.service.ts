// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private API_URL = 'http://localhost:8097/actuator/info/api/users/login'; // Remplacez par l'URL de votre API
    private apiUrl = 'http://localhost:8097/actuator/info/api/users/me';  // URL de ton backend pour récupérer l'utilisateur

    constructor(private http: HttpClient, private router: Router) { }

    // Login
    login(user: User): Observable<any> {
        return this.http.post(this.API_URL, user);    }

    // Logout
    logout(): Observable<any> {
        return this.http.post('http://localhost:8097/actuator/info/api/users/logout', {}); // Assurez-vous que l'URL est correcte
    }

 // Méthode pour récupérer l'utilisateur par email
 getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}?email=${email}`);
  }

}