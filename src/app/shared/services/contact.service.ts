import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private path = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getContactInfo() {
    return this.http.get(`${this.path}/info`);
  }

  putContact(data): Observable<Object> {
    return this.http.post<Object>(`${this.path}/contact`, data);
  }
}
