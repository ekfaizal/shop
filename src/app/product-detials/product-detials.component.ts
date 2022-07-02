import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.css'],
})
export class ProductDetialsComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private Cartservice: CartService,
    private cart: CartService,
    private router: Router
  ) {}
  prodID: string | null = '';
  product: any = {};
  cardData: any[] = [];
  productDetail:any={};
  addProduct() {
    this.cart.addProductToCart({ ...this.productDetail });
    this.router.navigate(['../cart']);
    console.log(this.product)
  }
  ngOnInit(): void {
   
    this.cardData = this.Cartservice.getProductToCart();
    this.prodID = this.route.snapshot.paramMap.get('id');
    if (this.prodID != null) {
      this.productService.getProduct(this.prodID).subscribe((data) => {
        this.productDetail = data;
        console.log(data)
      });
    }
    
  }

}
