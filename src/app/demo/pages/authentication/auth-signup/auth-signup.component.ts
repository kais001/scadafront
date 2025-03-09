import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export default class AuthSignupComponent {
  user = {
    email: '',
    prenom: '',
    nom: '',
    password: '',
    telephone: '',
    role: 'OPERATEUR'  // Par défaut, un utilisateur normal

  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/auth/signin']);  // Redirection après succès
      },
      error => {
        console.error('Error registering user', error);
      }
    );
  }
}
