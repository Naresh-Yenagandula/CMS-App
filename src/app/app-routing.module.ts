import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { GetPagesComponent } from './pages/get-pages/get-pages.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { AddCategoriesComponent } from './categories/add-categories/add-categories.component';
import { UpdateCategoriesComponent } from './categories/update-categories/update-categories.component';
import { GetCategoriesComponent } from './categories/get-categories/get-categories.component';
import { GetUsersComponent } from './users/get-users/get-users.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { GetProfileComponent } from './profile/get-profile/get-profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { AuthGuardService } from './auth-guard.service';
import {DeletePageComponent} from './pages/delete-page/delete-page.component';
import {DeleteCategoriesComponent} from './categories/delete-categories/delete-categories.component';
import {DeleteUserComponent} from "./users/delete-user/delete-user.component";
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'pages', component: PagesComponent,
    children: [
      {path:'',component:GetPagesComponent},
      { path: 'get/:no', component: GetPagesComponent },
      { path: 'addPage', component: AddPageComponent },
      { path: 'updatePage/:id', component: UpdatePageComponent },
      {path:'deletePage/:id',component:DeletePageComponent}
    ]
  },
  {
    path: 'categories', component: CategoriesComponent,
    children: [
      { path: '', component: GetCategoriesComponent },
      { path: 'addCategory', component: AddCategoriesComponent },
      { path: 'updateCategory/:id', component: UpdateCategoriesComponent },
      {path: 'deleteCategory/:id',component:DeleteCategoriesComponent}
    ]
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGuardService], data: { expectedRole: 'Admin' },
    children: [
      { path: '', component: GetUsersComponent },
      { path: 'get/:no', component: GetUsersComponent },
      { path: 'addUser', component: AddUserComponent, canActivate: [AuthGuardService], data: { expectedRole: 'Admin' } },
      { path: 'updateUser/:id', component: UpdateUserComponent, canActivate: [AuthGuardService], data: { expectedRole: 'Admin' } },
      {path:'deleteUser/:id',component:DeleteUserComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile', component: ProfileComponent,
    children: [
      { path: 'edit', component: EditProfileComponent },
      { path: '', component: GetProfileComponent },
      { path: 'changePassword', component: ChangePasswordComponent }]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
