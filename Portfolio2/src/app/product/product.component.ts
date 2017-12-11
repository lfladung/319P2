import { Component } from '@angular/core';
import { ItemService } from '../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent
{
  finProducts: any=[];
  products: any=[];
  product: any;

  constructor(private ItemService: ItemService, private router: Router) {
    this.ItemService.getAll().subscribe(res => {
      var prod = JSON.parse(JSON.stringify(res));
      for(var i = 0; i < prod.length; i++)
      {
        if(this.router.url == "/product/" + (i + 1))
        {
          this.product = prod[i];
          this.finProducts.push(prod[i]);
        }
      }
    this.products=this.finProducts;
  })
  }

  AddToCart()
  {
    var list = JSON.parse(localStorage.getItem("Cart"));
    if(list == null){
      list = [];
    }
    list.push(this.product);
    console.log(list);
    console.log(this.product);
    localStorage.setItem("Cart", JSON.stringify(list));
  }
}
