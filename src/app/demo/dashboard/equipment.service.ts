import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipmentData } from 'src/app/theme/shared/equipment.model';
import { tap } from 'rxjs/operators';  // ✅ Ajout de l'import

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private apiUrl = 'http://localhost:8761/eureka/scada/equipment'; // URL du backend

  constructor(private http: HttpClient) { }

  getAllEquipment(): Observable<EquipmentData[]> {
    return this.http.get<EquipmentData[]>(this.apiUrl).pipe(
      tap(data => console.log("Received data:", data))  // ✅ Vérification des données reçues
    );
  }
  


  }
