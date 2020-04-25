import { Component, OnInit,ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { UndelyService } from '../../Services/Undely.service';

@Component({
  selector: 'undely-PaymentDetailSideBar',
  templateUrl: './PaymentDetailSideBar.component.html',
  styleUrls: ['./PaymentDetailSideBar.component.scss']
})
export class PaymentDetailSideBarComponent implements OnInit {

   cartProducts  : any;
   popupResponse : any;

   constructor(public undelyService: UndelyService,
               private loadingBar: LoadingBarService) { }

   ngOnInit() {
   }

   public calculateTotalPrice() {
      let subtotal = 0;
      if(this.undelyService.localStorageCartProducts && this.undelyService.localStorageCartProducts.length>0) {
         for(let product of this.undelyService.localStorageCartProducts) {
            subtotal += (product.price *product.quantity) ;
         }
      }
      return subtotal;
   }

   public removeProduct(value) {
      let message = "Are you sure you want to delete this product?";
      this.undelyService.confirmationPopup(message).
         subscribe(res => {this.popupResponse = res},
                   err => console.log(err),
                   ()  => this.getPopupResponse(this.popupResponse, value)
                  );
   }

   public getPopupResponse(response, value) {
      if(response){
         this.undelyService.removeLocalCartProduct(value);
         this.undelyService.paymentSidenavOpen = false;
      }
   }

   public calculateProductSinglePrice(product:any, value: any) {
      let price = 0;
      product.quantity = value;
      price = product.price*value;
      return price;
   }

   public getTotalPrice() {
      let total = 0;
      if(this.undelyService.localStorageCartProducts && this.undelyService.localStorageCartProducts.length>0) {
         for(let product of this.undelyService.localStorageCartProducts) {
            total += (product.price*product.quantity);
         }
         total += (this.undelyService.shipping+this.undelyService.tax);
      }
      return total;
   }

}
