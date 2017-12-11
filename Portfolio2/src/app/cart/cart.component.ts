import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent
{
  cart: any=[];
  constructor(){
    this.cart = JSON.parse(localStorage.getItem("Cart"));
    console.log(this.cart);
    console.log(this.cart[0].name);
  }

  buy(){
    var user = JSON.parse(localStorage.getItem("User"));
    this.cart = JSON.parse(localStorage.getItem("Cart"));
    var price = 0;
    if(user.inventory == null){
      user.inventory = [];
    }
    for(var i = 0; i<this.cart.length;i++){
      price += this.cart[i].price;
    }
    if(user.Cash >= price){
      for(var i = 0; i<this.cart.length;i++){
        user.inventory.push(this.cart[i]);
      }
      user.Cash -= price;
      localStorage.setItem("Cart", null);
    }
    localStorage.setItem("User", JSON.stringify(user));
  }
}
