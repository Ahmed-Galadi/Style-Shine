import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/home/shoping-list/product-card/product-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  },
  { path: 'product-card', component: ProductCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
