import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerIndexComponent } from './customer/customer-index/customer-index.component';
import { CustomerviewComponent } from './customer/customerview/customerview.component';
import { CustomercreateComponent } from './customer/customercreate/customercreate.component';
import { CustomerupdateComponent } from './customer/customerupdate/customerupdate.component';
import { CustomerdeleteComponent } from './customer/customerdelete/customerdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerIndexComponent,
    CustomerviewComponent,
    CustomercreateComponent,
    CustomerupdateComponent,
    CustomerdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }