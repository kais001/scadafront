import { Component, OnInit } from '@angular/core';
import { AlarmService } from './alarm.service';
import { Alarm } from 'src/app/theme/shared/alarm.model'; // Update the import path

@Component({
  selector: 'app-sample-page',
  standalone: true,
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent implements OnInit {
  alarms: Alarm[] = [];

  constructor(private alarmService: AlarmService) {}

  ngOnInit() {
    this.loadAlarms();
  }

  loadAlarms() {
    this.alarmService.getAllAlarms().subscribe((data) => {
      this.alarms = data;
    });
  }

  deleteAlarm(id: number) {
    this.alarmService.deleteAlarm(id).subscribe(() => {
      this.alarms = this.alarms.filter((alarm) => alarm.id !== id);
    });
  }
}

