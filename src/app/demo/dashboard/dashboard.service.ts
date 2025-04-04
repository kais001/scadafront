// src/app/equipment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    private apiUrl = 'http://localhost:8091/scada/equipment/1';
    private apiUrl2 = 'http://localhost:8091/scada/equipment/2';

  constructor(private http: HttpClient) { }

  getEquipment(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getEquipment2(): Observable<any> {
    return this.http.get<any>(this.apiUrl2);
  }
}
