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

  constructor(private ItemService: ItemService, private router: Router) {
    this.ItemService.getAll().subscribe(res => {
      var prod = JSON.parse(JSON.stringify(res));
      for(var i = 0; i < prod.length; i++)
      {
        if(this.router.url == "/product/" + (i + 1))
        {
          console.log(prod[i]);
          this.finProducts.push(prod[i]);
        }
      }
    this.products=this.finProducts;
  })
  }

  purchase()
  {

  }
}