import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ChangeDetectorRef } from '@angular/core';

import { UndelyService } from '../../Services/Undely.service';

@Component({
   selector: 'undely-Cart',
   templateUrl: './Cart.component.html',
   styleUrls: ['./Cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewChecked {

   products: any;
   quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   popupResponse: any;

   constructor(public undelyService: UndelyService,
      private router: Router,
      private loadingBar: LoadingBarService,
      private cdRef: ChangeDetectorRef) {
   }

   ngOnInit() {
   }

   ngAfterViewChecked(): void {
      this.cdRef.detectChanges();
   }

   public removeProduct(value: any) {
      let message = 'Are you sure you want to delete this product?';
      this.undelyService.confirmationPopup(message).
         subscribe(res => { this.popupResponse = res },
            err => console.log(err),
            () => this.getPopupResponse(this.popupResponse, value)
         );
   }

   public getPopupResponse(response, value) {
      if (response) {
         this.undelyService.removeLocalCartProduct(value);
      }
   }

   public calculateProductSinglePrice(product: any, value: any) {
      let price = 0;
      product.quantity = value;
      price = product.price * value;
      return price;
   }

   public calculateTotalPrice() {
      let subtotal = 0;
      if (this.undelyService.localStorageCartProducts && this.undelyService.localStorageCartProducts.length > 0) {
         for (let product of this.undelyService.localStorageCartProducts) {
            subtotal += (product.price * product.quantity);
         }
         return subtotal;
      }
      return subtotal;

   }

   public getTotalPrice() {
      let total = 0;
      if (this.undelyService.localStorageCartProducts && this.undelyService.localStorageCartProducts.length > 0) {
         for (let product of this.undelyService.localStorageCartProducts) {
            total += (product.price * product.quantity);
         }
         total += (this.undelyService.shipping + this.undelyService.tax);
         return total;
      }

      return total;

   }

   public updateLocalCartProduct() {
      this.undelyService.updateAllLocalCartProduct(this.undelyService.localStorageCartProducts);
      this.router.navigate(['/checkout'])
   }

   public getQuantityValue(product) {
      if (product.quantity) {
         return product.quantity
      } else {
         return 1;
      }
   }
}
