import { Component, OnInit } from '@angular/core';
import { UndelyService } from '../../../Services/Undely.service';

@Component({
  selector: 'app-PrivacyPolicy',
  templateUrl: './PrivacyPolicy.component.html',
  styleUrls: ['./PrivacyPolicy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

   privacyPolicyData : any;

   constructor(public undelyService : UndelyService) { }

   ngOnInit() {
      this.undelyService.getPrivacyPolicy().valueChanges().subscribe(res => {this.privacyPolicyData = res});
   }

}
