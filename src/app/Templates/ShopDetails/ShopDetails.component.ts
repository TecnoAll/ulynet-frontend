import { Component, OnInit, Input, OnChanges, Renderer2, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
declare var $: any;

import {UndelyService } from '../../Services/Undely.service';

@Component({
  selector: 'undely-ShopDetails',
  templateUrl: './ShopDetails.component.html',
  styleUrls: ['./ShopDetails.component.scss']
})
export class ShopDetailsComponent implements OnInit, OnChanges {

   @Input() detailData : any;
   @Input() currency   : string;

   mainImgPath   : string;
   totalPrice    : any;
   type          : any;
   colorsArray   : string[] = ["Red", "Blue", "Yellow", "Green"];
   sizeArray     : number[] = [36,38,40,42,44,46,48];
   quantityArray : number[] = [1,2,3,4,5,6,7,8,9,10];
   productReviews : any;

   constructor(private route: ActivatedRoute,
               private router: Router, 
               public undelyService : UndelyService
               ) {
      this.undelyService.getProductReviews().valueChanges().subscribe(res => {this.productReviews = res});
   }

   ngOnInit() {
      this.mainImgPath = this.detailData.image;
      this.totalPrice  = this.detailData.price; 

      this.route.params.subscribe(res => {
         this.type = null;
         this.type = res.type; 
      });
   }

   ngOnChanges() {
      this.mainImgPath = null;
      this.totalPrice  = null;
      this.mainImgPath = this.detailData.image;
      this.totalPrice  = this.detailData.price; 
   }

   /**
    * getImagePath is used to change the image path on click event. 
    */
   public getImagePath(imgPath: string, index:number) {
      $('.p-link').removeClass('border-active');
      this.mainImgPath = imgPath;
      $("#"+index+"_img").addClass('border-active');
   }

   public calculatePrice(detailData:any, value: any) {
      detailData.quantity = value;
      this.totalPrice = detailData.price*value;
   }

   public reviewPopup(detailData) {
      let reviews : any = null;
      for(let review of this.productReviews) {
         // if((review.id == detailData.id) && (review.type == detailData.type) && (review.category == detailData.category)){
         //    singleProduct = review;
         //    break;
         // }

        reviews = review.user_rating;
      }

      this.undelyService.reviewPopup(detailData, reviews);
   }

   public addToWishlist(value:any) {
      this.undelyService.addToWishlist(value);
   }

   public addToCart(value:any) {
      this.undelyService.addToCart(value);
   }

   public buyNow(value:any) {
      this.undelyService.buyNow(value);
      this.router.navigate(['/checkout']);
   }

}
