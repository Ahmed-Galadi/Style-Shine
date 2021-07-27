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

}
