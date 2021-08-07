import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  product!: Product;
  showBuyButton: boolean = false;
  howMany: number = 0;
  cartProduct: Product[] = [];


  constructor(private homeservice: HomeService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.product = this.homeservice.sharedProduct;
  }

  addToCart(product: Product = this.product) {
    this.cartservice.addToCart(product)
        .subscribe(addedProduct => this.cartProduct.push(addedProduct))
  }

  buyButton(product: Product = this.product) {
    this.addToCart();
    this.cartservice.howManyPlus(product.id, product.howMany)
        .subscribe(() => this.product.howMany += 1);
     this.howMany++;
    this.showBuyButton = !this.showBuyButton;
  }

  plus(product: Product = this.product) {
    this.cartservice.howManyPlus(product.id, product.howMany)
        .subscribe(() => this.product.howMany += 1);

    this.howMany++;
  }

  minus(product: Product = this.product) {
    this.cartservice.howManyMinus(product.id, product.howMany)
        .subscribe(() => this.product.howMany -= 1);

    this.howMany--;
        if(this.howMany <= 0) {
      this.showBuyButton = false;
    } else {
      this.showBuyButton = true;
    };
  }
}
