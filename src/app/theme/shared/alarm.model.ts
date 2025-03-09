export enum AlarmStatus {
    ACTIVE = 'ACTIVE',
    RESOLVED = 'RESOLVED'
  }
  
  export interface Alarm {
    id?: number;
    type: string;
    description: string;
    equipmentId: number;
    equipmentName: string;
    sensorId: number;
    sensorName: string;
    sensorValue: number;
    timestamp: string;
    status: AlarmStatus;
  }
  