import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductListingComponent } from './product-listing/product-listing.component';


export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "signin", component: SigninComponent},
    { path: "signup", component: SignupComponent},
    { path: "categories", component: CategoriesComponent},
    { path: "product-list/:id", component: ProductListingComponent},
];
