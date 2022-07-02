import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetialsComponent,
    LoginComponent,
    CartComponent,
  ],
  imports: [
    NzFormModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzInputModule,
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    BrowserModule,
    AppRoutingModule,
    NzMenuModule,
    NzGridModule,
    HttpClientModule,
    NzCardModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
