import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  hide: boolean = true;
  inCartProducts: Product[] = [];
  finalCount: number = 0;

  constructor(private cartservice: CartService) {}


  ngOnInit(): void {
    this.cartservice.findCartProducts()
        .subscribe((data: Product[]) => this.inCartProducts = data);
    this.cartservice.findCartProducts().subscribe((data: Product[]) => {
      for(let product of data) {
        this.finalCount += product.price * product.howMany }});
     this.epmtyList();
  }

  producDeleted(id: number | any) {
    for(let product of this.inCartProducts) {
      if(product.id === id) {
        this.finalCount -= product.price * product.howMany;
      }
    }
  }

  epmtyList() {
    setTimeout(() => {
      if(this.finalCount === 0) {
        this.hide = false;
      } else {
        this.hide = true;
      }

    }, 600);
  }


  removeProduct(id: number | any): void {
    this.cartservice.deleteCartProducts(id)
        .subscribe(() => {
          this.inCartProducts = this.inCartProducts.filter( product => product.id !== id );});
    this.producDeleted(id);
    this.epmtyList();
  }

 minus(product: Product) {
   this.cartservice.howManyMinus(product.id, product.howMany)
       .subscribe(() => product.howMany -= 1);
 }

 plus(product: Product) {
   this.cartservice.howManyPlus(product.id, product.howMany)
       .subscribe(() => product.howMany += 1);
 }



}
