import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { AddUserComponent } from './adduser/adduser.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './Child/Child.component';
import { Cmp } from './cmp/cmp.component';
import { DemoComponent } from './Demo/Demo.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ParentComponent } from './Parent/Parent.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { TestComponent } from './test/test.component';
import { UploadComponent } from './upload/upload.component';
import { UsersListComponent } from './userlist/userlist.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    ProductlistComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    ReactiveComponent,
    TestComponent,
    ParentComponent,
    ChildComponent,
    Cmp,
    DemoComponent,
    FileUploadComponent,
    UploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFileUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
