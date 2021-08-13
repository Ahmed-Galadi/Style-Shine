import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { HomeService } from 'src/app/services/home.service';
import { ProductInfoService } from 'src/app/services/product-info.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {

  products: Product[] = [];
  selectedProductId!: number;


  constructor(private homeService: HomeService,
              private productinfo: ProductInfoService,
              private router: Router) { }

  ngOnInit(): void {
    this.homeService.findAllProducts()
        .subscribe((data: Product[]) => {
          this.products = data;
        })
  }

  wishlist(product: Product) {
    this.homeService.addToWishlist(product.id, product.wishlist)
        .subscribe(() => {
          product.wishlist = !product.wishlist;
        })
  }

  getProduct(product: Product) {
    this.selectedProductId = product.id;
  }

  sendToProductInfo() {
    this.productinfo.productId = this.selectedProductId;
    setTimeout(() => {
      this.router.navigate(['/product-info']);
    }, 500);
  }
}


