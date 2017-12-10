import { Component, ElementRef, ViewChild } from '@angular/core';
import { ItemService } from '../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html'
})

export class ShopComponent
{
  items: any=[];
  Cart: any={ID:1};
  finItems: any=[];

  constructor(private ItemService: ItemService, private router: Router) {
    this.ItemService.getAll().subscribe(res => {
      var info = JSON.parse(JSON.stringify(res));
      for(var i = 0; i < info.length; i++)
      {
        for(var j = 1; j < 5; j++)
        {
          if(this.router.url == "/shop/" + j && info[i].category == j)
          {
            console.log(info[i]);
            this.finItems.push(info[i]);
          }
        }
      }
      this.items=this.finItems;
    })
  }

  handlePageChange()
  {
    this.ItemService.getAll().subscribe(res => {
      var info = JSON.parse(JSON.stringify(res));
      for(var i = 0; i < info.length; i++)
      {
        for(var j = 1; j < 5; j++)
        {
          if(this.router.url == "/shop/" + j && info[i].category == j)
          {
            console.log(info[i]);
            this.finItems.push(info[i]);
          }
        }
      }
      this.items=this.finItems;
    })
  }
}
