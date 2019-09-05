import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getSamsungProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/getSamsungProducts`);
  }

  getIphoneProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/getIphoneProducts`);
  }
}
