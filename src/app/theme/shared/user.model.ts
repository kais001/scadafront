export enum RoleType {
    ADMIN = 'ADMIN',
    OPERATEUR = 'OPERATEUR'
  }
  
  export interface User {
    id: number;
    email: string;
    prenom: string;
    nom: string;
    telephone: string;
    role: RoleType;
    password?: string;  // Ajouter cette propriété

    active: boolean;
    createdAt: string;  // Instant est stocké sous forme de string en JSON
    updatedAt: string;
  }
  