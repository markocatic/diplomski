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

  saveProduct(
    brand_id: number,
    name: string,
    description: string,
    description_short: string,
    price: number,
    new_item: number,
    image: FormData
  ) {
    return this.http.post<number>(`${this.baseUrl}/saveProduct`, {
      brand_id,
      name,
      description,
      description_short,
      price,
      new_item,
      image
    });
  }
}
