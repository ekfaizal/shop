import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
{ path :'' , component :ProductComponent } ,
{ path :'products/:id' , component :ProductDetialsComponent } ,
{ path :'cart' , component :CartComponent } ,
{ path :'login' , component :LoginComponent } ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
