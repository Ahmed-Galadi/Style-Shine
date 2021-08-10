import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  blankProduct: Product = {
    id: 0,
    img: "",
    for: "",
    type: "",
    price: 0,
    howMany: 0,
    wishlist: false,
    inbag: false,
    instock: 10
  }

  product: Product = this.blankProduct;
  showBuyButton: boolean = false;
  howManyInput: number = this.product.howMany;
  cartProduct: Product[] = [];


  constructor(private homeservice: HomeService,
              private cartservice: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.product = this.homeservice.sharedProduct;
  }



  addToCart() {
    this.cartservice.addToCart(this.product)
        .subscribe(addedProduct => this.cartProduct.push(addedProduct));
    this.howManyInput = this.product.howMany;
  }

  buyButton() {
    this.addToCart();
    this.cartservice.howManyPlus(this.product.id, this.product.howMany)
        .subscribe(() => this.product.howMany += 1);
    if(this.product.howMany === 0) {
      this.howManyInput++;
    }

    this.showBuyButton = !this.showBuyButton;
  }

  plus() {
    this.cartservice.howManyPlus(this.product.id, this.product.howMany)
        .subscribe(() => this.product.howMany += 1);

    this.howManyInput++;
  }

  minus() {
    this.cartservice.howManyMinus(this.product.id, this.product.howMany)
        .subscribe(() => this.product.howMany -= 1);
    this.howManyInput--;
        if(this.howManyInput <= 0) {
      this.showBuyButton = false;
      this.cartservice.deleteCartProducts(this.product.id)
        .subscribe(() => {
        this.cartProduct = this.cartProduct.filter(product => product.id !== this.product.id );})
    } else {
      this.showBuyButton = true;
    };


  }
}
