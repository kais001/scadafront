export interface CommandResponse {
  id: number;
  command: string;
  equipmentId: string;
  status: string;
  responseMessage?: string;
  timestamp: string;
  userId: number;
  userEmail: string;
  userFirstName: string;
  userLastName: string;
}
