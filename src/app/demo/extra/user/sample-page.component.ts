import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'; // Mettez à jour le chemin d'importation
import { User } from 'src/app/theme/shared/user.model'; // Mettez à jour le chemin d'importation
import { CommonModule } from '@angular/common'; // Import CommonModule pour *ngFor
import { FormsModule } from '@angular/forms'; // Import FormsModule pour ngModel

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Ajouter FormsModule ici
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent implements OnInit {
  users: User[] = [];
  showModal: boolean = false;
  selectedUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users; // Récupère les utilisateurs et les stocke dans la variable users
    }, (error) => {
      console.error('Erreur lors du chargement des utilisateurs:', error);
    });
  }

  openModal(user: User): void {
    this.selectedUser = { ...user };  // Crée une copie de l'utilisateur
    this.showModal = true;  // Affiche le modal
  }

  closeModal(): void {
    this.showModal = false;  // Cache le modal
    this.selectedUser = null;  // Réinitialise l'utilisateur sélectionné
  }

  updateUser(): void {
    if (this.selectedUser) {
      // Utiliser l'ID de l'utilisateur et ses données mises à jour
      const userId = this.selectedUser.id; // Assurez-vous que l'ID est présent dans l'objet selectedUser
      const updatedUserDetails = this.selectedUser; // Ce sont les données mises à jour
  
      // Appel de la méthode updateUser du service en passant l'ID et les données mises à jour
      this.userService.updateUser(userId, updatedUserDetails).subscribe(
        (updatedUser) => {
          // Mise à jour réussie, recharge la liste des utilisateurs
          this.loadUsers();
          this.closeModal(); // Ferme le modal
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
        }
      );
    }
  }
  

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      // Utilisateur supprimé avec succès, recharge la liste
      this.loadUsers();
      this.closeModal(); // Ferme le modal
    }, (error) => {
      console.error('Erreur lors de la suppression de l\'utilisateur', error);
    });
  }
}
