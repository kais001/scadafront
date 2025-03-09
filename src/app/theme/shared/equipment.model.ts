export interface EquipmentData {
  id: number;
  name: string;
  location: string | null;
  status: EquipmentStatus;
  function: string | null;
  sensors: Sensor[];
}

export enum EquipmentStatus {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED'
}


export interface Sensor {
  id: number;
  name: string | null;
  type: string | null;
  threshold: number | null;  // Threshold can be null for flexibility
  equipmentData: EquipmentData | null;
  extension: string;
}
