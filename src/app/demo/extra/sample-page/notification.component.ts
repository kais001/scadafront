import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() notifications: string[] = []; // List of notifications passed as input
  @Output() removeNotification = new EventEmitter<number>(); // Event emitter to remove notification

  closeNotification(index: number): void {
    this.removeNotification.emit(index); // Emit event to remove notification
  }
}
