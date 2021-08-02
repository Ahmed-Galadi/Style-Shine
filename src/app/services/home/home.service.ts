import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

   url: string = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) { }

  findAll():Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  buyProduct(id: number, instock: number) {
    return this.http.patch(`${this.url}${id}`, {inbag: true, instock: instock - 1 })
  }

  addToWishlist(id: number, wishlist: boolean) {
    return this.http.patch(`${this.url}${id}`, {wishlist: !wishlist})
  }

  findProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}${id}`)
  }

}
