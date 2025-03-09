import { Component, OnInit } from '@angular/core';
import { EquipmentService } from './equipment.service';
import { EquipmentData, Sensor } from 'src/app/theme/shared/equipment.model';  // Update the import path
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  equipments: EquipmentData[] = [];
  selectedEquipment: EquipmentData | null = null;  // Track selected equipment for sensor data
  temperatureChart: Chart | null = null;
  vibrationChart: Chart | null = null;
  currentChart: Chart | null = null;
  strainChart: Chart | null = null;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.loadEquipments();
  }

  loadEquipments(): void {
    this.equipmentService.getAllEquipment().subscribe(
        data => {
          console.log('Équipements:', data);
          this.equipments = data;
        },
        error => {
          console.error('Erreur lors de la récupération des équipements', error);
        }
      );
      
  }
}