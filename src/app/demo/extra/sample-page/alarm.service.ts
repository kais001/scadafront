import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alarm } from 'src/app/theme/shared/alarm.model';
import { tap } from 'rxjs/operators'; // ✅ Ajout de l'import

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  private apiUrl = '/actuator/info/api/alarms';

  constructor(private http: HttpClient) {}

  getAllAlarms(): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(`${this.apiUrl}/all`);
  }

  getAlarmById(id: number): Observable<Alarm> {
    return this.http.get<Alarm>(`${this.apiUrl}/${id}`);
  }

  addAlarm(alarm: Alarm): Observable<Alarm> {
    return this.http.post<Alarm>(`${this.apiUrl}/add`, alarm);
  }

  deleteAlarm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
