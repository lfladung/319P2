import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { CategoryService } from './services/categories.service'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './services/users.service';
import { ItemService } from './services/items.service';
import { routes } from './app.routes';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CashComponent } from './cash/cash.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ShopComponent,
    ProductComponent,
    ProfileComponent,
    CartComponent,
    LoginComponent,
    AppComponent,
    CashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService,
    ItemService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
