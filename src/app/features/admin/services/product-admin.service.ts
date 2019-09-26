import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductAdminService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  deleteProduct(id: number) {
    return this.http.post<number>(`${this.baseUrl}/deleteProduct`, id);
  }

  saveProduct(image: FormData) {
    console.log(image.get('image'), 'image');
    // debugger;
    return this.http.post<number>(`${this.baseUrl}/saveProduct`, image);
  }

  updateProduct(image: FormData, id: number) {
    return this.http.post<number>(`${this.baseUrl}/updateProduct/${id}`, image);
  }
}
