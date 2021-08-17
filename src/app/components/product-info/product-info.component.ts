import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductInfoService } from 'src/app/services/product-info.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  toggleAddToCart: boolean = false;
  blankProduct: Product = {
      "id": 0,
      "img": "",
      "for": "",
      "type": "",
      "price": 0,
      "howMany": 0,
      "wishlist": false,
      "inbag": false,
      "instock": 0
    };

  sharedProduct: Product = this.blankProduct;
  howmanyInput: number = 0;

  constructor(private productinfo: ProductInfoService,
              private cartservice: CartService,
              private router: Router) { }

  ngOnInit(): void {
     this.productinfo.getProductInfo()
        .subscribe((data: Product) => {
          this.sharedProduct = data;
        });
    setTimeout(() => {
      if(this.sharedProduct === this.blankProduct) {
        this.router.navigate(['/']);
      }
    }, 500);
  }

  onAddToCard(product: Product) {
    this.cartservice.addToCart(product)
        .subscribe(() => this.howmanyInput += 1);
    this.plus(product);
    this.toggleAddToCart = true;
  }

  plus(product: Product) {
    this.cartservice.howManyPlus(product.id, product.howMany)
        .subscribe(() => product.howMany += 1);
  }

  minus(product: Product) {
    if (product.howMany <= 1) {
      this.cartservice.deleteCartProducts(product.id)
        .subscribe(() => this.howmanyInput -= 1);
      this.toggleAddToCart = false;
      } else {
        this.cartservice.howManyMinus(product.id, product.howMany)
            .subscribe(() => product.howMany -= 1);
      }
  }

  inputHowmany(product: Product) {
    this.cartservice.inputHowmany(product.id, product.howMany)
        .subscribe(() => product.howMany = this.howmanyInput);
  }
}
