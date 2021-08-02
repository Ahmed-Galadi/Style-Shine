import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {

  products: Product[] = [];
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


  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.findAll()
        .subscribe((data: Product[]) => this.products = data);
  }

  wishlist(product: Product) {
    this.homeService.addToWishlist(product.id, product.wishlist)
        .subscribe(() => {
          product.wishlist = !product.wishlist;
        })
  }

  getProduct(product: Product) {
    this.homeService.findProduct(product.id)
        .subscribe((data: Product) => this.product = data);
  }


}


