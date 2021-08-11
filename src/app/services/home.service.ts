import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

   productsUrl: string = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) { }

  findAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  buyProduct(id: number, instock: number) {
    return this.http.patch(`${this.productsUrl}${id}`, {inbag: true, instock: instock - 1 })
  }

  addToWishlist(id: number, wishlist: boolean) {
    return this.http.patch(`${this.productsUrl}${id}`, {wishlist: !wishlist})
  }

  findProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}${id}`)
  }

}
