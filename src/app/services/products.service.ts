import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'https://fakestoreapi.com';
  constructor(private data: HttpClient) {}

  getAllProducts() {
    return this.data.get(`${this.url}/products`);
  }

  // getProduct(prodid:string){
  // return this.data.get(`${this.url}/products/${prodid}`)
  // }
     
  getProduct(prodID:string){
    return this.data.get(`${this.url}/products/${prodID}`)
    
  }
}
