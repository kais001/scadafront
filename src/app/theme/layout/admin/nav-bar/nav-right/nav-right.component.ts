import { Component, inject, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-right',
  imports: [SharedModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  userName: string = '';  // Variable pour stocker le nom de l'utilisateur
  showModal: boolean = false;  // Contrôle l'affichage de la modal
  selectedUser: any = {};  // Variable pour stocker les informations de l'utilisateur

  constructor() {
    const config = inject(NgbDropdownConfig);
    config.placement = 'bottom-right';
  }

  ngOnInit(): void {
    this.loadUserInfo();  // Charger les informations utilisateur au démarrage
  }

  loadUserInfo() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);  // Récupère l'utilisateur depuis le localStorage
      this.userName = `${parsedUser.prenom} ${parsedUser.nom}`;  // Assurez-vous que ces champs existent dans votre objet User
      this.selectedUser = parsedUser;  // Charge les données dans le formulaire
    }
  }

  openModal() {
    console.log("openModal called");  // Ajoutez cette ligne pour déboguer
    this.showModal = true;  // Ouvre la modal
  }

  closeModal() {
    console.log("closeModal called");  // Ajoutez cette ligne pour déboguer
    this.showModal = false;  // Ferme la modal
  }

  updateUser() {
    console.log('Updated User:', this.selectedUser);
    localStorage.setItem('user', JSON.stringify(this.selectedUser));  // Sauvegarde les modifications dans le localStorage
    this.closeModal();  // Ferme la modal après l'enregistrement
  }

  
}
