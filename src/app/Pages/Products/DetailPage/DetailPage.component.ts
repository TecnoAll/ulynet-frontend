import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { UndelyService } from '../../../Services/Undely.service';

@Component({
  selector: 'app-DetailPage',
  templateUrl: './DetailPage.component.html',
  styleUrls: ['./DetailPage.component.scss']
})
export class DetailPageComponent implements OnInit {

   id                : any;
   type              : any;
   apiResponse       : any;
   singleProductData : any;
   productsList      : any;

   constructor(private route: ActivatedRoute,
              private router: Router,
              public undelyService: UndelyService) {
      
   }

   ngOnInit() {
      this.route.params.subscribe(res => {
         this.id = res.id;
         this.type = res.type;
         this.getData();
      })
   }

   public getData() {
      this.undelyService.getProducts().valueChanges().subscribe(res => this.checkResponse(res));
   }

   public checkResponse(response) {
      this.productsList = null;
      this.productsList = response[this.type];
      for(let data of this.productsList)
      {
         if(data.id == this.id) {
            this.singleProductData = data;
            break;
         }
      }
   }

   public addToCart(value) {
      this.undelyService.addToCart(value);
   }

   public addToWishList(value) {
      this.undelyService.addToWishlist(value);
   }

}
