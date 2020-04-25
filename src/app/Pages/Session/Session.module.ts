import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';
import { SessionRoutes } from './Session.routing';
import { GlobalModule } from '../../Global/Global.module';
import { TemplatesModule } from '../../Templates/Templates.module';
import { RegisterComponent } from './Register/Register.component';
import { SignInComponent } from './SignIn/SignIn.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ThankYouComponent } from './ThankYou/ThankYou.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/Auth/auth.interceptor';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(SessionRoutes),
      GlobalModule,
      TemplatesModule,
      NgAisModule,
      SharedModule
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true
      }
   ],
   declarations: [
      RegisterComponent,
      SignInComponent,
      ThankYouComponent,
      ForgotPasswordComponent
   ]
})
export class SessionModule { }
