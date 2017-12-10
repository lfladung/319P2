import { Component } from '@angular/core';
import { CategoryService } from '../services/categories.service';
import { ShopComponent } from '../shop/shop.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent
{
    categories: any=[];
    Cart: any={ID:1};
    signedin: any;
    constructor(private CategoryService : CategoryService) {
        this.CategoryService.getAll().subscribe(res => {
            this.categories = res;
        });
        this.signedin = localStorage.getItem("User");
    }
}
