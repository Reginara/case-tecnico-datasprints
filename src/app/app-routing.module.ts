import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './views/homepage/homepage.component';
import { AboutComponent } from './views/about/about.component';
import { CreateUserComponent } from './components/registration/create-user/create-user.component';
import { UserUpdateComponent } from './components/registration/user-update/user-update.component';
import { UserDeleteComponent } from './components/registration/user-delete/user-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "createUser",
    component: CreateUserComponent
  },
  {
    path: "userUpdate/:id",
    component: UserUpdateComponent
  },
  {
    path: "delete/:id",
    component: UserDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
