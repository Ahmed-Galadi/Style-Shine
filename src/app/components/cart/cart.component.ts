import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  inCartProducts: Product[] = [];
  finalCount: number = 0;

  constructor(private homeservice: HomeService) {}


  ngOnInit(): void {
    this.homeservice.findCartProducts()
        .subscribe((data: Product[]) => this.inCartProducts = data);
  }

    calculate() {
    for(let product of this.inCartProducts) {
      let count = 0;

      count += product.price * product.howMany ;

      this.finalCount += count;
    }

  }



}
