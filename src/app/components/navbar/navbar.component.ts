import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


    men = {type: "Men", class: "men-title", content: ["T-shitrs", "Sweatshirts", "Shorts&Pants", "Coats&Jackets", "Hats"] };
    wemen = {type: "Women", class: "wemen-title", content: ["T-shirt" , "Blouse&Shirts", "Tanks&Camis", "Outerwear&Coats"] };
    kids = {type: "Kids", class: "kids-title", content: ["Baby boy", "Baby girl"] };

    listType: string = '';
    listClass: string = '';
    listContent: string[] = [];
    isHidden = true;

  searchInput = '';
  searchActive = false;

  constructor() { }

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

  mouseOnDecorations(){}

  mouseOnBeauty(){}


  onSearch() {
   if (this.searchInput !== '') {
     this.searchActive = true;

   } else if (this.searchInput === '') {
     this.searchActive = false;
   }
  }
}
