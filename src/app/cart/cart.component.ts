import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cardData11:any[]=[]
totalPrice:number=0
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    console.log(this.cardData11)
    this.loadData()
  }
  loadData(){
    this.cardData11=this.cart.getProductToCart()
    this.calculate()
  }
  calculate(){
    this.totalPrice=0
    for(let singlePrice of this.cardData11){
      this.totalPrice=this.totalPrice+singlePrice.price
    }
  }
  deletes(id:any){
    var dt=this.cart.addToCart.filter((singleDat:any)=>{
      return singleDat.id !==id
    })
    this.cart.addToCart=dt
    this.loadData();
  }
}
