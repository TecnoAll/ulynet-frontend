import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'ngx-card/ngx-card';
import { CheckoutRoutes } from './Checkout.routing';
import { PaymentComponent } from './Payment/Payment.component';
import { SigninComponent } from './Signin/Signin.component';
import { FinalReceiptComponent } from './FinalReceipt/FinalReceipt.component';

import { GlobalModule } from '../../Global/Global.module';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(CheckoutRoutes),
      GlobalModule,
      FormsModule,
      ReactiveFormsModule,
      CardModule,
      SharedModule
   ],
   declarations: [
      PaymentComponent,
      SigninComponent,
      FinalReceiptComponent
   ]
})
export class CheckoutModule { }
