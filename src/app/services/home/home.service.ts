import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public sharedProduct!: Product;

   productsUrl: string = 'http://localhost:3000/products/';
   CartUrl: string = 'http://localhost:3000/bag/';

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

  findCartProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.CartUrl);
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

}
