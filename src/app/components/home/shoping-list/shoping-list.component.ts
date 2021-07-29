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
}


