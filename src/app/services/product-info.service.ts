import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  productInfoUrl: string = "http://localhost:3000/product-info/";

  constructor(private http: HttpClient) { }

  getProductInfo(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productInfoUrl);
  }

  addToProductInfo(product: Product) {
    return this.http.put(`${this.productInfoUrl}${product.id}`, product);
  }
}
