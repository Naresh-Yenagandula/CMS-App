import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages/pages.component';
import {CategoriesComponent} from './categories/categories.component';
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './login/login.component';
import {AddPageComponent} from './pages/add-page/add-page.component';
import {UpdatePageComponent} from './pages/update-page/update-page.component';
import {GetPagesComponent} from './pages/get-pages/get-pages.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {UpdateUserComponent} from './users/update-user/update-user.component';
import {AddCategoriesComponent} from './categories/add-categories/add-categories.component';
import { UpdateCategoriesComponent } from './categories/update-categories/update-categories.component';
import {GetCategoriesComponent} from './categories/get-categories/get-categories.component';
import {GetUsersComponent} from './users/get-users/get-users.component';

const routes:Routes=[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'pages',component:PagesComponent,
    children:[
      {path:'',component:GetPagesComponent},
      {path:'addPage',component:AddPageComponent},
      {path:'updatePage',component:UpdatePageComponent}
    ]},
  {path:'categories',component:CategoriesComponent,
    children:[
      {path:'',component:GetCategoriesComponent},
      {path:'addCategory',component:AddCategoriesComponent},
      {path:'updateCategory',component:UpdateCategoriesComponent}
    ]},
  {path:'users',component:UsersComponent,
    children:[
      {path:'',component:GetUsersComponent},
      {path:'addUser',component:AddUserComponent},
      {path:'updateUser',component:UpdateUserComponent}
    ]},
  {path:'login',component:LoginComponent},
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
