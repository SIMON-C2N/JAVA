import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent  } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { DeliverHomeComponent } from './deliver-home/deliver-home.component';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard'; 
import { UserComponent } from './user/user.component';
import { MyordersComponent} from './myorders/myorders.component';
import {CustomerreceiptComponent} from './customerreceipt/customerreceipt.component';
import { IdcardselectionComponent } from './idcardselection/idcardselection.component';
import {SaveddetailsComponent} from './saveddetails/saveddetails.component';
import { DbComponent } from './db/db.component';
import { RegisterService } from './register.service';
import { LoginService } from './login.service';
import { CartComponent } from './cart/cart.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';


const appRoutes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full'  },
{ path: 'login',    component:        LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'adminHome',
canActivate : [ AuthguardGuard ],

component: AdminHomeComponent },
{ path: 'deliverHome', component: DeliverHomeComponent },
{ path: 'userHome', component: UserHomeComponent },
{
  path: 'userHome',
  component: UserHomeComponent
},
{
  path: '',
  component: UserComponent
 },
 {
   path: 'user',
   component: UserComponent
 },
{
  path: 'Home',
  component: UserHomeComponent
},
{
  path: 'IdCardSelection',
  component: IdcardselectionComponent
},
{
  path: 'SavedDetails',
  component: SaveddetailsComponent
},
{
  path: 'MyOrders',
  component: MyordersComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: 'CustomerReceipt',
  component: CustomerreceiptComponent
}
  ]; @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
   RegisterComponent,
   AdminHomeComponent,
   UserHomeComponent,
   DeliverHomeComponent,
   UserComponent,
   MyordersComponent,
   CustomerreceiptComponent,
   SaveddetailsComponent,
   IdcardselectionComponent,
   DbComponent,
   CartComponent
 ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(  appRoutes, { enableTracing: true }  )
  ],
  providers: [ UserService ,AuthguardGuard,RegisterService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
