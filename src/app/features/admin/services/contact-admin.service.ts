import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/shared/models/contact.model';
import { Messages } from 'src/app/shared/models/messages.model';

@Injectable({
  providedIn: 'root'
})
export class ContactAdminService {
  private path = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getContacts(): Observable<Messages[]> {
    return this.http.get<Messages[]>(`${this.path}/getContacts`);
  }
  getAnswered(): Observable<Messages[]> {
    return this.http.get<Messages[]>(`${this.path}/getAnswers`);
  }
  contactAnswer(id: number): Observable<number> {
    return this.http.post<number>(`${this.path}/contactAnswer`, id);
  }
  deleteContact(id: number): Observable<number> {
    return this.http.post<number>(`${this.path}/deleteContact`, id);
  }
}
