import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogsRoutes } from './Blogs.routing';
import { DetailsComponent } from './Details/Details.component';
import { GlobalModule } from '../../Global/Global.module';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(BlogsRoutes),
      GlobalModule,
      SharedModule
  ],
  declarations: [
     DetailsComponent
  ]
})
export class BlogsModule { }
