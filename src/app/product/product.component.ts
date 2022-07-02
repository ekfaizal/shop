import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor(private ProductsService:ProductsService) { }

  loadProducts(){
    this.ProductsService.getAllProducts().subscribe((productData:any)=>{
      this.Products=productData;
    })
  }
  Products:any[]=[]

  ngOnInit(): void {
    this.loadProducts()
  }
}
