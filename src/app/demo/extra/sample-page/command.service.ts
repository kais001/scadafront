// command.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandResponse } from 'src/app/theme/shared/alarm.model'; // Import Alarm model

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private apiUrl = 'http://localhost:8082/actuator/info/api/commands'; // Backend URL

  constructor(private http: HttpClient) {}

  // Get all command responses
  getAllCommands(): Observable<CommandResponse[]> {
    return this.http.get<CommandResponse[]>(`${this.apiUrl}`);
  }

  // Get command response by ID
  getCommandById(id: number): Observable<CommandResponse> {
    return this.http.get<CommandResponse>(`${this.apiUrl}/${id}`);
  }

  // Add a new command response
  addCommand(commandResponse: CommandResponse): Observable<CommandResponse> {
    return this.http.post<CommandResponse>(`${this.apiUrl}/add`, commandResponse);
  }

  // Delete a command response by ID
  deleteCommand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
