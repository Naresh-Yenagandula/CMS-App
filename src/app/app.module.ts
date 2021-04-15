import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { NavbarComponent } from './defaults/navbar/navbar.component';
import { FooterComponent } from './defaults/footer/footer.component';
import { AddCategoriesComponent } from './categories/add-categories/add-categories.component';
import { UpdateCategoriesComponent } from './categories/update-categories/update-categories.component';
import { DeleteCategoriesComponent } from './categories/delete-categories/delete-categories.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { DeletePageComponent } from './pages/delete-page/delete-page.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { GetPagesComponent } from './pages/get-pages/get-pages.component';
import { GetCategoriesComponent } from './categories/get-categories/get-categories.component';
import { GetUsersComponent } from './users/get-users/get-users.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { GetProfileComponent } from './profile/get-profile/get-profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagesComponent,
    CategoriesComponent,
    UsersComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    AddCategoriesComponent,
    UpdateCategoriesComponent,
    DeleteCategoriesComponent,
    AddPageComponent,
    UpdatePageComponent,
    DeletePageComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    GetPagesComponent,
    GetCategoriesComponent,
    GetUsersComponent,
    ProfileComponent,
    EditProfileComponent,
    GetProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
