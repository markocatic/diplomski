import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { Cart } from 'src/app/shared/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private baseUrl = 'http://localhost:8000/api';
  private _refreshNavigation = new ReplaySubject<boolean>();
  refreshNavigation$ = this._refreshNavigation.asObservable();

  constructor(private http: HttpClient) {}

  getSamsungProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/getSamsungProducts`);
  }

  getIphoneProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/getIphoneProducts`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/getAllProducts`);
  }

  getCartItems(id: number): Observable<Cart[]> {
    return this.http.post<Cart[]>(`${this.baseUrl}/getUserCart`, id);
  }

  addCartItem(user_id: number, product_id: number, quantity: number): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/additemtocart`, { user_id, product_id, quantity });
  }

  deleteCartItem(id: number): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/deleteItemFromCart`, id);
  }

  toRefreshNavigation(refresh: boolean) {
    this._refreshNavigation.next(refresh);
  }

  getOneProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/getOneProduct/${id}`);
  }

  getWishlist(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/userList/${id}`);
  }

  insertWishlist(user_id: number, product_id): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/insert`, { user_id, product_id });
  }

  deleteWishList(product_id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/delete`, product_id);
  }
}
