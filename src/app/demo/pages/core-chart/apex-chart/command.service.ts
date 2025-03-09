import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandResponse } from 'src/app/theme/shared/command-response';

@Injectable({
  providedIn: 'root',
})
export class CommandService {
  private apiUrl = 'http://localhost:8080/actuator/info/api/commands';

  constructor(private http: HttpClient) {}

  getCommandById(id: number): Observable<CommandResponse> {
    return this.http.get<CommandResponse>(`${this.apiUrl}/${id}`);
  }

  getAllCommands(): Observable<CommandResponse[]> {
    return this.http.get<CommandResponse[]>(this.apiUrl);
  }

  addCommand(command: CommandResponse): Observable<CommandResponse> {
    return this.http.post<CommandResponse>(`${this.apiUrl}/add`, command);
  }

  deleteCommand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
