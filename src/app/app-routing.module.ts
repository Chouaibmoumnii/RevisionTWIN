import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowShppingComponent } from './show-shpping/show-shpping.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {UpdateProductComponent} from "./update-product/update-product.component";
import {ChildComponent} from "./child/child.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [ {
  path: 'add', component: AddProductComponent },
{ path: 'home', component: HomeComponent },
{ path: 'cart', component: ShowShppingComponent },
{ path: 'modifier/:productId', component: UpdateProductComponent },
{ path: 'details/:productId', component: DetailsComponent },
  { path: 'test', component: TestComponent ,children:[
      { path: 'add', component: AddProductComponent },
      { path: 'child', component: ChildComponent },
    ]},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
