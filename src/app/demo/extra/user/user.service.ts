import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/theme/shared/user.model'; // Update the import path

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8097/api/usermanagement/operators';  // Mettez l'URL correcte de votre API
  private Url = 'http://localhost:8097/actuator/info/api/users';  // Mettez l'URL correcte de votre API


  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Supposons que l'API a un endpoint /list pour récupérer tous les utilisateurs
  }



  updateUser(userId: number, updatedUserDetails: User): Observable<User> {
    return this.http.put<User>(`http://localhost:8097/actuator/info/api/users/${userId}`, updatedUserDetails);
  }
  

  // Méthode pour supprimer un utilisateur
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${userId}`); // Suppression de l'utilisateur par ID
  }

    // Méthode pour récupérer l'utilisateur connecté
    getUserSession(): Observable<User> {
      return this.http.get<User>(`${this.apiUrl}/me`);
    }
}
