import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  CartUrl: string = 'http://localhost:3000/bag/';

  constructor(private http: HttpClient) { }

    findCartProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.CartUrl)
  }

  addToCart(product: Product) {
    return this.http.post<Product>(this.CartUrl, product);
  }

  howManyPlus(id: number, howMany: number) {
    return this.http.patch(`${this.CartUrl}${id}`, { howMany: howMany + 1})
  }

  howManyMinus(id: number, howMany: number) {
    return this.http.patch(`${this.CartUrl}${id}`, { howMany: howMany - 1})
  }

  deleteCartProducts(id: number | any): Observable<{}> {
    return this.http.delete(`${this.CartUrl}${id}`);
  }

}
