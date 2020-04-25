import { Component, OnInit } from '@angular/core';
import { UndelyService } from '../../../Services/Undely.service';

@Component({
  selector: 'app-Signin',
  templateUrl: './Signin.component.html',
  styleUrls: ['./Signin.component.scss']
})
export class SigninComponent implements OnInit {


   constructor(public undelyService : UndelyService) { }

   ngOnInit() {
   }

   public toggleRightSidenav() {
      this.undelyService.paymentSidenavOpen = !this.undelyService.paymentSidenavOpen;
   }

   public getCartProducts() {
      let total = 0;
      if(this.undelyService.localStorageCartProducts && this.undelyService.localStorageCartProducts.length>0) {
         for(let product of this.undelyService.localStorageCartProducts) {
            if(!product.quantity){
               product.quantity = 1;
            }
            total += (product.price*product.quantity);
         }
         total += (this.undelyService.shipping+this.undelyService.tax);
         return total;
      }
      return total;  
   }

}
