import { Component, OnInit } from '@angular/core';
import { UndelyService } from '../../../Services/Undely.service';

@Component({
  selector: 'app-Faq',
  templateUrl: './Faq.component.html',
  styleUrls: ['./Faq.component.scss']
})
export class FaqComponent implements OnInit {

   faqData : any 

   constructor(public undelyService : UndelyService) { }

   ngOnInit() {
      this.undelyService.getFaq().valueChanges().subscribe(res => {this.faqData = res});
   }

}
