import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:productId', component: ProductComponent},
//{path:'**', redirectTo: '', pathMatch: 'full'}, It will direct you to home page if you type anything that doesn't exist
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
