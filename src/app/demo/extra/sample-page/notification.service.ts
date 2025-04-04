import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications: string[] = [];
  private notificationsSubject = new Subject<string[]>();

  // Observable to subscribe to get the notifications list
  getNotifications() {
    return this.notificationsSubject.asObservable();
  }

  // Add a new notification
  addNotification(message: string): void {
    this.notifications.push(message);
    this.notificationsSubject.next(this.notifications);
  }

  // Remove a notification by index
  removeNotification(index: number): void {
    this.notifications.splice(index, 1);
    this.notificationsSubject.next(this.notifications);
  }
}
