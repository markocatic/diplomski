import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/shared/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactAdminService {
  private path = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.path}/getContacts`);
  }
  getAnswered(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.path}/getAnswers`);
  }
  contactAnswer(id: number): Observable<number> {
    return this.http.post<number>(`${this.path}/contactAnswer`, id);
  }
  deleteContact(id: number): Observable<number> {
    return this.http.post<number>(`${this.path}/deleteContact`, id);
  }
}
