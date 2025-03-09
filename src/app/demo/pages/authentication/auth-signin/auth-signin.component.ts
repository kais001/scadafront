// auth-signin.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service'; // Vérifie le chemin correct
import { User } from 'src/app/theme/shared/user.model';  // Importation de l'interface User



@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [FormsModule], // Ajout de FormsModule pour ngModel
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})


export default class AuthSigninComponent implements OnInit {
  email: string = '';
  password: string = '';
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Vous pouvez récupérer l'utilisateur à partir du token ou de l'email après la connexion
    this.getUserSession();

  }

  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token); // Stocke le token
        this.getUserSession(); // Récupère la session utilisateur après connexion
        this.router.navigate(['/dashboard']); // Redirection après login
             // Vérification du localStorage après la connexion
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Invalid credentials');
      }
    });
  }

  getUserSession() {
    const email = this.email;  // On suppose que l'email est déjà défini ou récupéré après le login
    if (email) {
      this.authService.getUserByEmail(email).subscribe({
        next: (response: any) => {  // Utilisation de "any" pour éviter le problème de type
          console.log('User details:', response);
          this.user = response;  // Stocke l'utilisateur récupéré
          // Stocke les infos de l'utilisateur dans localStorage
        localStorage.setItem('user', JSON.stringify(response));
        },
        error: (error) => {
          console.error('Failed to fetch user session', error);
          alert('User not found');
        }
      });
    } else {
      console.warn('Email is not available.');
    }
  }

}  