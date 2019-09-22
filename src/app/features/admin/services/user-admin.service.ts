import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8000/api';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getUsers`);
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/getOne/${id}`);
  }

  deleteUser(id: number): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/userDelete`, id);
  }

  updateUser(id: number, name: string, email: string, password: string, role_id?: number): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/update/${id}`, { name, email, password, role_id });

    // else {
    //   return this.http.post<number>(`${this.baseUrl}/update/${id}`, { name, email, password });
    // }
  }

  save(name: string, email: string, password: string, role_id: number): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/save`, { name, email, password, role_id });
  }
}
