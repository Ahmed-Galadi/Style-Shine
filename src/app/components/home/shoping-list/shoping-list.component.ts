import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {

  products: Product[] = [];
  product!: Product;


  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.homeService.findAllProducts()
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

  goToCard() {
    this.homeService.sharedProduct = this.product;
    this.router.navigate(["/product-card"]);
  }
}


