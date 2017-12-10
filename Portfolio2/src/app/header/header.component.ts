import { Component } from '@angular/core';
import { CategoryService } from '../services/categories.service';
import { ShopComponent } from '../shop/shop.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent 
{
    Profile: any;

    categories: any=[];
    Cart: any={ID:1};
    constructor(private CategoryService : CategoryService, private router:Router) {
        this.Profile = JSON.parse(localStorage.getItem("User"));
        this.CategoryService.getAll().subscribe(res => {
            this.categories = res;
        })
    }
}
