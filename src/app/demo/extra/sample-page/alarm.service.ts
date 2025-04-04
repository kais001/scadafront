import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alarm } from 'src/app/theme/shared/alarm.model';
import { NotificationService } from './notification.service';  // Import the NotificationService
import { tap } from 'rxjs/operators';  // ✅ Import the `tap` operator

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  private apiUrl = 'http://localhost:8082/actuator/info/api/alarms'; // ✅ Update the URL

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService  // Inject the NotificationService
  ) {}

  getAllAlarms(): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(`${this.apiUrl}/all`);
  }

  getAlarmById(id: number): Observable<Alarm> {
    return this.http.get<Alarm>(`${this.apiUrl}/${id}`);
  }

  addAlarm(alarm: Alarm): Observable<Alarm> {
    return this.http.post<Alarm>(`${this.apiUrl}/add`, alarm).pipe(
      tap((addedAlarm: Alarm) => {
        // Trigger a notification when the alarm status is 'ACTIVE'
        if (addedAlarm.status === 'ACTIVE') {
          this.notificationService.addNotification(`Alert: Sensor ${addedAlarm.sensorName} is ACTIVE. Check now!`);
        }
      })
    );
  }

  deleteAlarm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
