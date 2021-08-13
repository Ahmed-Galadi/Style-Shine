import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductInfoService } from 'src/app/services/product-info.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {


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
              private cartservice: CartService) { }

  ngOnInit(): void {
    this.productinfo.getProductInfo()
        .subscribe((data: Product) => {
          this.sharedProduct = data;
        })
  }

  onAddToCard(product: Product) {
    this.cartservice.addToCart(product)
        .subscribe();
    this.howmanyInput = this.sharedProduct.howMany;
  }

  plus() {
    this.cartservice.howManyPlus(this.sharedProduct.id, this.sharedProduct.howMany)
        .subscribe(() => this.sharedProduct.howMany += 1);
  }

}
