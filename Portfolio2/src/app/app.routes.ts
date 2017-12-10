import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    {path: '', redirectTo: 'shop/1', pathMatch: 'full'},
    {path: 'shop/:categoryID?', component: ShopComponent},
    {path: 'profile/:profileID?', component: ProfileComponent},
    {path: 'product/:productID?', component: ProductComponent},
    {path: 'cart', component: CartComponent},
    {path: 'login', component: LoginComponent}
]