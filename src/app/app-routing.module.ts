import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './views/homepage/homepage.component';
import { AboutComponent } from './views/about/about.component';
import { CreateUserComponent } from './views/create-user/create-user.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
