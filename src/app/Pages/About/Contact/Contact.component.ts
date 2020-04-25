import { Component, OnInit } from '@angular/core';
import { UndelyService } from '../../../Services/Undely.service';

@Component({
  selector: 'app-contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.scss']
})
export class ContactComponent implements OnInit {

   contactInfo  : any;
   emailPattern : any = /\S+@\S+\.\S+/;

   constructor(public undelyService : UndelyService) {
      this.undelyService.getContactInfo().valueChanges().subscribe(res => {this.contactInfo = res});
   }

   ngOnInit() {
      
   }
}

