import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { EquipmentData, Sensor } from 'src/app/theme/shared/equipment.model';  // Update the import path
import { DashboardService } from './dashboard.service';
import  Chart from 'chart.js';
import { CommonModule } from '@angular/common';
import { ChartOptions } from 'chart.js';

@Component({
  imports: [CommonModule], // Add this line
    selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})

export class DashboardComponent implements OnInit,OnDestroy {
  public ctx1: any;
  public ctx2: any;
  public ctx3: any;
  public ctx4: any;
  public ctx5: any;
  public ctx6: any;
  public ctx7: any;
  public ctx8: any;

  public canvas1: any;
  public canvas2: any;
  public canvas3: any;
  public canvas4: any;
  public canvas5: any;
  public canvas6: any;
  public canvas7: any;
  public canvas8: any;

  public myChart1: any;
  public myChart2: any;
  public myChart3: any;
  public myChart4: any;
  public myChart5: any;
  public myChart6: any;
  public myChart7: any;
  public myChart8: any;

  public chartData1: number[] = [];
  public chartData2: number[] = [];
  public chartData3: number[] = [];
  public chartData4: number[] = [];
  public chartData5: number[] = [];
  public chartData6: number[] = [];
  public chartData7: number[] = [];
  public chartData8: number[] = [];

  public chartLabels1: string[] = [];
  public chartLabels2: string[] = [];
  public chartLabels3: string[] = [];
  public chartLabels4: string[] = [];
  public chartLabels5: string[] = [];
  public chartLabels6: string[] = [];
  public chartLabels7: string[] = [];
  public chartLabels8: string[] = [];

  public chartInterval1: any;
  public chartInterval2: any;
  public chartInterval3: any;
  public chartInterval4: any;
  public chartInterval5: any;
  public chartInterval6: any;
  public chartInterval7: any;
  public chartInterval8: any;

  public lastValue1: number | null = null;
  public lastValue2: number | null = null;
  public lastValue3: number | null = null;
  public lastValue4: number | null = null;
  public lastValue5: number | null = null;
  public lastValue6: number | null = null;
  public lastValue7: number | null = null;
  public lastValue8: number | null = null;

  equipmentData1: any;
  equipmentData2: any;
  equipmentData3: any;
  equipmentData4: any;
  equipmentData5: any;
  equipmentData6: any;
  equipmentData7: any;
  equipmentData8: any;

  constructor(private http: HttpClient, private dashboardService: DashboardService) {}

  ngOnInit() {
    // Corrected subscription for compatibility
    this.dashboardService.getEquipment().subscribe(data => {
      this.equipmentData1 = data;
    });

    this.dashboardService.getEquipment2().subscribe(data => {
      this.equipmentData2 = data;
    });

    // Initialize both charts
    this.initializeCharts();

    // Start updating the charts with real-time data from the APIs
    this.startChartUpdate1();
    this.startChartUpdate2();
    this.startChartUpdate3();
    this.startChartUpdate4();
    this.startChartUpdate5();
    this.startChartUpdate6();
    this.startChartUpdate7();
    this.startChartUpdate8();
  }

  ngOnDestroy() {
    // Clear all intervals to avoid memory leaks
    clearInterval(this.chartInterval1);
    clearInterval(this.chartInterval2);
    clearInterval(this.chartInterval3);
    clearInterval(this.chartInterval4);
    clearInterval(this.chartInterval5);
    clearInterval(this.chartInterval6);
    clearInterval(this.chartInterval7);
    clearInterval(this.chartInterval8);
  }

  initializeCharts(): void {
    // Chart 1
    this.canvas1 = document.getElementById("chartLineRed1");
    this.ctx1 = this.canvas1.getContext("2d");
    let gradientStroke1 = this.ctx1.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, 'rgba(240, 46, 32, 0.85)');
    gradientStroke1.addColorStop(0.4, 'rgba(240, 46, 32, 0.85)');
    gradientStroke1.addColorStop(0, 'rgba(240, 46, 32, 0.85)'); // Red colors

    let data1 = {
      labels: this.chartLabels1,
      datasets: [{
        label: "Temperature Data",
        fill: true,
        backgroundColor: gradientStroke1,
        borderColor: 'rgba(240, 46, 32, 0.85)',
        borderWidth: 2,
        data: this.chartData1,
      }]
    };

    this.myChart1 = new Chart(this.ctx1, {
      type: 'line',
      data: data1,
      options: this.getChartOptions()
    });

    this.canvas2 = document.getElementById("chartLineRed2");
    this.ctx2 = this.canvas2.getContext("2d");
    let gradientStroke2 = this.ctx2.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, 'rgba(32, 128, 206, 0.94)');
    gradientStroke2.addColorStop(0.4, 'rgba(32, 128, 206, 0.94)');
    gradientStroke2.addColorStop(0, 'rgba(32, 128, 206, 0.94)'); // Red colors

    let data2 = {
      labels: this.chartLabels1,
      datasets: [{
        label: "Vibration Data",
        fill: true,
        backgroundColor: gradientStroke2,
        borderColor: 'rgba(32, 128, 206, 0.94)',
        borderWidth: 2,
        data: this.chartData2,
      }]
    };

    this.myChart2 = new Chart(this.ctx2, {
      type: 'line',
      data: data2,
      options: this.getChartOptions()
    });

    this.canvas3 = document.getElementById("chartLineRed3");
    this.ctx3 = this.canvas3.getContext("2d");
    let gradientStroke3 = this.ctx3.createLinearGradient(0, 230, 0, 50);
    gradientStroke3.addColorStop(1, 'rgba(27, 242, 15, 0.54)');
    gradientStroke3.addColorStop(0.4, 'rgba(27, 242, 15, 0.54)');
    gradientStroke3.addColorStop(0, 'rgba(27, 242, 15, 0.54)'); // Red colors

    let data3 = {
      labels: this.chartLabels3,
      datasets: [{
        label: "Current Data",
        fill: true,
        backgroundColor: gradientStroke3,
        borderColor: 'rgba(27, 242, 15, 0.54)',
        borderWidth: 2,
        data: this.chartData3,
      }]
    };

    this.myChart3 = new Chart(this.ctx3, {
      type: 'line',
      data: data3,
      options: this.getChartOptions()
    });

    this.canvas4 = document.getElementById("chartLineRed4");
    this.ctx4 = this.canvas4.getContext("2d");
    let gradientStroke4 = this.ctx4.createLinearGradient(0, 230, 0, 50);
    gradientStroke4.addColorStop(1, 'rgba(239, 31, 208, 0.84)');
    gradientStroke4.addColorStop(0.4, 'rgba(239, 31, 208, 0.84)');
    gradientStroke4.addColorStop(0, 'rgba(239, 31, 208, 0.84)'); // Red colors

    let data4 = {
      labels: this.chartLabels4,
      datasets: [{
        label: "Strain Data",
        fill: true,
        backgroundColor: gradientStroke4,
        borderColor: 'rgba(239, 31, 208, 0.84)',
        borderWidth: 2,
        data: this.chartData4,
      }]
    };

    this.myChart4 = new Chart(this.ctx4, {
      type: 'line',
      data: data4,
      options: this.getChartOptions()
    });

    this.canvas5 = document.getElementById("chartLineRed5");
    this.ctx5 = this.canvas5.getContext("2d");
    let gradientStroke5 = this.ctx5.createLinearGradient(0, 230, 0, 50);
    gradientStroke5.addColorStop(1, 'rgba(240, 46, 32, 0.85)');
    gradientStroke5.addColorStop(0.4, 'rgba(240, 46, 32, 0.85)');
    gradientStroke5.addColorStop(0, 'rgba(240, 46, 32, 0.85)'); // Red colors

    let data5 = {
      labels: this.chartLabels5,
      datasets: [{
        label: "Temperature Data",
        fill: true,
        backgroundColor: gradientStroke5,
        borderColor: 'rgba(240, 46, 32, 0.85)',
        borderWidth: 2,
        data: this.chartData5,
      }]
    };

    this.myChart5 = new Chart(this.ctx5, {
      type: 'line',
      data: data5,
      options: this.getChartOptions()
    });

    this.canvas6 = document.getElementById("chartLineRed6");
    this.ctx6 = this.canvas6.getContext("2d");
    let gradientStroke6 = this.ctx6.createLinearGradient(0, 230, 0, 50);
    gradientStroke6.addColorStop(1, 'rgba(32, 128, 206, 0.94)');
    gradientStroke6.addColorStop(0.4, 'rgba(32, 128, 206, 0.94)');
    gradientStroke6.addColorStop(0, 'rgba(32, 128, 206, 0.94)'); // Red colors

    let data6 = {
      labels: this.chartLabels6,
      datasets: [{
        label: "Vibration Data",
        fill: true,
        backgroundColor: gradientStroke6,
        borderColor: 'rgba(32, 128, 206, 0.94)',
        borderWidth: 2,
        data: this.chartData6,
      }]
    };

    this.myChart6 = new Chart(this.ctx6, {
      type: 'line',
      data: data6,
      options: this.getChartOptions()
    });

    this.canvas7 = document.getElementById("chartLineRed7");
    this.ctx7 = this.canvas7.getContext("2d");
    let gradientStroke7 = this.ctx7.createLinearGradient(0, 230, 0, 50);
    gradientStroke7.addColorStop(1, 'rgba(27, 242, 15, 0.54)');
    gradientStroke7.addColorStop(0.4, 'rgba(27, 242, 15, 0.54)');
    gradientStroke7.addColorStop(0,'rgba(27, 242, 15, 0.54)'); // Red colors

    let data7 = {
      labels: this.chartLabels7,
      datasets: [{
        label: "Current Data",
        fill: true,
        backgroundColor: gradientStroke7,
        borderColor: 'rgba(27, 242, 15, 0.54)',
        borderWidth: 2,
        data: this.chartData7,
      }]
    };

    this.myChart7 = new Chart(this.ctx7, {
      type: 'line',
      data: data7,
      options: this.getChartOptions()
    });

    this.canvas8 = document.getElementById("chartLineRed8");
    this.ctx8 = this.canvas8.getContext("2d");
    let gradientStroke8 = this.ctx8.createLinearGradient(0, 230, 0, 50);
    gradientStroke8.addColorStop(1, 'rgba(239, 31, 208, 0.84)');
    gradientStroke8.addColorStop(0.4, 'rgba(239, 31, 208, 0.84)');
    gradientStroke8.addColorStop(0, 'rgba(239, 31, 208, 0.84)'); // Red colors

    let data8 = {
      labels: this.chartLabels8,
      datasets: [{
        label: "Strain Data",
        fill: true,
        backgroundColor: gradientStroke8,
        borderColor: 'rgba(239, 31, 208, 0.84)',
        borderWidth: 2,
        data: this.chartData8,
      }]
    };

    this.myChart8 = new Chart(this.ctx8, {
      type: 'line',
      data: data8,
      options: this.getChartOptions()
    });


  }

  getChartOptions(): ChartOptions {
    return {
      maintainAspectRatio: false,
      legend: { display: false },
      tooltips: {
        backgroundColor: "#5A6A85",
        titleFontColor: "#ffffff",
        bodyFontColor: "#ffffff",
        bodySpacing: 4,
        xPadding: 12,
        mode: 'index' as 'index',  // 👈 Explicitly cast to the correct type
        intersect: false, // Use false instead of 0 for TypeScript compatibility
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          ticks: { beginAtZero: true }
        }]
      }
    };
  }
  
  
  
  
  
  // Start updating the first chart with real-time data from the API
  startChartUpdate1(): void {
    this.chartInterval1 = setInterval(() => {
      this.http.get<any>('http://localhost:8091/scada/monitor/sensors/data/1/1').subscribe(data => {
        const latestData = data.temperature;

        if (latestData.length > 0) {
          const latestTimestamp = latestData[0].timestamp;
          const latestValue = latestData[0].value;

          if (this.lastValue1 === null || latestValue !== this.lastValue1) {
            this.chartData1.push(latestValue);
            this.chartLabels1.push(latestTimestamp);

            if (this.chartData1.length > 10) {
              this.chartData1.shift();
              this.chartLabels1.shift();
            }

            this.myChart1.update();
            this.lastValue1 = latestValue;
          }
        }
      });
    }, 5000);  // Update every 5 seconds
  }

  // Start updating the second chart with real-time data from another API
  startChartUpdate2(): void {
    this.chartInterval2 = setInterval(() => {
      this.http.get<any>('http://localhost:8091/scada/monitor/sensors/data/1/2').subscribe(data => {
        const latestData = data.vibration;

        if (latestData.length > 0) {
          const latestTimestamp = latestData[0].timestamp;
          const latestValue = latestData[0].value;

          if (this.lastValue2 === null || latestValue !== this.lastValue2) {
            this.chartData2.push(latestValue);
            this.chartLabels2.push(latestTimestamp);

            if (this.chartData2.length > 10) {
              this.chartData2.shift();
              this.chartLabels2.shift();
            }

            this.myChart2.update();
            this.lastValue2 = latestValue;
          }
        }
      });
    }, 5000);  // Update every 5 seconds
  }
  startChartUpdate3(): void {
    this.chartInterval3 = setInterval(() => {
      this.http.get<any>('http://localhost:8091/scada/monitor/sensors/data/1/3').subscribe(data => {
        const latestData = data.current;

        if (latestData.length > 0) {
          const latestTimestamp = latestData[0].timestamp;
          const latestValue = latestData[0].value;

          if (this.lastValue3 === null || latestValue !== this.lastValue3) {
            this.chartData3.push(latestValue);
            this.chartLabels3.push(latestTimestamp);

            if (this.chartData3.length > 10) {
              this.chartData3.shift();
              this.chartLabels3.shift();
            }

            this.myChart3.update();
            this.lastValue3 = latestValue;
          }
        }
      });
    }, 5000);  // Update every 5 seconds
  }
  startChartUpdate4(): void {
    this.chartInterval4 = setInterval(() => {
      this.http.get<any>('http://localhost:8091/scada/monitor/sensors/data/1/4').subscribe(data => {
        const latestData = data.strain;

        if (latestData.length > 0) {
          const latestTimestamp = latestData[0].timestamp;
          const latestValue = latestData[0].value;

          if (this.lastValue4 === null || latestValue !== this.lastValue4) {
            this.chartData4.push(latestValue);
            this.chartLabels4.push(latestTimestamp);

            if (this.chartData4.length > 10) {
              this.chartData4.shift();
              this.chartLabels4.shift();
            }

            this.myChart4.update();
            this.lastValue4 = latestValue;
          }
        }
      });
    }, 5000);  // Update every 5 seconds
  }
  startChartUpdate5(): void {
    this.chartInterval5 = setInterval(() => {
      this.http.get<any>('http://localhost:8091/scada/monitor/sensors/data/2/5').subscribe(data => {
        const latestData = data.temperature;

        if (latestData.length > 0) {
          const latestTimestamp = latestData[0].timestamp;
          const latestValue = latestData[0].value;

          if (this.lastValue5 === null || latestValue !== this.lastValue5) {
            this.chartData5.push(latestValue);
            this.chartLabels5.push(latestTimestamp);

            if (this.chartData5.length > 10) {
              this.chartData5.shift();
              this.chartLabels5.shift();
            }

            this.myChart5.update();
            this.lastValue5 = latestValue;
          }
        }
      });
    }, 5000);  // Update every 5 seconds
  }
  startChartUpdate6(): void {
    this.chartInterval6 = setInterval(() => {
      this.http.get<any>('http://localhost:8091/scada/monitor/sensors/data/2/6').subscribe(data => {
        const latestData = data.vibration;

        if (latestData.length > 0) {
          const latestTimestamp = latestData[0].timestamp;
          const latestValue = latestData[0].value;

          if (this.lastValue6 === null || latestValue !== this.lastValue6) {
            this.chartData6.push(latestValue);
            this.chartLabels6.push(latestTimestamp);

            if (this.chartData6.length > 10) {
              this.chartData6.shift();
              this.chartLabels6.shift();
            }

            this.myChart6.update();
            this.lastValue6 = latestValue;
          }
        }
      });
    }, 5000);  // Update every 5 seconds
  }
  startChartUpdate7(): void {
    this.chartInterval7 = setInterval(() => {
      this.http.get<any>('http://localhost:8091/scada/monitor/sensors/data/2/7').subscribe(data => {
        const latestData = data.current;

        if (latestData.length > 0) {
          const latestTimestamp = latestData[0].timestamp;
          const latestValue = latestData[0].value;

          if (this.lastValue7 === null || latestValue !== this.lastValue7) {
            this.chartData7.push(latestValue);
            this.chartLabels7.push(latestTimestamp);

            if (this.chartData7.length > 10) {
              this.chartData7.shift();
              this.chartLabels7.shift();
            }

            this.myChart7.update();
            this.lastValue7 = latestValue;
          }
        }
      });
    }, 5000);  // Update every 5 seconds
  }
  startChartUpdate8(): void {
    this.chartInterval8 = setInterval(() => {
      this.http.get<any>('http://localhost:8091/scada/monitor/sensors/data/2/8').subscribe(data => {
        const latestData = data.strain;

        if (latestData.length > 0) {
          const latestTimestamp = latestData[0].timestamp;
          const latestValue = latestData[0].value;

          if (this.lastValue8 === null || latestValue !== this.lastValue8) {
            this.chartData8.push(latestValue);
            this.chartLabels8.push(latestTimestamp);

            if (this.chartData8.length > 10) {
              this.chartData8.shift();
              this.chartLabels8.shift();
            }

            this.myChart8.update();
            this.lastValue8 = latestValue;
          }
        }
      });
    }, 5000);  // Update every 5 seconds
  }

  // Function to update chart options (if needed)
  public updateOptions() {
    this.myChart1.update();
    this.myChart2.update();
    this.myChart3.update();
    this.myChart4.update();
    this.myChart5.update();
    this.myChart6.update();
    this.myChart7.update();
    this.myChart8.update();


  }
}
