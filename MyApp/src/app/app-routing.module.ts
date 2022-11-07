import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './adduser/adduser.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UsersListComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add' },
  {
    path:"home",
    component:ProductlistComponent
  },{
    path:"add",
    component:AddUserComponent
  },
  {
    path:"list",
    component:UsersListComponent
  }
  , {
    path:"edit/:id",
    component:EditUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
