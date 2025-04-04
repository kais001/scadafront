import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; // Ajouté
import { MatIconModule } from '@angular/material/icon'; // Ajouté
import { MatDividerModule } from '@angular/material/divider'; // Ajouté
import { EquipmentService } from './equipment.service';
import { Equipment, Sensor } from 'src/app/theme/shared/equipment.model';

@Component({
  selector: 'app-equipment',
  standalone: true, // Indique que ce composant est standalone
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatToolbarModule, // Ajouté
    MatIconModule,    // Ajouté
    MatDividerModule, // Ajouté
  ],
  templateUrl: './equipment.component.html',
})
export class EquipmentComponent implements OnInit {
  equipments: Equipment[] = [];
  sensors: Sensor[] = [];
  newEquipment: Equipment = { name: '', status: 'ACTIVE' };
  newSensor: Sensor = { name: '', extension: '' };
  selectedEquipmentId?: number;
  selectedSensorId?: number;

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.equipmentService.getEquipments().subscribe((data) => (this.equipments = data));
    this.equipmentService.getSensors().subscribe((data) => (this.sensors = data));
  }

  addEquipment() {
    this.equipmentService.addEquipment(this.newEquipment).subscribe(() => this.loadData());
  }

  addSensor() {
    this.equipmentService.addSensor(this.newSensor).subscribe(() => this.loadData());
  }

  assignSensor() {
    if (this.selectedSensorId && this.selectedEquipmentId) {
      this.equipmentService
        .assignSensorToEquipment(this.selectedSensorId, this.selectedEquipmentId)
        .subscribe(() => this.loadData());
    }
  }

  assignSensorToEquipment() {
    if (this.selectedSensorId && this.selectedEquipmentId) {
      this.equipmentService.assignSensorToEquipment(this.selectedSensorId, this.selectedEquipmentId)
        .subscribe(() => this.loadData());
    }
  }
}
