import { Component, OnInit, AfterViewChecked} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { ChangeDetectorRef } from '@angular/core';

import { UndelyService } from '../../../Services/Undely.service';

@Component({
  selector: 'app-homeone',
  templateUrl: './HomeOne.component.html',
  styleUrls: ['./HomeOne.component.scss']
})
export class HomeoneComponent implements OnInit, AfterViewChecked{

   blogList              : any;
   productReviews        : any;
   productsArray         : any;
   productsSliderData    : any;
   newProductsSliderData : any;
   slideConfig = {
      slidesToShow: 4,
      slidesToScroll:4,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:1
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:2
            }
            },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               slidesToShow: 1,
               slidesToScroll:1
            }
         }
      ]
   };

   rtlSlideConfig = {
      slidesToShow: 4,
      slidesToScroll:4,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      rtl: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:1
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:1
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               slidesToShow: 1,
               slidesToScroll:1
            }
         }
      ]
   };

   constructor(public undelyService: UndelyService,
               private cdRef : ChangeDetectorRef) {
      this.getFeaturedProducts();
      this.getBlogList();
      this.getProductRevies();

      this.undelyService.featuredProductsSelectedTab = 0;
      this.undelyService.newArrivalSelectedTab = 0;
   }

   ngOnInit() {
   }

   ngAfterViewChecked() : void {
      this.cdRef.detectChanges();
   }

   public getFeaturedProducts() {
      this.undelyService.getProducts().valueChanges().subscribe(res => {this.productsArray = res});
   }

   public getBlogList() {
      this.undelyService.getBlogList().valueChanges().subscribe(res => {this.blogList = res});
   }

   public addToCart(value) {
      this.undelyService.addToCart(value);
   }

   public getProductRevies() {
      this.undelyService.getProductReviews().valueChanges().subscribe(res => {this.productReviews = res});
   }

   public addToWishlist(value) {
      this.undelyService.addToWishlist(value);
   }

   public onFeaturedSelectedTab(tabIndex) {
      this.productsSliderData = null;
      switch (tabIndex) {
         case 0:
            this.productsSliderData = this.productsArray.men;
         break;

         case 1:
            this.productsSliderData = this.productsArray.women;
         break;

         case 2:
            this.productsSliderData = this.productsArray.gadgets;
         break;

         case 3:
            this.productsSliderData = this.productsArray.accessories;
         break;
         
         default:
            // code...
            break;
      }

      return true;
   }

   public onNewArrivalsSelectedTab(tabIndex) {
      this.newProductsSliderData = null;
      switch (tabIndex) {
         case 0:
            this.newProductsSliderData = this.productsArray.men;
         break;

         case 1:
            this.newProductsSliderData = this.productsArray.women;
         break;

         case 2:
            this.newProductsSliderData = this.productsArray.gadgets;
         break;

         case 3:
            this.newProductsSliderData = this.productsArray.accessories;
         break;
         
         default:
            // code...
            break;
      }

      return true;
   }
}
