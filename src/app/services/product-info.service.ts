import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  productInfoUrl: string = "http://localhost:3000/products/";
  productId!: number;

  constructor(private http: HttpClient) { }

  getProductInfo(): Observable<Product> {
    return this.http.get<Product>(`${this.productInfoUrl}${this.productId}`);
  }

}
