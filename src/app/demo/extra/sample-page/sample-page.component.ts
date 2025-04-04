import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlarmService } from './alarm.service';
import { CommandService } from './command.service'; // Import CommandService
import { Alarm } from 'src/app/theme/shared/alarm.model'; // Import Alarm model
import { CommonModule } from '@angular/common'; // Add CommonModule here
import { CommandResponse } from 'src/app/theme/shared/alarm.model'; // Import Alarm model
@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent implements OnInit {
  alarms: Alarm[] = []; // Array to hold alarm data
  commandResponses: CommandResponse[] = []; // Array to hold command responses

  constructor(
    private alarmService: AlarmService,
    private commandService: CommandService, // Inject CommandService
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadAlarms();  // Load alarms
    this.loadCommands(); // Load commands
  }

  // Method to load alarms
  loadAlarms() {
    this.alarmService.getAllAlarms().subscribe(
      (data) => {
        console.log("✅ Fetched Alarms:", data);
        this.alarms = data;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error("❌ Error fetching alarms:", error);
      }
    );
  }

  // Method to load commands
  loadCommands() {
    this.commandService.getAllCommands().subscribe(
      (data) => {
        console.log("✅ Fetched Commands:", data);
        this.commandResponses = data;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error("❌ Error fetching commands:", error);
      }
    );
  }

  // Method to delete an alarm
  deleteAlarm(id: number) {
    this.alarmService.deleteAlarm(id).subscribe(() => {
      this.alarms = this.alarms.filter((alarm) => alarm.id !== id);
      this.cdr.detectChanges();
    });
  }

  // Method to delete a command
  deleteCommand(id: number) {
    this.commandService.deleteCommand(id).subscribe(() => {
      this.commandResponses = this.commandResponses.filter((command) => command.id !== id);
      this.cdr.detectChanges();
    });
  }

  // Track by function for alarm rows
  trackById(index: number, alarm: Alarm): number {
    return alarm.id!;
  }

  // Track by function for command rows
  trackByCommandId(index: number, command: CommandResponse): number {
    return command.id;
  }
}
