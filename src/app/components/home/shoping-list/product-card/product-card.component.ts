import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  product!: Product;
  showBuyButton: boolean = false;
  howMany: number = 1;
  cartProduct: Product[] = []

  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.product = this.homeservice.sharedProduct;
  }

  addToCart(product: Product = this.product) {
    this.homeservice.addToCart(product)
        .subscribe(addedProduct => this.cartProduct.push(addedProduct))
  }

  buyButton() {
    this.showBuyButton = !this.showBuyButton;
    this.howMany = 1;
    this.addToCart();
  }

  plus() {
    this.howMany++;
  }
  minus() {
    this.howMany--;
        if(this.howMany <= 0) {
      this.showBuyButton = false;
    } else {
      this.showBuyButton = true;
    };
  }
}
