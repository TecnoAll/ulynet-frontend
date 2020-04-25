import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UndelyService } from '../../../Services/Undely.service';
declare var $: any;

@Component({
   selector: 'HeaderOne',
   templateUrl: './HeaderOne.component.html',
   styleUrls: ['./HeaderOne.component.scss']
})
export class HeaderOneComponent implements OnInit {

   toggleActive: boolean = false;
   cartProducts: any;
   popupResponse: any;
   wishlistProducts: any;

   constructor(public undelyService: UndelyService) { }

   ngOnInit() {
   }

   public toggleSearch() {
      $('app-main').toggleClass('form-open');
   }

   public toggleSidebar() {
      this.undelyService.sidenavOpen = !this.undelyService.sidenavOpen;
   }

   public openConfirmationPopup(value: any) {
      let message = 'Are you sure you want to delete this product?';
      this.undelyService.confirmationPopup(message).
         subscribe(res => { this.popupResponse = res },
            err => console.log(err),
            () => this.getPopupResponse(this.popupResponse, value, 'cart')
         );
   }

   public getPopupResponse(response: any, value: any, type) {
      if (response) {
         if (type == 'cart') {
            this.undelyService.removeLocalCartProduct(value);
         } else {
            this.undelyService.removeLocalWishlistProduct(value);
         }
      }
   }

   public addAllWishlistToCart(values: any) {
      this.undelyService.addAllWishListToCart(values);
   }

   public openWishlistConfirmationPopup(value: any) {
      let message = 'Are you sure you want to add all products?';
      this.undelyService.confirmationPopup(message).
         subscribe(res => { this.popupResponse = res },
            err => console.log(err),
            () => this.getPopupResponse(this.popupResponse, value, 'wishlist')
         );
   }

   public selectedCurrency(value) {
      this.undelyService.currency = value;
   }

   public selectedLanguage(value) {
      this.undelyService.language = value;
   }

   public addToCart(value) {
      this.undelyService.addToCart(value, 'wishlist');
   }
}
