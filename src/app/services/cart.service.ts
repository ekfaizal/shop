import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

addToCart:any=[]



  constructor() { }

  addProductToCart(prod:any){
    this.addToCart.push(prod)
  }
  
  getProductToCart(){
    return this.addToCart
  }
}
