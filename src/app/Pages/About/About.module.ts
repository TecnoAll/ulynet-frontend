import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutRoutes } from './About.routing';

import { AboutUsComponent } from './AboutUs/AboutUs.component';
import { ContactComponent } from './Contact/Contact.component';
import { FaqComponent } from './Faq/Faq.component';
import { TermAndConditionComponent } from './TermAndCondition/TermAndCondition.component';
import { PrivacyPolicyComponent } from './PrivacyPolicy/PrivacyPolicy.component';

import { GlobalModule } from '../../Global/Global.module';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AboutRoutes),
      GlobalModule,
      SharedModule
  ],
  declarations: [
     AboutUsComponent,
     ContactComponent,
     FaqComponent,
     TermAndConditionComponent,
     PrivacyPolicyComponent
  ]
})
export class AboutModule { }
