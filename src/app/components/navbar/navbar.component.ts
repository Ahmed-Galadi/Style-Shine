import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


    men = {type: "Men", class: "men-title", content: ["T-shitrs", "Sweatshirts", "Shorts&Pants", "Coats&Jackets", "Hats"]};
    wemen = {type: "Women", class: "wemen-title", content: ["T-shirt" , "Blouse&Shirts", "Tanks&Camis", "Outerwear&Coats"] };
    kids = {type: "Kids", class: "kids-title", content: ["Baby boy", "Baby girl"] };
    decorations = {type: "Decorations", class: "decorations-title", content: ["Party decorations", "Home decorations"] };
    beauty = {type: "Beauty", class: "beauty-title", content: ["Bracelats", "Earrings", "Rings", "Chains"] };

    listType: string = '';
    listClass: string = '';
    listContent: string[] = [];
    listIcons: string[] = []
    isHidden = true;

  searchInput = '';
  searchActive = false;

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }


  onMouseOut() {
    this.listType = '';
    this.listClass= '';
    this.listContent= [];
    this.isHidden= true;
  }

  mouseOnMan() {
    this.listType = this.men.type;
    this.listClass= this.men.class;
    this.listContent= this.men.content;
    this.isHidden= false;
  }
  mouseOnWoman() {
    this.listType = this.wemen.type;
    this.listClass= this.wemen.class;
    this.listContent= this.wemen.content;
    this.isHidden= false;
  }

  mouseOnKids(){
    this.listType = this.kids.type;
    this.listClass= this.kids.class;
    this.listContent= this.kids.content;
    this.isHidden= false;
  }

  mouseOnDecorations(){
    this.listType = this.decorations.type;
    this.listClass= this.decorations.class;
    this.listContent= this.decorations.content;
    this.isHidden= false;
  }

  mouseOnBeauty(){
    this.listType = this.beauty.type;
    this.listClass= this.beauty.class;
    this.listContent= this.beauty.content;
    this.isHidden= false;
  }


  onSearch() {
   if (this.searchInput !== '') {
     this.searchActive = true;

   } else if (this.searchInput === '') {
     this.searchActive = false;
   }
  }

  goToCart() {
    this.router.navigate(["/cart"]);
  }
}
