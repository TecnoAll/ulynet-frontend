import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';
import { FormsModule } from '@angular/forms';

import { ProductsRoutes } from './Products.routing';
import { ProductsListComponent } from './ProductsList/ProductsList.component';
import { DetailPageComponent } from './DetailPage/DetailPage.component';
import { GlobalModule } from '../../Global/Global.module';
import { TemplatesModule } from '../../Templates/Templates.module';
import { SharedModule } from 'src/app/Shared/shared.module';




@NgModule({
imports: [
	CommonModule,
	RouterModule.forChild(ProductsRoutes),
	GlobalModule,
	TemplatesModule,
	NgAisModule,
	FormsModule,
	SharedModule
],
declarations: [
	ProductsListComponent,
	DetailPageComponent
]
})
export class ProductsModule { }
