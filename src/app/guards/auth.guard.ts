import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('user'); // Vérifie si l'utilisateur est stocké

    if (user) {
      return true; // Autorise l'accès
    } else {
      this.router.navigate(['/auth/signin']); // Redirige vers la connexion
      return false;
    }
  }
}
