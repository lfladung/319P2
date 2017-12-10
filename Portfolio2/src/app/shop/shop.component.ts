import { Component, ViewChild, ElementRef } from '@angular/core';
import { ItemService, } from '../services/items.service';
import { User } from '../../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html'
})

export class ShopComponent
{
  items: any=[];
    constructor(private ItemService: ItemService, private fb: FormBuilder) {
      this.ItemService.getAll().subscribe(res => {
          this.items = res;
      })
    }
}
