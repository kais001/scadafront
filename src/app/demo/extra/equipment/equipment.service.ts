// equipment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment, Sensor } from 'src/app/theme/shared/equipment.model';

@Injectable({ providedIn: 'root' })
export class EquipmentService {
  private apiUrl = 'http://localhost:8091/scada';

  constructor(private http: HttpClient) {}

  getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`${this.apiUrl}/equipment`);
  }

  addEquipment(equipment: Equipment): Observable<Equipment> {
    return this.http.post<Equipment>(`${this.apiUrl}/equipment`, equipment);
  }

  getSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${this.apiUrl}/sensors`);
  }

  addSensor(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(`${this.apiUrl}/sensor`, sensor);
  }

  assignSensorToEquipment(sensorId: number, equipmentId: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/assign-sensor/${sensorId}/to-equipment/${equipmentId}`, {});
  }
  updateEquipment(id: number, equipment: Equipment): Observable<Equipment> {
    return this.http.put<Equipment>(`${this.apiUrl}/${id}`, equipment);
  }

  deleteEquipment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}