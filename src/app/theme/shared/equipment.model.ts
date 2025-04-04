export interface Equipment {
  id?: number;
  name: string;
  location?: string;
  status: 'ACTIVE' | 'DEACTIVATED';
  function?: string;
  sensors?: Sensor[];
}
export interface Sensor {
  id?: number;
  name: string;
  type?: string;
  threshold?: number;
  extension: string;
  equipmentData?: Equipment;
}