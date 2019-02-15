import { Component, OnInit } from '@angular/core';
import {DateService} from '../myServices/date.service'
import {ValidateService}from '../myServices/validate.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products;
  cart=[];
  date;
  cartTotal:number=0;
  constructor( private ds:DateService,private vl:ValidateService) { }

  ngOnInit() {
    this.products=[{name:"product 1",desc:"Product 1 desc",price:1000},{name:"product 2",desc:"Product 2 desc",price:2000},{name:"product 3",desc:"Product 3 desc",price:1500},{name:"product 4",desc:"Product 4 desc",price:1800},{name:"product 5",desc:"Product 5 desc",price:100}]
    this.date=this.ds.getcurdate();
  }
  addToCart(name,price){
    let item={"pname":name,"price":price}
    this.cart.push(item);
    this.cartTotal+=price;
  }
  removeFromCart(i){
    this.cartTotal-=this.cart[i].price
    this.cart.splice(i,1);
  }

}
