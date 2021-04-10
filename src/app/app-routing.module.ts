import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages/pages.component';
import {CategoriesComponent} from './categories/categories.component';
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './login/login.component';

const routes:Routes=[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'pages',component:PagesComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'users',component:UsersComponent},
  {path:'login',component:LoginComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
