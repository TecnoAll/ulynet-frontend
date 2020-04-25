import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GlobalModule } from '../Global/Global.module';
import { ProductGridComponent } from './Grid/ProductGrid/ProductGrid.component';
import { Grid3Component } from './Grid/Grid3/Grid3.component';
import { ReviewComponent } from './Review/Review.component';
import { ShopDetailsComponent } from './ShopDetails/ShopDetails.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      SharedModule,
      GlobalModule
   ],
   declarations: [
      ProductGridComponent,
      Grid3Component,
      ReviewComponent,
      ShopDetailsComponent
   ],
   exports: [
      ProductGridComponent,
      Grid3Component,
      ReviewComponent,
      ShopDetailsComponent
   ]
})
export class TemplatesModule { }
