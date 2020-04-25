import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserAccountRoutes } from './UserAccount.routing';
import { AccountComponent } from './Account/Account.component';
import { ProfileComponent } from './Profile/Profile.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { CardsComponent } from './Cards/Cards.component';
import { AddressComponent } from './Address/Address.component';
import { OrderHistoryComponent } from './OrderHistory/OrderHistory.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserAccountRoutes),
    SharedModule
  ],
  declarations: [
    AccountComponent,
    ProfileComponent,
    EditProfileComponent,
    CardsComponent,
    AddressComponent,
    OrderHistoryComponent
  ]
})
export class UserAccountModule { }
