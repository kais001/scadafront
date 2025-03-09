export interface CommandResponse {
    id?: number;
    command: 'Start' | 'Stop';
    equipmentId: string;
    status: 'Start' | 'Stop';
    responseMessage: string;
    timestamp: string;
    userId: number;
    userEmail: string;
    userFirstName: string;
    userLastName: string;
  }
  