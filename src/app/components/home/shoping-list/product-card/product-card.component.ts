import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  product: Product = {
     id: 0,
    img: "",
    for: "",
    type: "",
    price: 0,
    wishlist: false,
    inbag: false,
    instock: 0
  };

  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.product = this.homeservice.variable;
  }

}
