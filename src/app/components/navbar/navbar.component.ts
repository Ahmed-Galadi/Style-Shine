import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchInput = '';
  searchActive = false;

  constructor() { }

  ngOnInit(): void {
  }


  onSearch() {
   if (this.searchInput !== '') {
     this.searchActive = true;

   } else if (this.searchInput === '') {
     this.searchActive = false;
   }
  }
}
