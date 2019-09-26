import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsAdminService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/getOrders`);
  }

  deleteOrder(orderId: number): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/deleteOrder`, orderId);
  }
}
