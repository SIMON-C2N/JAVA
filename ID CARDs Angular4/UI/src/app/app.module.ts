import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {UserHomeComponent} from './user-home/user-home.component';
import {SaveddetailsComponent} from './saveddetails/saveddetails.component';
import {MyordersComponent} from './myorders/myorders.component';
import {CustomerreceiptComponent} from './customerreceipt/customerreceipt.component';
import {UserComponent} from './user/user.component';
import { IdcardselectionComponent } from './idcardselection/idcardselection.component';


const appRoutes: Routes = [
  {
    path: '',
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
    path: 'CustomerReceipt',
    component: CustomerreceiptComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    SaveddetailsComponent,
    MyordersComponent,
    CustomerreceiptComponent,
    UserComponent,
    IdcardselectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
