import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  stop: boolean = false;
  inCartProducts: Product[] = [];
  finalCount: number = 0;

  constructor(private cartservice: CartService) {}


  ngOnInit(): void {
    this.cartservice.findCartProducts()
        .subscribe((data: Product[]) => this.inCartProducts = data);
    this.cartservice.findCartProducts().subscribe((data: Product[]) => {
      for(let product of data) {
        this.finalCount += product.price * product.howMany;
      }
    })
  }


  removeProduct(id: number | any): void {
    this.cartservice.deleteCartProducts(id)
        .subscribe(() => {
          this.inCartProducts = this.inCartProducts.filter( product => product.id !== id )});
    this.producDeleted(id);

  }

  producDeleted(id: number | any) {
    for(let product of this.inCartProducts) {
      if(product.id === id) {
        this.finalCount -= product.price * product.howMany;
      }
    }
  }



}
